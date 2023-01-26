import { MutableRefObject, useCallback, useRef, useState } from "react"
import { Animated, Easing, TextInput } from "react-native"

type StyleProps = {
    borderRadius: number
    bottom: number
    scale: number
    paddingLeft: number
    paddingRight: number
    width: number
}

type Props = {
    textInputRef: MutableRefObject<TextInput | undefined>
    initialValue: StyleProps
    finalValue: StyleProps
}

export type ReturnObject = {
    values: {
        [K in keyof StyleProps]: Animated.Value
    }
    zoomInOut: (hasFocus: boolean) => void
    scaleDown: () => void
    scaleUp: () => void
}

export const useAnimation = ({ initialValue, finalValue }: Props): ReturnObject => {
    const values = useRef<ReturnObject["values"]>({
        borderRadius: new Animated.Value(initialValue.borderRadius),
        bottom: new Animated.Value(initialValue.bottom),
        scale: new Animated.Value(initialValue.scale),
        paddingLeft: new Animated.Value(initialValue.paddingLeft),
        paddingRight: new Animated.Value(initialValue.paddingRight),
        width: new Animated.Value(initialValue.width)
    }).current

    const zoomInOut = useCallback((hasFocus: boolean) => {
        const configAnimation = {
            duration: 500,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false
        }

        Animated.parallel([
            Animated.timing(values.borderRadius, {
                ...configAnimation,
                toValue: !hasFocus ? initialValue.borderRadius : finalValue.borderRadius,
            }),
            Animated.timing(values.bottom, {
                ...configAnimation,
                toValue: !hasFocus ? initialValue.bottom : finalValue.bottom,
            }),
            Animated.timing(values.paddingLeft, {
                ...configAnimation,
                toValue: !hasFocus ? initialValue.paddingLeft : finalValue.paddingLeft
            }),
            Animated.timing(values.paddingRight, {
                ...configAnimation,
                toValue: !hasFocus ? initialValue.paddingRight : finalValue.paddingRight
            }),
            Animated.timing(values.width, {
                ...configAnimation,
                toValue: !hasFocus ? initialValue.width : finalValue.width,
            })
        ]).start()
    }, [initialValue, finalValue])

    const scaleDown = useCallback(() => { 
        Animated.timing(values.scale, {
            toValue: finalValue.scale,
            // duration: 150,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false
        }).start()
    }, [])
    
    const scaleUp = useCallback(() => { 
        Animated.timing(values.scale, {
            toValue: initialValue.scale,
            // duration: 150,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false
        }).start()
    }, [])

    return { values, zoomInOut, scaleDown, scaleUp }
}