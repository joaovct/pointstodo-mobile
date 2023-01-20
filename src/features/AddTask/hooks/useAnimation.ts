import { MutableRefObject, useCallback, useRef, useState } from "react"
import { Animated, Easing, TextInput } from "react-native"

type StyleProps = {
    borderRadius: number
    bottom: number
    paddingLeft: number
    paddingRight: number
    width: number
}

type Props = {
    textInputRef: MutableRefObject<TextInput | undefined>
    initialValue: StyleProps
    finalValue: StyleProps
}

type ReturnObject = {
    values: {
        [K in keyof StyleProps]: Animated.Value
    }
    runAnimation: (hasFocus: boolean) => void
}

export const useAnimation = ({ initialValue, finalValue }: Props): ReturnObject => {
    const values = useRef({
        borderRadius: new Animated.Value(initialValue.borderRadius),
        bottom: new Animated.Value(initialValue.bottom),
        paddingLeft: new Animated.Value(initialValue.paddingLeft),
        paddingRight: new Animated.Value(initialValue.paddingRight),
        width: new Animated.Value(initialValue.width)
    }).current

    const runAnimation = useCallback((hasFocus: boolean) => {
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

    return { values, runAnimation }
}