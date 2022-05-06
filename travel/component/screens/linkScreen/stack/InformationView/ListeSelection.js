import React from "react";
import { SafeAreaView, FlatList, Image, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
import { imageList } from "../../../../items/images/imageList";


const width = Dimensions.get("screen").width;

const ListeSelection = ({data}) => {
    return (
        <SafeAreaView style={{ width }} >
            <FlatList
                data={imageList[data]}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item,index}) => (
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 10
                        }}
                    >
                        <Image source={item.url} style={styles.images} />
                        <Text>
                            {item.title}
                        </Text>
                    </TouchableOpacity>
                )}
            /> 
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    images:{
        width: 150,
        height: 200,
        resizeMode: "cover",
        borderRadius: 10,
    }
})

export default ListeSelection;
