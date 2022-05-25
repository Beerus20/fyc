import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import InformationView from "./stack/InformationView";
import ContentService from "./stack/LinkView";
import ListService from "./stack/ListView";
import Formulaire from "./stack/Formulaire";

const stack = createStackNavigator();

const LinkScreen = ({navigation}) => {

    const [likeIconClicked, setLikeIconClicked] = useState(false);

    return (
        <stack.Navigator>
            <stack.Screen name="Link view" component={ContentService} 
                 options = {{
                    headerTitle: "",
                    headerTintColor: "#fff",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
            <stack.Screen name="List view" component={ListService} 
                 options = {{
                    headerTitle: "",
                    headerTintColor: "#fff",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
            <stack.Screen name="Information view" component={InformationView} 
                options = {{
                    headerTitle: "",
                    headerTintColor: "#fff",
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent',
                    },
                }}
            />
            <stack.Screen name="Formulaire" component={Formulaire}/>
        </stack.Navigator>
    )
}


export default LinkScreen;