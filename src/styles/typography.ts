import { StyleSheet } from "react-native"
import { colors } from "./colors"


export const typography = StyleSheet.create({
    heading: {
        color: colors.defaultSystemGray06Dark,
        fontFamily: 'Inter_700Bold',
        fontSize: 40,
    },
    medium: {
        color: colors.defaultSystemGray06Dark,
        fontFamily: 'Inter_600SemiMedium',
        fontSize: 20,
    },
    text: {
        color: colors.defaultSystemGray06Dark,
        fontFamily: 'Inter_500Medium',
        fontSize: 16,
    },
    small: {
        color: colors.defaultSystemGray06Dark,
        fontFamily: "Inter_400Regular",
        fontSize: 12,
    }
})