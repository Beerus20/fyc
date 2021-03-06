import React from "react";
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { packGoldText } from "./packGoldText";
import { styles } from "../../styles";
import Selection from "../../../../../../../items/Selection";
import { listOfServices } from "../../../../../../../data/ListOfEachService";    
import PropositionPack from "../Proposition";

const { width, height } = Dimensions.get("screen");

const data_1 = [
    {
        titre: "DEMI PENSION AVEC BOISSON",
        prix: "29",
        description: "Petits déjeuners avec déjeuners ou dîners au choix et boissons sans alcool à discrétion toute la journée",
    },
    {
        titre: "ALL INCLUSIVE",
        prix: "48",
        description: "Tous les repas et boissons sans alcool à discrétion toute la journée",
    }
];

const data_2 = [
    {
        titre: "DÉJEUNER",
        prix: "24",
        description: "",
    },
    {
        titre: "DÎNER",
        prix: "24",
        description: "",
    }
];

const PackGold = () => {
    const text = packGoldText["fr"];
    const data = listOfServices["Nos villa"];

    return (
        <ScrollView style = {styles.container}>
             <Text style = { styles.title } >
                { text["grand titre"] }
            </Text>
            <Text style={styles.question} >
                { text["titre"] }
            </Text>
            <Text style={styles.simpleText}>
                { text["text"] }
            </Text>
            
            <Text style={styles.simpleTitle} >
                { text["offre"] }
            </Text>
            
            <PropositionPack data={data_1} />
            
            <Text style={styles.simpleText}>
                { text["offre text"] }
            </Text>

            <Text style={styles.simpleTitle} >
                { text["menu"] }
            </Text>
            
            <PropositionPack data={data_2} />
            
            <Text style={styles.simpleText}>
                { text["menu text"] }
            </Text>
            <Text style={{color:"white",textAlign:"center", marginVertical: 20}} >
                --------------------------------------
            </Text>
            <Text style={styles.simpleTitle} >
                { text["proposition"] }
            </Text>
            <Text style={styles.simpleText}>
                { text["proposition text"] }
            </Text>
            <Text style = {styles.question} >
                { text["autre proposition"] }
            </Text>

            <Selection data={data} />


        </ScrollView>
    )
}


export default PackGold;
