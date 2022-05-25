import React, {useContext} from "react";
import { View, FlatList, Text, Image, Dimensions, StyleSheet } from "react-native";
import Context from "../../context";

const { width, height } = Dimensions.get("screen");

const Selection = ({data}) => {
    const {state} = useContext(Context);
    return (
        <View style={styles.generalContainer}>
            <FlatList
                data = { data }
                horizontal
                keyExtractor = { (_,index) => index.toString() }
                showsHorizontalScrollIndicator = { false }
                renderItem = { ({item}) => {
                    return (
                        <View style={styles.container}>
                            <Image
                                source = { item.image }
                                style = {styles.image}
                            />
                            <View style={{ margin: 5 }}>
                                <Text style={{ color: "white",fontWeight: "bold"}}>
                                    { item.nom[state.langage] }
                                </Text>
                                <Text style={{color:"white"}}>
                                    { item.description[state.langage] }
                                </Text>
                            </View>
                        </View>
                    )
                } } 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    generalContainer:{
        marginHorizontal: 10
    },
    container: {
        width: width * .4,
        height: width * .6,
        backgroundColor: "#fff2",
        margin: 10,
        borderRadius: 8,
        shadowColor: "#fff",
        shadowOffset: {
            height: 0.8,
            width: 0.8
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 1
    },
    image:{ 
        width: "100%",
        height: width * .4,
        resizeMode: "cover",
        borderTopLeftRadius: 8,
        borderTopRightRadius:8 
}
})

export default Selection;
