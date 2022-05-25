import React, {useContext} from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { rentText } from "./rentText";
import { styles } from "../../styles";
import Selection from "../../../../../../../items/Selection";
import { listOfServices } from "../../../../../../../data/ListOfEachService";    
import Context from "../../../../../../../../context";
import { villa1_coverImage } from "../../../../../../../items/images/villasCoverImage";

const { width, height } = Dimensions.get("screen");

const Rent = () => {
    const {state, changeLangage, changeMode} = useContext(Context);
    const text = rentText[state.langage];
    const data = listOfServices["Nos villa"];

    return (
        <ScrollView style = {styles.container}>
            <Text style = { styles.title } >
                { text["grand titre"] }
            </Text>
            <Text style = {styles.simpleText}>
                { text["text intro"] }
            </Text>
            <View style = { styles.questionContainer } >
                <Text style = { styles.question } >
                    { text["question1"] }
                </Text>
                <Text>
                    { text["response1"] }
                </Text>
            </View>
            <Text style = {styles.simpleText}>
                { text["text1"] }
            </Text>

            <Image
                source={villa1_coverImage}
                style= {{
                    width: "auto",
                    height: width,
                    resizeMode: "cover"
                }}
            />

            <Text style = {styles.simpleText}>
                { text["text2"] }
            </Text>

            <View style = { styles.questionContainer } >
                <Text style = { styles.question } >
                    { text["question2"] }
                </Text>
                <Text>
                    { text["reponse2"] }
                </Text>
            </View>
            <Text style = { styles.question } >
                { text["proposition"] }
            </Text>

            <Selection data={data} />

        </ScrollView>
    )
}


export default Rent;
