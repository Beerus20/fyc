import React from "react";
import { View, SafeAreaView, TouchableOpacity, Text, TextInput } from "react-native";

const Input = ({placeholder}) => {

    return (
        <SafeAreaView style={{ margin: 5 }} >
            <TextInput
                placeholder={placeholder} 
                style={{
                    height: 30,
                    width: "100%",
                    borderWidth: 1,
                    borderColor: "#000",
                    padding: 2
                }} 
            />
        </SafeAreaView>
    )
}

const Formulaire = () => {
    return (
        <View>
            <Text style={{ 
                fontSize: 20,
                textAlign: "center",
                fontWeight: "bold",
                margin: 20
            }} > 
                Une question, une disponibilité? 
            </Text>
            <Input placeholder="Nom" />
            <Input placeholder="Telephone" />
            <Input placeholder="Email" />
            <Input placeholder="Date de départ" />
            <Input placeholder="Date de retour" />
            <Input placeholder="Nombre d'adultes" />
            <Input placeholder="Nombre d'enfant -12 ans" />
            <TextInput 
                multiline={true}
                numberOfLines={4}
                placeholder="Votre message" 
                style={{
                    borderWidth: 1,
                    borderColor: "#000",
                    padding: 2,
                    margin: 5
                }} 
            />
            <TouchableOpacity 
                style={{
                    backgroundColor: "gray",
                    borderRadius: 5,
                    padding: 20,
                    marginVertical: 20,
                    marginHorizontal: 5
                }}
            >
                <Text
                    style={{
                        fontSize: 15,
                        color: "white",
                        textAlign: "center",
                    }}
                >
                    Envoyer votre message
                </Text>
            </TouchableOpacity>
        </View>
    )
}


export default Formulaire;
