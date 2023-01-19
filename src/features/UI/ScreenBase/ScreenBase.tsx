import { StyleSheet, SafeAreaView, ScrollView, View, ViewProps, StyleProp } from 'react-native'
import { colors } from '@styles/colors'

interface Props extends ViewProps {
    children: React.ReactNode
}

export const ScreenBase = ({ children, ...props }: Props) => {
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ minHeight: "100%" }}>
                <View {...props} style={[styles.container, props.style]} >
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.systemBackgroundLight,
        flex: 1,
        paddingTop: 80,
        paddingRight: 16,
        paddingBottom: 32,
        paddingLeft: 16,
    }
})