import { useState } from "react"
import { StyleSheet, Text, View, Image } from "react-native"
import { Checkbox } from "../../../features/UI"
import { ITask } from "../../../models/Store/Tasks/Task"
import { colors } from "../../../styles/colors"
import { typography } from "../../../styles/typography"

type Props = {
    task: ITask
}

export const Task = ({ task }: Props) => {
    const [isChecked, setIsChecked] = useState(false)

    const onPress = () => {
        setIsChecked(checked => !checked)
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkboxTitle}>
                <Checkbox checked={isChecked} onPress={onPress}/>
                <Text style={{ ...typography.text, ...styles.title }}>{task.title}</Text>
            </View>
            <View style={styles.description}>
                <View style={styles.badget}>
                    {/* create DifficultyBadget */}
                    <Text style={{ ...typography.small, ...styles.badgetText }}>{formatDifficulty(task.difficulty.quantityPoints)}</Text>
                </View>
                <View style={styles.list}>
                    <Image
                        style={styles.listIcon}
                        source={{
                            uri: task.category.icon
                        }}
                    />
                    <Text style={{ ...typography.small, ...styles.listTitle }}>{task.category.name}</Text>
                </View>
            </View>
        </View>
    )
}

function formatDifficulty(quantityPoints: number): string {
    return quantityPoints > 1 ? `${quantityPoints} points` : `${quantityPoints} point`
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderRadius: 12,
        marginTop: 8,
        padding: 16,
        width: "100%",
    },
    checkboxTitle: {
        alignItems: "center",
        flexDirection: "row",
    },
    checkbox: {
        borderColor: colors.defaultSystemGray02Light,
        borderRadius: 4,
        borderWidth: 2,
        height: 20,
        width: 20,
    },
    title: {
        marginLeft: 16,
    },
    description: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 4,
        paddingLeft: 36,
    },
    badget: {
        alignSelf: "flex-start",
        backgroundColor: "rgba(255,69,58, .2)",
        borderRadius: 4,
        paddingBottom: 4,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
    },
    badgetText: {
        color: colors.defaultSystemRedDark,
        fontFamily: "Inter_500Medium"
    },
    list: {
        alignItems: "center",
        flexDirection: "row",
        marginLeft: 10,
    },
    listIcon: {
        height: 16,
        width: 16,
    },
    listTitle: {
        color: colors.defaultSystemGray02Dark,
        marginLeft: 4,
    }
})