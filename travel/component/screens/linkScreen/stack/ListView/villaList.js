import React, {useContext, useRef} from "react";
import {View, TouchableOpacity, Animated, FlatList, Image, Text, Dimensions, StyleSheet} from "react-native";
import Position from "react-native/Libraries/Components/Touchable/Position";
import Context from "../../../../../context";

const {width, height} = Dimensions.get("screen");

const VillaList = (props) => {
    const {state} = useContext(Context);
    const scrollY = useRef(new Animated.Value(0)).current;
    const contentHeight = (width * .7) + 40;

    return (
        <View>
            <View style = {{  width: width, height: height - 50}}>
                <Animated.FlatList
                    data = {props.data}
                    onScroll = {Animated.event(
                        [{ nativeEvent : {contentOffset: { y: scrollY }}}],
                        { useNativeDriver : false }
                    )}
                    pagingEnabled
                    keyExtractor = {(_,index) => index.toString()} 
                    showsVerticalScrollIndicator = { false }
                    style = {{ 
                        marginBottom: 100,
                    }}
                    renderItem = { ({item,index}) => {
                        return (
                                <Animated.View
                                    //onPress={() => props.navigation.navigate("Information view")}
                                    style = {{
                                        width: width * .8,
                                        height: contentHeight - 40,
                                        backgroundColor: "#000",
                                        marginHorizontal: "auto",
                                        marginVertical: 20,
                                        shadowColor: "black",
                                        shadowOffset: {
                                            width: 0,
                                            height: 0
                                        },
                                        shadowRadius: 10,
                                        shadowOpacity: .8,
                                        borderRadius: 10
                                    }}
                                >
                                    <Image
                                        source = {item.image}
                                        style = {{
                                            width: "100%",
                                            height: "70%",
                                            resizeMode: "cover",
                                            borderTopLeftRadius: 10,
                                            borderTopRightRadius: 10
                                        }}
                                    />
                                    <View style = {{ marginHorizontal: 10, marginTop: 10 }} >
                                        <Text style = {{ fontWeight: "bold",color: "white" }} > 
                                            { item.nom[state.langage] } 
                                        </Text>
                                        <Text style = {{color: "white"}} > 
                                            { item.description[state.langage] } 
                                        </Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Information view")}
                                        style = {{ 
                                            position: "absolute",
                                            bottom: 0,
                                            right: 0,
                                            backgroundColor: "blue",
                                            borderRadius: 7,
                                            paddingHorizontal: 20,
                                            paddingVertical: 10,
                                            margin: 10
                                            }}
                                    >
                                        <Text style = {{ color: "#fff" }} >
                                            voir
                                        </Text>
                                    </TouchableOpacity>
                                </Animated.View>
                        )
                    } }
                />
            </View>
        </View>
    )
}


export default VillaList;
