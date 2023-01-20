import { colors } from "@styles/colors"
import { typography } from "@styles/typography"
import { useState } from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { Animated } from "react-native"
import { Dimensions } from "react-native"
import { TextInput } from "react-native"
import { StyleSheet } from "react-native"
import { useAnimation } from "./hooks/useAnimation"
import { Keyboard } from 'react-native'

const AnimatedInputText = Animated.createAnimatedComponent(TextInput)

export const AddTask = () => {
    const textInputRef = useRef<TextInput>()
    const initialValue = {
        borderRadius: 100,
        bottom: 32,
        paddingLeft: 24,
        paddingRight: 24,
        width: 152
    }
    const finalValue = {
        borderRadius: 6,
        bottom: 6,
        paddingLeft: 16,
        paddingRight: 8,
        width: Dimensions.get("window").width - initialValue.paddingLeft
    }
    const { values, runAnimation } = useAnimation({ textInputRef, initialValue, finalValue })
    const [hasFocus, setHasFocus] = useState(false)
    
    useEffect(() => {
        runAnimation(hasFocus)
    }, [hasFocus, runAnimation])

    useEffect(() => { 
        const listener = Keyboard.addListener("keyboardDidHide", () => {
            runAnimation(false)
            textInputRef.current?.blur()
        })

        return () => listener.remove()
    }, [])

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    bottom: values.bottom,
                }
            ]}
        >
            <AnimatedInputText
                placeholder="Write a new task..."
                ref={textInputRef}
                onFocus={() => setHasFocus(true)}
                onBlur={() => setHasFocus(false)}
                style={[
                    typography.small,
                    styles.inputText,
                    {
                        borderRadius: values.borderRadius,
                        paddingLeft: values.paddingLeft,
                        paddingRight: values.paddingRight,
                        width: values.width,
                    }
                ]}
            />
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
        elevation: 2,
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