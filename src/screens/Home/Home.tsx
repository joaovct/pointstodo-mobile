import { StyleSheet, Text, View, ImageBackground } from "react-native"
import { ScreenBase } from "../../features/UI/ScreenBase"
import { colors } from "../../styles/colors"
import { typography } from "../../styles/typography"
import { Task } from "./Task"

export const Home = () => {
    return (
        <>
            <ScreenBase style={{ paddingBottom: 76 }}>
                <Text style={typography.heading}>35 points</Text>
                <Text style={{ ...typography.medium, ...styles.textMedium }}>for today</Text>
                <View style={styles.listTask}>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </View>
            </ScreenBase>
            <View style={styles.addTaskContainer}>
                <View style={styles.addTask}>
                    <ImageBackground blurRadius={400}>
                        <Text style={{ ...typography.small, ...styles.addTaskPlaceholder }}>Write a new task...</Text>
                    </ImageBackground>
                </View>
            </View>
        </>
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
    addTaskContainer: {
        alignItems: "center",
        bottom: 32,
        justifyContent: "center",
        position: "absolute",
        width: "100%",
    },
    addTask: {
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, .85)",
        borderColor: colors.defaultSystemGray04Light,
        borderWidth: 1,
        borderRadius: 100,
        elevation: 2,
        justifyContent: "center",
        paddingTop: 8,
        paddingRight: 24,
        paddingBottom: 8,
        paddingLeft: 24,
        width: "auto",
        shadowColor: "#787880",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .16,
        shadowRadius: 8,
        //TODO: Background Blur
    },
    addTaskPlaceholder: {
        color: colors.acessibleSystemGrayLight,
    }
})