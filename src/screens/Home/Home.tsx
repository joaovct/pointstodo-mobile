import { StyleSheet, Text, View, Image } from "react-native"
import { Layout } from "../components/Layout"
import { typography } from "../styles/typography"
import { Task } from "./Task"

export const Home = () => {
    return (
        <Layout>
            <Text style={typography.heading}>35 points</Text>
            <Text style={{ ...typography.medium, ...styles.textMedium }}>for today</Text>
            <View style={styles.listTask}>
                <Task />
                <Task />
                <Task />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    textMedium: {
        fontFamily: "Inter_400Regular"
    },
    listTask: {
        flex: 1,
        marginTop: 48,
        flexDirection: "column",
        // gap between children
        top: -8,
    },
})