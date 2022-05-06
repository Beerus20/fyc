import React, {useContext} from "react";
import { View, FlatList, Text, Image, Dimensions } from "react-native";
import Context from "../../context";

const { width, height } = Dimensions.get("screen");

const Selection = ({data}) => {
    const {state} = useContext(Context);
    return (
        <View>
            <FlatList
                data = { data }
                pagingEnabled
                horizontal
                keyExtractor = { (_,index) => index.toString() }
                showsHorizontalScrollIndicator = { false }
                renderItem = { ({item}) => {
                    return (
                        <View
                            style={{
                                width: width * .4,
                                height: width * .6,
                                borderRadius: 8,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 0
                                },
                                shadowRadius: 10,
                                shadowOpacity: .5,
                                margin: 10
                            }}
                        >
                            <Image
                                source = { item.image }
                                style = {{ 
                                    width: "100%",
                                    height: width * .4,
                                    resizeMode: "cover",
                                    borderTopLeftRadius: 8,
                                    borderTopRightRadius:8 
                            }}
                            />
                            <View 
                                style={{
                                    margin: 5
                                }}
                            >
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                    }}
                                >
                                    { item.nom[state.langage] }
                                </Text>
                                <Text>
                                    { item.description[state.langage] }
                                </Text>
                            </View>
                        </View>
                    )
                } } 
            />
        </View>
    )
}


export default Selection;
