import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MentionScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Mention Page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default MentionScreen;