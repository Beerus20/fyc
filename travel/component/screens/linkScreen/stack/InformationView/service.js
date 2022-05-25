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
const spaces = 4;
const iconSize = ((width-50) / services.length) - spaces * 2;

const Services = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Services
            </Text>
            <View style = {styles.iconContainer}>
                {services.map((url, i) => (
                    <TouchableOpacity key={"image "+i} style = {styles.icon}>
                        <Icon  source={url} />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 20,
        marginHorizontal: 10
    },
    text:{
        fontWeight: "bold",
        fontSize: 20,
        margin: 10,
        color: "white"
    },

    iconContainer:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
    },

    icon:{
        justifyContent: "center",
        alignItems: "center",
        width: iconSize,
        height: iconSize,
        backgroundColor: "#fff3",
        borderRadius: 5,
        margin: spaces,
    },
})

export default Services;
