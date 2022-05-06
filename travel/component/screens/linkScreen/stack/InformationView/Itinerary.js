import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import { itinerary } from "../../../../items/imageIcons";
import { marocImageMap } from "../../../../items/images/images";


const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;


const Itinerary = () => {
    return (
        <View style={{ height: (HEIGHT * .4), backgroundColor: "#465531" }}>
            <View style={{ flexDirection:"row", width: WIDTH,justifyContent: 'space-between', zIndex:1 }}>
                <Text style={{ width: 150, margin: 10, fontWeight: "bold", fontSize: 12 }} >
                    Location of the place
                </Text>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", margin: 10 }} >
                    <Image
                        source={itinerary}
                        style={ styles.itineraryIcon }  
                    />
                    <Text style={{ fontWeight: "bold", fontSize: 12 }} >
                        Itinéraire
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={ styles.imageContainer } >
                <Image
                    source={marocImageMap}
                    style={ styles.image }
                />
            </View>
            <View style={{ position: "absolute", bottom: 0, left: 0, margin: 10 }}>
                <Text>
                    Distance
                </Text>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                    0.0 Km
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itineraryIcon: {
        width: 30,
        height: 30,
        tintColor: "red",
        resizeMode: "cover"
    },
    imageContainer: {
        position: "absolute",
        top: 0,
        width: WIDTH, 
        height: (HEIGHT * .4),
        justifyContent:"center", 
        alignItems: "center" 
    },
    image: {
        top: 0,
        width: WIDTH,
        height: (HEIGHT * .4),
        resizeMode: "cover"
    }
});

export default Itinerary;
