import { StyleSheet, View } from 'react-native'
import { colors } from '../../styles/colors'

interface Props {
    children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
    return(
        <View style={styles.container}>
            {children}
        </View>
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