import { useEffect, useState, useCallback, MutableRefObject } from 'react'
import { ReturnObject as UseAnimationReturnObject } from './useAnimation'
import { GestureResponderEvent, Keyboard, NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native'

type Props = Required<Pick<UseAnimationReturnObject, "scaleUp" | "scaleDown" | "zoomInOut">> & {
    textInputRef: MutableRefObject<TextInput | undefined>
}

type ReturnObject = {
    onTouchStart: (e: GestureResponderEvent) => void
    onTouchEnd: (e: GestureResponderEvent) => void
    onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
    editable: boolean
}

export const useFocus = ({ scaleDown, scaleUp, zoomInOut, textInputRef }: Props): ReturnObject => {
    const [editable, setEditable] = useState(false)
    const [hasFocus, setHasFocus] = useState(false)

    const focus = () => {
        setHasFocus(true)
        textInputRef.current?.focus()
    }

    const onBlur = useCallback(() =>{
        setHasFocus(false)
        setEditable(false)
        textInputRef.current?.blur()
    }, [])

    const onTouchStart = useCallback(() => {
        setEditable(true)

        if (!hasFocus)
            scaleDown()
    }, [hasFocus, scaleDown])

    const onTouchEnd = useCallback((e: GestureResponderEvent) => {
        scaleUp()

        const thumbX = e.nativeEvent.pageX
        const thumbY = e.nativeEvent.pageY

        textInputRef.current?.measure((x, y, w, h, pageX, pageY) => {
            const hitSlop = 20
            const leftBoundary = pageX - hitSlop 
            const rightBoundary = pageX + w + hitSlop
            const topBoundary = pageY - hitSlop
            const bottomBoundary = pageY + h + hitSlop

            if(thumbX >= leftBoundary && thumbX <= rightBoundary && thumbY >= topBoundary && thumbY <= bottomBoundary){
                focus()
            }else{
                setEditable(false)
            }
        })
    }, [scaleUp])

    useEffect(() => {
        const listener = Keyboard.addListener("keyboardDidHide", onBlur)

        return () => listener.remove()
    }, [onBlur])

    useEffect(() => {
        zoomInOut(hasFocus)
    }, [hasFocus, zoomInOut])

    return {
        editable,
        onBlur,
        onTouchEnd,
        onTouchStart,
    }
}