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
import { listOfServices } from "./ListOfEachService";
import Context from "../../../../../context";
import VillaList from "./villaList";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;
const imageWidth = width * .30;

const ListService = ({route,navigation}) => {
    const {state} = useContext(Context);
    const dataName = route.params.title["fr"];
    let style = {content: styles.content, image: styles.image, title: styles.title, text: styles.text };

    switch(dataName){
        case "Type de séjour":      style = {...style, image: styles.image_1 };break;
        default: break;
    }

    if(dataName === "Nos villa"){
        return <VillaList data={listOfServices[dataName]} navigation={navigation} />
    }else
        return (
            <View style = {{ height: height - 150 }} >
            <FlatList
                data = {listOfServices[dataName]}
                keyExtractor = {(_,index) => index.toString()} 
                showsVerticalScrollIndicator = { false }
                renderItem = { ({item}) => {
                    return (
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("Information view",{ title: dataName, selectedService: item["nom"], type: item.description })}
                                style={style.content} 
                            >
                                <Image
                                    source = {item.image}
                                    style = {style.image}
                                />
                                <View style = {styles.textContainer} >
                                    <Text style = {style.title}> 
                                        { item.nom[state.langage] } 
                                    </Text>
                                    <Text style = {style.text}> 
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
            height: 0,
            width: 0
        },
        shadowRadius: 5,
        shadowOpacity: .7
    },
    textContainer: {
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
        width:  width * .7
    }
});

export default ListService;
