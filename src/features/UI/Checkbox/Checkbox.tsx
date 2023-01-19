import { useEffect, useRef, useState } from "react"
import { Animated, ViewStyle, Pressable, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { colors } from "../../../styles/colors"

interface Props {
    checked: boolean,
    onPress: () => void
    style?: ViewStyle,
}

export const Checkbox = ({ checked, onPress, ...props }: Props) => {
    const scaleValue = useRef(new Animated.Value(1)).current
    const opacityValue = useRef(new Animated.Value(0)).current
    const [iconSize, setIconSize] = useState(20)

    const backgroundColorInterpolation = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(255, 255, 255, 0)", colors.accessibleSystemBlueLight]
    })
    const borderColorInterpolation = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.defaultSystemGray02Light, colors.accessibleSystemBlueLight]
    })

    return (
        <Pressable onPress={handleOnPress} hitSlop={10}>
            <Animated.View
                style={[
                    styles.box,
                    {
                        backgroundColor: backgroundColorInterpolation,
                        borderColor: borderColorInterpolation,
                        transform: [{ scale: scaleValue }],
                    }
                ]}
                onLayout={layoutEvent =>
                    setIconSize(layoutEvent.nativeEvent.layout.width)
                }
            >
                <Animated.View style={{ opacity: opacityValue }}>
                    <Feather
                        name="check"
                        color="#fff"
                        size={iconSize - 4}
                    />
                </Animated.View>
            </Animated.View>
        </Pressable>
    )

    function handleOnPress() {
        onPress()
        Animated.parallel([
            Animated.timing(opacityValue, {
                toValue: checked ? 1 : 0,
                delay: 0,
                duration: 150,
                useNativeDriver: false
            }),
            Animated.sequence([
                Animated.timing(scaleValue, {
                    toValue: .9,
                    duration: 150,
                    useNativeDriver: false
                }),
                Animated.spring(scaleValue, {
                    toValue: 1,
                    friction: 10,
                    useNativeDriver: false,
                }),
            ])
        ]).start()
    }
}

const styles = StyleSheet.create({
    box: {
        alignItems: "center",
        borderColor: colors.defaultSystemGray02Light,
        borderRadius: 4,
        borderWidth: 2,
        height: 20,
        justifyContent: "center",
        width: 20,
    },
})