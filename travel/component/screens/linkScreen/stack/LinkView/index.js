import React, {useContext} from "react";
import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "../../../../navigation/Icon";
import { Dimensions } from "react-native";
import { linkIcons } from "./linkIcons";
import Context from "../../../../../context";
import { backgroundImage_1,backgroundImage_2,backgroundImage_3 } from "../../../../items/images/images";

const WIDTH = Dimensions.get("screen").width;
const LINK_SIZE = WIDTH / 3.5;

console.log(LINK_SIZE);

const ContentService = ({navigation}) => {
    const  {state} = useContext(Context);
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage_2} resizeMode="cover" style={styles.background} >
                <View style={styles.linkContent}>
                    {
                        linkIcons.map((service, index) => {
                            
                            return (
                            <TouchableOpacity 
                                key={index} 
                                style={styles.link}
                                onPress = { () => navigation.navigate('List view',{title: service.text}) }
                            >
                                <Icon source={ service.icon } text={service.text[state.langage]} />
                            </TouchableOpacity>
                        )})
                    }
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        margin: 0,
        marginBottom: 70,
        padding: 0,
        justifyContent:"flex-end"
    },
    container:{
        flex: 1,
        justifyContent:"flex-end",
    },

    content:{
        justifyContent:'flex-start',
        height: (LINK_SIZE * 3.5)
    },

    linkContent:{
        flexDirection:"row",
        flexWrap: "wrap",
        width: WIDTH,  
        justifyContent: "center",
        alignItems: "center" 
        
    },

    link:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
        width: LINK_SIZE,
        height: LINK_SIZE,
        margin: 3,
        padding: 10,
        borderRadius: 10
    },

 
})

export default ContentService;
