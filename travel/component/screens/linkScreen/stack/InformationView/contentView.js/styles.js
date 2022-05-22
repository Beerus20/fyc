import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingBottom: 150
    },
    title: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 20,
    },
    simpleTitle:{
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 5,
    },
    simpleText:{
        color: "white"
    },
    questionContainer: {
        backgroundColor: "#ccc",
        borderRadius: 15,
        marginHorizontal: 5,
        marginVertical: 15,
        padding: 10
    },
    question: {
        color: "red",
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 5,
    }
});
