import { cast } from "mobx-state-tree"
import { StyleSheet, Text, View } from "react-native"
import { ScreenBase } from "@features/UI/ScreenBase"
import { typography } from "@styles/typography"
import { Task } from "./Task"
import { AddTask } from "@features/AddTask"

export const Home = () => {
    return (
        <>
            <ScreenBase style={{ paddingBottom: 76 }}>
                <Text style={typography.heading}>35 points</Text>
                <Text style={{ ...typography.medium, ...styles.textMedium }}>for today</Text>
                <View style={styles.listTask}>
                    <Task task={{
                        id: "1",
                        checked: false,
                        title: "Clean the backyard",
                        description: "",
                        difficulty: {
                            quantityPoints: 8,
                        },
                        category: {
                            id: "c-1",
                            icon: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/house-with-garden_1f3e1.png",
                            name: "Family"
                        },
                        subtasks: { all: cast([]) }
                    }}/>
                </View>
            </ScreenBase>
            <AddTask/>
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
})