import React, {useContext} from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { weddingText } from "./weddingText";
import Icon from "../../../../../../../navigation/Icon";
import { styles } from "../../styles";
import Selection from "../../../../../../../items/Selection";
import { listOfServices } from "../../../../ListView/ListOfEachService";    
import Context from "../../../../../../../../context";

const { width, height } = Dimensions.get("screen");


const Wedding = () => {
    const data = listOfServices["Nos activités"].concat(listOfServices["Nos villa"]);
    const {state, changeLangage, changeMode} = useContext(Context);
    const text = weddingText[state.langage];

    return (
        <ScrollView style = {styles.container}>
            <Text style = { styles.title } >
                { text["grand titre"] }
            </Text>
            <Text>
                { text["text intro"] }
            </Text>
            <View style = { styles.questionContainer } >
                <Text>
                    { text["text"] }
                </Text>
                <Text style = { styles.question } >
                    { text["question"] }
                </Text>
                <Text>
                    { text["reponse"] }
                </Text>
            </View>
           
            <View
                style= {{
                    width,
                    height: width,
                    backgroundColor: "red"
                }}
            />

            <Selection data={data} />
        </ScrollView>
    )
}


export default Wedding;