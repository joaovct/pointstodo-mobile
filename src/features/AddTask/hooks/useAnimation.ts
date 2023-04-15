import { useCallback, useRef } from "react"
import { Animated, Easing, PanResponder, PanResponderInstance } from "react-native"

type StyleProps = {
    borderRadius: number
    bottom: number
    scale: number
    scaleY: number
    paddingLeft: number
    paddingRight: number
    width: number
}

type Props = {
    initialValue: StyleProps
    finalValue: StyleProps
}

export type ReturnObject = {
    values: {
        [K in keyof StyleProps]: Animated.Value
    }
    position: Animated.ValueXY
    panResponder: PanResponderInstance
    zoomInOut: (hasFocus: boolean) => void
    scaleDown: () => void
    scaleUp: () => void
}

export const useAnimation = ({ initialValue, finalValue }: Props): ReturnObject => {
    const values = useRef<ReturnObject["values"]>({
        borderRadius: new Animated.Value(initialValue.borderRadius),
        bottom: new Animated.Value(initialValue.bottom),
        scale: new Animated.Value(initialValue.scale),
        scaleY: new Animated.Value(initialValue.scaleY),
        paddingLeft: new Animated.Value(initialValue.paddingLeft),
        paddingRight: new Animated.Value(initialValue.paddingRight),
        width: new Animated.Value(initialValue.width),
    }).current
    const position = useRef(new Animated.ValueXY()).current
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, gestureState) => {
                const maxY = 4
                const maxX = 4
                let newX = gestureState.dx
                let newY = gestureState.dy

                if (Math.abs(newX) > maxX) {
                    if (newX < 0)
                        newX = maxX * -1
                    else
                        newX = maxX
                }
                if (Math.abs(newY) > maxY) {
                    if (newY < 0)
                        newY = maxY * -1
                    else
                        newY = maxY
                }

                Animated.spring(position, {
                    toValue: { x: newX, y: newY },
                    friction: 4,
                    useNativeDriver: false
                }).start()
            },
            onPanResponderRelease: () => {
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    friction: 8,
                    useNativeDriver: false
                }).start()
            }
        }),
    ).current

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
            Animated.timing(values.scaleY, {
                ...configAnimation,
                delay: hasFocus ? 500 : 0,
                toValue: !hasFocus ? initialValue.scaleY : finalValue.scaleY
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
            easing: Easing.out(Easing.exp),
            useNativeDriver: false
        }).start()
    }, [])

    const scaleUp = useCallback(() => {
        Animated.timing(values.scale, {
            toValue: initialValue.scale,
            easing: Easing.out(Easing.exp),
            useNativeDriver: false
        }).start()
    }, [])

    return { values, position, panResponder, zoomInOut, scaleDown, scaleUp }
}