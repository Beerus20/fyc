import React from "react";
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

const PropositionPack = ({data}) => {
    return (
        <View>
            <FlatList
            data = {data}
            horizontal
            pagingEnabled
            keyExtractor = { (_,index) => index.toString() }
            renderItem = { ({item}) => {
                return (
                    <View style = {styles.container} >
                        <Text style={{ fontWeight: "bold",color:"white" }} >
                            {item.titre}
                        </Text>
                        <View style = {styles.bar}/>
                        <View style = {{ flexDirection: "row", alignItems:"center", margin: 5 }}>
                            <Text style = {styles.price}>{item.prix}€</Text>
                            <Text> /jour/personnes</Text>
                        </View>
                        <Text style={{ color: "white", textAlign: "center", margin: 5 }} >
                            {item.description}
                        </Text>
                        <TouchableOpacity style={styles.button} >
                            <Text style={{color:"white"}} >
                                COMMANDER
                            </Text>
                        </TouchableOpacity>
                    </View>
                )
            }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: width * .7,
        height: width,
        alignItems: "center",
        margin: 20,
        padding: 20,
        borderColor: "#ffffff50",
        shadowColor: "#ffffff50",
        shadowOffset: { 
            width: 0,
            height: 0
        },
        shadowRadius: 2,
        shadowOpacity: .7
    },
    bar: {
        width: width * .4,
        height: 2,
        marginVertical: 20,
        backgroundColor: "#fff"
    },
    price: {
        margin: 0,
        padding: 0,
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    button:{
        position: "absolute",
        bottom: 40,
        backgroundColor: "gray",
        padding: 10,
        marginVertical: 20,
        borderRadius: 5
    }
});

export default PropositionPack;

