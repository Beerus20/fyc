import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { star, pin } from "../../../../items/imageIcons";
import DisponibilityFlag from "../../../../items/DisponibilityFlag";

const Title = ({title,localisation,description}) => {
    return (
        <View style={{ flexDirection: "row", margin: 5 }} >
            <DisponibilityFlag/>
            <View>
                <Text style={{ fontWeight: "bold", fontSize: 15 }} >
                    {title}
                </Text>
                
                <View
                    style={{
                        flexDirection: "row",
                        height: 30,
                        alignItems: 'center'
                    }}
                >
                    <Image source={ pin } style={ styles.pin} />
                    <Text style={{ lineHeight: 15 }}>
                        {localisation}
                    </Text>
                </View>
                
                <Text>
                    {description}
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    pin: {
        width: 15,
        height: 15,
        resizeMode:"cover",
        marginHorizontal: 6
    }
})


export default Title;
