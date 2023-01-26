import { colors } from "@styles/colors"
import { typography } from "@styles/typography"
import { useCallback, useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { Animated, View, Pressable, GestureResponderEvent, LayoutRectangle, UIManager, PushNotificationIOS } from "react-native"
import { Dimensions } from "react-native"
import { TextInput } from "react-native"
import { StyleSheet } from "react-native"
import { useAnimation } from "./hooks/useAnimation"
import { useFocus } from "./hooks/useFocus"

const AnimatedInputText = Animated.createAnimatedComponent(TextInput)

export const AddTask = () => {
    const textInputRef = useRef<TextInput>()
    const initialValue = {
        borderRadius: 100,
        bottom: 32,
        scale: 1,
        paddingLeft: 24,
        paddingRight: 24,
        width: 152
    }
    const finalValue = {
        borderRadius: 6,
        bottom: 16,
        scale: .9,
        paddingLeft: 16,
        paddingRight: 8,
        width: Dimensions.get("window").width - 8 - 8
    }
    const { values, position, panResponder, ...animations } = useAnimation({ textInputRef, initialValue, finalValue })
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
                    elevation: 2,
                    backgroundColor: "none",
                    ...position.getLayout()
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
                        {
                            borderRadius: values.borderRadius,
                            paddingLeft: values.paddingLeft,
                            paddingRight: values.paddingRight,
                            width: values.width,
                            transform: [{ scale: values.scale }]
                        }
                    ]}
                />
            </Animated.View>
        </Animated.View>
    )
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
    inputText: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, .85)",
        borderColor: colors.defaultSystemGray04Light,
        borderWidth: 1,
        justifyContent: "center",
        paddingTop: 8,
        paddingRight: 24,
        paddingBottom: 8,
        paddingLeft: 24,
        height: 40,
        width: "auto",
        shadowColor: "#787880",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .16,
        shadowRadius: 8,
        //TODO: Background Blur
    },
    input: {
        color: colors.acessibleSystemGrayLight,
    }
})