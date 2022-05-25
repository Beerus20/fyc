import React from 'react';
import {View,Text,Image,StyleSheet, Dimensions} from 'react-native';

const { width, height } = Dimensions.get("screen");
const iconSize = width * .07;
const fontSize = width * .03;


const Icon = ({source,focused,text}) => {
    return (
        <View
            style={{
                justifyContent:"center",
                alignItems:"center"
            }}
        >
            <Image
                source={source}
                resizeMode= "contain"
                style={
                    focused !== undefined? 
                    ({
                        width: iconSize,
                        height: iconSize,
                        marginBottom: 10,
                        tintColor: focused? '#fff':'#748c94'
                    }):
                    text ?
                    ({
                        width: iconSize,
                        height: iconSize,
                        marginBottom:5,
                        tintColor: '#fff'
                    })
                    :
                    ({
                        width: iconSize,
                        height: iconSize,
                        tintColor: '#fff'
                    })
                }
            />
            {
                text || focused?
                <Text
                    style={focused !== undefined? 
                        ({
                            width: "100%",
                            height:2,
                            backgroundColor : focused? '#e32f45': '#fff'
                        }):
                        ({
                            textAlign: "center",
                            color : "white",
                            fontSize: fontSize,
                        })    
                    }
                >
                    {text}
                </Text>
                :
                <></>
                
            }
        </View>
    )
}

export default Icon;