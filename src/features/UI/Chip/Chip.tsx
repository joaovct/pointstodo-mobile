import { typography } from "@styles/typography"
import { StyleSheet } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"

export interface Props {
    color: string
    label: string
    labelColor: string
}

export const Chip = ({ color, label, labelColor }: Props) => {
    return(
        <View style={[ styles.container, { backgroundColor: color } ]}>
            <Text style={[ typography.small, styles.text, { color: labelColor } ]}>
                {label}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 6,
        paddingTop: 4,
        paddingRight: 8,
        paddingBottom: 4,
        paddingLeft: 8,
    },
    text: {
        fontFamily: "Inter_500Medium"
    }
})