import { Dropdown } from "@features/UI/Dropdown"
import { colors } from "@styles/colors"
import { typography } from "@styles/typography"
import { useRef } from "react"
import { Animated } from "react-native"
import { Dimensions } from "react-native"
import { TextInput } from "react-native"
import { StyleSheet } from "react-native"
import { useAnimation } from "./hooks/useAnimation"
import { useFocus } from "./hooks/useFocus"

const AnimatedInputText = Animated.createAnimatedComponent(TextInput)

export const AddTask = () => {
    const textInputRef = useRef<TextInput>()
    const { values, position, panResponder, ...animations } = useAnimation({ initialValue, finalValue })
    const { editable, onBlur, onTouchEnd, onTouchStart } = useFocus({ textInputRef, ...animations })

    return (
        <Animated.View
            style={[
                styles.container,
                { bottom: values.bottom, }
            ]}
        >
            <Animated.View
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                style={{
                    ...styles.innerContainer,
                    ...position.getLayout(),
                    ...{
                        borderRadius: values.borderRadius,
                        paddingLeft: values.paddingLeft,
                        paddingRight: values.paddingRight,
                        width: values.width,
                        transform: [{ scale: values.scale }]
                    }
                }}
                {...panResponder.panHandlers}
            >
                <AnimatedInputText
                    editable={editable}
                    placeholder="Write a new task..."
                    ref={textInputRef}
                    onBlur={onBlur}
                    style={[
                        typography.small,
                        styles.inputText,
                    ]}
                />
                <Animated.View
                    style={{
                        ...styles.dropdownContainer,
                        transform: [{ scaleY: values.scaleY, }]
                    }}
                >
                </Animated.View>
            </Animated.View>
        </Animated.View >
    )
}

const initialValue = {
    borderRadius: 100,
    bottom: 32,
    scale: 1,
    scaleY: 0,
    paddingLeft: 24,
    paddingRight: 24,
    width: 156,
}
const finalValue = {
    borderRadius: 6,
    bottom: 16,
    scale: .9,
    scaleY: 1,
    paddingLeft: 16,
    paddingRight: 8,
    width: Dimensions.get("window").width - 8 - 8
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        bottom: 32,
        justifyContent: "center",
        paddingLeft: 16,
        paddingRight: 16,
        position: "absolute",
        width: "100%",
    },
    innerContainer: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, .85)",
        borderColor: colors.defaultSystemGray04Light,
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 24,
        paddingRight: 24,
        width: "auto"
    },
    inputText: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
        paddingBottom: 8,
        height: 40,
        minWidth: 105,
        flex: 1,
        shadowColor: "#787880",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .16,
        shadowRadius: 8,
    },
    input: {
        color: colors.acessibleSystemGrayLight,
    },
    dropdownContainer: {},
})