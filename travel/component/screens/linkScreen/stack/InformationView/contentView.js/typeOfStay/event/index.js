import React, {useContext} from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { eventText } from "./eventText";
import { styles } from "../../styles";
import Selection from "../../../../../../../items/Selection";
import { listOfServices } from "../../../../ListView/ListOfEachService";    
import Context from "../../../../../../../../context";
import { image6 } from "../../../../../../../items/images/images";

const { width, height } = Dimensions.get("screen");

const Event = () => {
    const {state, changeLangage, changeMode} = useContext(Context);
    const text = eventText[state.langage];
    const data = listOfServices["Nos activités"];

    return (
        <ScrollView style = {styles.container}>
            <Text style = { styles.title } >
                { text["grand titre"] }
            </Text>
            <Text style={styles.simpleText}>
                { text["text"] }
            </Text>

            <Image
                source={image6}
                style={{width,height: width,resizeMode:"cover"}}
            />

            <View style = { styles.questionContainer } >
                <Text style = { styles.question } >
                    { text["titre"] }
                </Text>
                <Text>
                    { text["explication"] }
                </Text>
            </View>

            <Text style={styles.simpleText}>
                { text["end"] }
            </Text>
            <Text style = { styles.question } >
                { text["proposition"] }
            </Text>
            <Selection data={data} />

        </ScrollView>
    )
}

export default Event;
