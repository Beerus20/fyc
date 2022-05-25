import React, { useContext } from "react";
import { 
    View, 
    Text, 
    Image, 
    TouchableOpacity,
    FlatList,
    Animated ,
    SafeAreaView,
    TextInput,
    Dimensions,
    StyleSheet
} from "react-native";
import { listOfServices } from "../../../../data/ListOfEachService";
import Context from "../../../../../context";
import VillaList from "./villaList";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const imageWidth = width * .30;

const ListService = ({route,navigation}) => {
    const {state} = useContext(Context);
    const dataName = route.params.title["fr"];

    return (
        <View style = {{ position: "relative", top: 20, height: height - 90 }} >
        <FlatList
            data = {listOfServices[dataName]}
            keyExtractor = {(_,index) => index.toString()} 
            showsVerticalScrollIndicator = { false }
            renderItem = { ({item}) => {
                return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate("Information view",{ title: dataName, selectedService: item["nom"], type: item.description })}
                            style={styles.content} 
                        >
                            <Image
                                source = {item.image}
                                style = {styles.image}
                            />
                            <View style = {styles.textContainer} >
                                <Text style = {styles.title}> 
                                    { item.nom[state.langage] } 
                                </Text>
                                <Text style = {styles.text}> 
                                    { item.description[state.langage] } 
                                </Text>
                            </View>
                        </TouchableOpacity>
                )
            } }
        />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            height: 0.8,
            width: 0.8
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 1
    },
    textContainer: {
        flexGrow: 1,
        marginHorizontal: 10
    },
    image:{
        height: imageWidth,
        width: imageWidth,
        resizeMode: "cover",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    image_1:{
        height: width * .1,
        width: width * .1,
        margin: 10,
        resizeMode: "cover",
    },
    title:{
        fontWeight: "bold",
        fontSize: width * .04,
        marginTop: width * .005,
    },
    text:{
         width: "55%"
    }
});

export default ListService;
