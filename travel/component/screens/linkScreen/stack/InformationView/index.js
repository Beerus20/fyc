import React, { useState, useRef, useContext } from "react";
import { ScrollView, Dimensions,View, Text, StyleSheet, Image, Animated, TouchableOpacity, SafeAreaView } from "react-native";
import { Rent, Seminary, Wedding, Event, Birthday } from "./contentView.js/typeOfStay";
import { PackGold, PackSilver, PackPlatinium } from "./contentView.js/packs";
import Carousel from "../../../../items/Carousel";
import Context from "../../../../../context";
import Services from "./service";
import Itinerary from "./Itinerary";
import { imageList } from "../../../../data/imageList";

const { width, height } = Dimensions.get("window");
const images = imageList["Nos villa"].map(villa => villa.url);

const render = ({title, selectedService}) => {
    const service = selectedService.fr;
    switch (title) {
        case "Type de séjour":
            {
                switch (service) {
                    case "LOCATION":        return <Rent/>;
                    case "SEMINAIRE":       return <Seminary/>;
                    case "MARIAGE":         return <Wedding/>;
                    case "EVENEMENTIELLE":  return <Event/>;
                    case "ANNIVERSAIRE":    return <Birthday/>;
                    default: break;
                }
            }
        case "Prémium service concièrge":
            {
                switch (service) {
                    case "SILVER PACK":       return <PackSilver/>;
                    case "GOLDEN PACK":       return <PackGold/>;
                    case "PLATINIUM PACK":    return <PackPlatinium/>;
                    default: break;
                }
            }
    
        default:
            break;
    }
}

const InformationView = ({route,navigation}) => {
    const {state} = useContext(Context);
    const scrollX = useRef(new Animated.Value(0)).current;
    const params = route.params;
    return (
        <View style={styles.container}>
            <ScrollView style = {{
                height,
            }}> 
                <Carousel data={images} />
                <Services/>
                <Itinerary/>
                {render(params)}

                
            </ScrollView>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Formulaire")}
                style={styles.button}
            >
                <Text style={styles.text} >
                    Reservation
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#000"
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 90,
        width: width - 20,
        height: height * .05,
        marginHorizontal: 10, 
        backgroundColor: "green",
        borderRadius: 6,
    },
    text: {
        color: "#fff",
    }
});

export default InformationView;