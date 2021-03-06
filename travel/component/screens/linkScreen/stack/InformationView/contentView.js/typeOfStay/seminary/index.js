import React, {useContext} from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { seminaryText } from "./seminaryText";
import { styles } from "../../styles";
import Context from "../../../../../../../../context";

const { width, height } = Dimensions.get("screen");

const Seminary = () => {
    const {state, changeLangage, changeMode} = useContext(Context);
    const text = seminaryText[state.langage];

    return (
        <ScrollView style = {styles.container}>
            <Text style = { styles.title } >
                { text["grand titre"] }
            </Text>
            <Text style={styles.simpleText}>
                { text["text"] }
            </Text>
            <Text style={styles.simpleText}>
                { text["partenaire"] }
            </Text>

        </ScrollView>
    )
}


export default Seminary;
