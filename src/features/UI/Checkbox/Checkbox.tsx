import { useRef } from 'react'
import { Animated, Pressable, StyleSheet, ViewStyle } from "react-native"
import { Check } from "react-native-feather"
import { colors } from "../../../styles/colors"

interface Props {
    checked: boolean
    onPress: () => void
    style?: ViewStyle
}


export const Checkbox = ({ onPress, checked, ...props }: Props) => {
    const animatedFadeIn = useRef(new Animated.Value(0)).current

    const backgroundColorInterpolation = animatedFadeIn.interpolate({
        inputRange: [0, 1],
        outputRange: ["rgba(255, 255, 255, 0)", colors.accessibleSystemBlueLight]
    })
    const borderColorInterpolation = animatedFadeIn.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.defaultSystemGray02Light, colors.accessibleSystemBlueLight]
    })

    return (
        <Pressable onPress={handleOnPress} hitSlop={20}>
            <Animated.View style={[
                styles.box,
                props.style,
                {
                    backgroundColor: backgroundColorInterpolation,
                    borderColor: borderColorInterpolation
                }
            ]}>
                <Animated.View style={[
                    styles.check,
                    { opacity: animatedFadeIn }
                ]}>
                    <Check width="100%" height="100%" color="#fff" />
                </Animated.View>
            </Animated.View>
        </Pressable>
    )

    function fadeIn() {
        Animated.timing(animatedFadeIn, {
            toValue: 1,
            duration: 250,
            useNativeDriver: false,
        }).start()
    }

    function fadeOut() {
        Animated.timing(animatedFadeIn, {
            duration: 250,
            useNativeDriver: false,
            toValue: 0,
        }).start()
    }

    function handleOnPress() {
        if (checked)
            fadeOut()
        else
            fadeIn()
        onPress()
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
    check: {
        height: "100%",
        position: "absolute",
        width: "100%",
    }
})