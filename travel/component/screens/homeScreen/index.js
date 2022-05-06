import React, { useContext, useState, useRef } from "react";
import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, FlatList, Animated, TouchableOpacity } from "react-native";
import Context from "../../../context";
import { 
    image1, 
    image2, 
    image3, 
    image4, 
    image5,
    homeBackgroundImage 
} from "../../items/images/images";
import Carousel from "../../items/Carousel";
import { logo } from "../../items/images/images";
import Flag from "./flag";

const { width, height } = Dimensions.get('screen');
const widthImage = width * .9;
const heightImage = width * .7;

const data = [
    image1,
    image2,
    image3,
    image4,
    image5
];


const HomeScreen = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [show, setShow] = useState(false);
    const scrollX = useRef(new Animated.Value(0)).current;
    const showList = () => {
        setShow(!show);
    }

    return (
            <ImageBackground source={homeBackgroundImage} resizeMode="cover" style={{ flex:1 }} >
            <View>
                <Image
                    source={logo}
                    style={{
                        width: 100,
                        height:100,
                        resizeMode: "cover",
                        marginVertical: 50 
                    }}
                />
            </View>
            <Flag handleClick={showList} />

            <View style={{opacity: (show? 0:1) }}>
                <Carousel 
                    data={data} 
                    scrollX={scrollX} 
                    width={widthImage} 
                    height={heightImage} 
                    position={-10} 
                    radius={10}
                />          
            </View>
 

            </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
    },
    backImage:{
        height: Dimensions.get("screen").height,
        resizeMode: "cover"
    }
    
})

export default HomeScreen;