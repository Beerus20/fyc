import React, { useState, useEffect, useRef } from "react";
import { View, Text, Animated, TouchableOpacity, Image, Dimensions, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CarouselItem from "./CarouselItem";


const { width, height } = Dimensions.get("screen");

let myFlatlist;

const infiniteScroll = (dataList) => {
    const numberOfData = dataList.length;
    let scrollValue = 0, scrolled = 0;

    setInterval(() => {
        scrolled++;
        if(scrolled < numberOfData){
            scrollValue += width;
        }else{
            scrolled = 0;
            scrollValue = 0;
        }
        myFlatlist.scrollToOffset({animated: true, offset: scrollValue});
    }, 3000);
}



const Carousel = ({data}) => {
    const flatList = useRef()
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);
    

    useEffect(() => {
        setDataList(data);
        infiniteScroll(dataList);
    })

    return (
        <View>
            <FlatList
                data = {data}
                ref = {(flatList) => myFlatlist = flatList}
                keyExtractor = {(item, index) => 'key'+index}
                horizontal
                pagingEnabled
                snapToAlignment="center" 
                scrollEventThrottle={16}
                decelerationRate = { "fast" }
                showsHorizontalScrollIndicator = {false}
                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                renderItem = {(item) => {

                    return (
                        <CarouselItem item = {item}/>
                    )
                }}
            />
            <View style = {styles.dotView}>
                {data.map(( item, i) => {
                    let opacity = position.interpolate({
                        inputRange: [i - 1, i, i + 1],
                        outputRange: [0.3, 1, 0.3],
                        extrapolate: "clamp"
                    });
                    return(
                        <Animated.View
                            key = {i}
                            style = {{opacity, height: 10, width: 10, backgroundColor: "#595959", margin: 8, borderRadius: 5}}
                        />
                    )

                })}
            </View>
        </View>
    );


}


const styles = StyleSheet.create({
    dotView: {
        flexDirection: "row",
        justifyContent: "center"
    }
})

export default Carousel; 
