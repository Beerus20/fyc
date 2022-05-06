import React, { useRef } from "react";
import { View, Animated, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");

const Carousel = ({data, scrollX, width, height, position,radius}) => {
    
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }} >
            <View
                style={{
                    width: width - 2,
                    zIndex: 1
                }}
            >
                <Animated.FlatList
                    data={data}
                    onScroll={Animated.event(
                        [{ nativeEvent: {
                            contentOffset: {
                            x: scrollX
                            }
                        }}],
                        { useNativeDriver: false }
                    )}
                    keyExtractor = { (_, index) => index.toString() }
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator = {false}
                    style={{ borderRadius:radius }}
                    renderItem={ ({item}) => {
                        return (
                            <TouchableOpacity
                                style={{ borderRadius:radius }}
                            >
                                <Image 
                                    source={item}
                                    style={{
                                        width,
                                        height,
                                        resizeMode: "cover",
                                    }}
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>


            <View 
                style={{
                    position: "absolute",
                    bottom: position,
                    flexDirection:'row',
                    height: 5,
                }}
            >
                <Animated.FlatList
                    data={data}
                    keyExtractor = { (_, index) => index.toString() }
                    horizontal
                    pagingEnabled
                    renderItem={ ({item,index}) => {
                        const inputRange = [
                            (index - 1) * width,
                            index * width,
                            (index + 1) * width
                        ];

                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.5, 1, 0.5],
                        });

                        const barW = scrollX.interpolate({
                            inputRange,
                            outputRange: [20, 30, 20],
                        });

                        const backgroundColor = scrollX.interpolate({
                            inputRange,
                            outputRange: ["white", "red", "white"],
                        });

                        return(
                            <Animated.View
                                key={index.toString()}
                                style={{
                                    width : barW,
                                    backgroundColor,
                                    opacity,
                                    height: 4,
                                    marginHorizontal: 5,
                                }}
                            />
                        )
                    }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    images: {
        width, 
        height: (height * .5), 
        justifyContent:'center', 
        alignItems:'center',
    },
})

export default Carousel;
