import { StyleSheet, Text, View, Image } from "react-native"
import { Layout } from "../components/Layout"
import { colors } from "../styles/colors"
import { typography } from "../styles/typography"

export const Home = () => {
    return (
        <Layout>
            <Text style={typography.heading}>35 points</Text>
            <Text style={{ ...typography.medium, ...styles.textMedium }}>for today</Text>
            <View style={styles.listTask}>
                <View style={styles.task}>
                    <View style={styles.checkboxTitle}>
                        <View style={styles.checkbox} />
                        <Text style={{ ...typography.text, ...styles.title }}>Clean the backyard</Text>
                    </View>
                    <View style={styles.description}>
                        <View style={styles.badget}>
                            <Text style={{ ...typography.small, ...styles.badgetText }}>8 points</Text>
                        </View>
                        <View style={styles.list}>
                            <Image
                                style={styles.listIcon}
                                source={{
                                    uri: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/house-with-garden_1f3e1.png"
                                }}
                            />
                            <Text style={{ ...typography.small, ...styles.listTitle }}>House</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Layout>
    )
}

const gapTask =  8

const styles = StyleSheet.create({
    textMedium: {
        fontFamily: "Inter_400Regular"
    },
    listTask: {
        flex: 1,
        marginTop: 48,
        flexDirection: "column",
    },
    task: {
        backgroundColor: "#fff",
        borderRadius: 12,
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