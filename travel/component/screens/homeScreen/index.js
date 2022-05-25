import React, { useContext, useState, useRef } from "react";
import { ScrollView,View, Text, ImageBackground, StyleSheet, Dimensions, Image } from "react-native";
import Context from "../../../context";
import { homeBackgroundImage1 } from "../../items/images/images";
import Carousel from "../../items/Carousel";
import Flag from "./flag";
import { imageList } from "../../data/imageList";
import { listOfServices } from "../../data/ListOfEachService";
import { logo } from "../../items/images/images";
import { homePageText } from "./homePageText";

const villaListImage = imageList["Nos villa"].map(villa => villa.url);
const activityListImage = listOfServices["Nos activités"].map(service => service.image);

const {width, height} = Dimensions.get("window");


const HomeScreen = ({navigation}) => {
    const {state} = useContext(Context);
    const [show, setShow] = useState(false);
    const text = homePageText[state.langage];

    const showList = () => {
        setShow(!show);
    }

    const [selectedLanguage, setSelectedLanguage] = useState('C');
    const [language] = useState([
        "C",
        "c++",
        "other"
    ]);

    
    return (
        <ImageBackground source={homeBackgroundImage1} resizeMode="cover" style={{ flex:1 }} >
            <Flag handleClick={showList} />
            <ScrollView style={styles.container} >
                <View style={styles.header}>
                    <Text style={styles.title}>
                        {text["titre"]}
                    </Text>
                    <Image style={styles.logo} source={logo} />
                </View>
                <View>
                    <Text style={styles.text}>
                        {text["villa image"]}
                    </Text>
                    <Carousel data={villaListImage}/>          
                </View>
                <View>
                    <Text style={styles.text}>
                        {text["activity image"]}
                    </Text>
                    <Carousel data={activityListImage}/>          
                </View>
                <View>
                    <Text style={styles.text}>
                        {text["other"]}
                    </Text>
                    <Carousel data={villaListImage}/>          
                </View>
               
            </ScrollView>
 

            </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        top: 0,
        height: height - 80,
        marginVertical: "10%",
    },
    header:{
        justifyContent: "center",
        alignItems: "center",
    },  
    title:{
        color: "white",
        textAlign: "center",
        fontSize: 25,
        marginTop: 25,
        marginBottom: 10
    },  
    logo:{
        width: 50,
        height: 50,
        resizeMode: "cover",
        marginTop: 10,
        marginBottom: 25,
        borderRadius: 10
    },  
    text:{
        color:"white",
        fontWeight:"bold",
        fontSize: 15,
        margin: 10
    }
    
})

export default HomeScreen;