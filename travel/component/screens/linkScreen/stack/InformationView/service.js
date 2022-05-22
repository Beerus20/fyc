import React from "react";
import { View, Text, Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "../../../../navigation/Icon";
import { 
    yoga,
    spa,
    catalogue,
    doorbell,
    bed,
    menu
} from "../../../../items/imageIcons";


const services = [
    yoga,
    spa,
    catalogue,
    doorbell,
    bed,
    menu
];

const width = Dimensions.get("window").width;
const spaces = 5;
const iconSize = (width / services.length) - spaces * 2;

const Services = () => {
    return (
        <View>
            <Text style={styles.text}>
                Services
            </Text>
            <View style = {styles.iconContainer}>
                {services.map((url, i) => (
                    <TouchableOpacity style = {styles.icon}>
                        <Icon key={"image "+i} source={url} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
        color: "white"
    },

    iconContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
    },

    icon:{
        justifyContent: "center",
        alignItems: "center",
        width: iconSize,
        height: iconSize,
        backgroundColor: "#fff3",
        borderRadius: 5,
        margin: spaces,
        padding: spaces,
        
    }
})

export default Services;
