import React, {useContext} from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { birthdayText } from "./birthdayText";
import { styles } from "../../styles";
import Selection from "../../../../../../../items/Selection";
import { listOfServices } from "../../../../ListView/ListOfEachService";    
import Context from "../../../../../../../../context";

const { width, height } = Dimensions.get("screen");

const Birthday = () => {
    const {state, changeLangage, changeMode} = useContext(Context);
    const text = birthdayText[state.langage];
    const data = listOfServices["Nos activités"].concat(listOfServices["Nos villa"]);
    console.log("In birthday page");
    return (
        <ScrollView style = {styles.container}>
            <Text style = { styles.title } >
                { text["grand titre"] }
            </Text>
            <Text>
                { text["text"] }
            </Text>
            <Selection data={data} />
        </ScrollView>
    )
}


export default Birthday;
