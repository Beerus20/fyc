import React, { useRef, useState, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Animated, StyleSheet, Dimensions } from 'react-native';
import { 
    An,
    Fr,
    Mc,
    Ca 
} from '../../items/images/images';
import Context from '../../../context';

const langage = [
    {
        flag: Fr,
        langage: "fr",
        text: "Français"
    }, 
    {
        flag: An,
        langage: "an",
        text: "Anlgais"
    }, 
    ];

const Flag = ({handleClick}) => {
    const {state, changeLangage, changeMode} = useContext(Context); 
    const show = useRef(new Animated.Value(0)).current;
    const height = useRef(new Animated.Value(0)).current;
    const [active, setActive] = useState(true);
    const [selected, setSelected] = useState(langage[0]);

    const showIn = () => {
        Animated.timing(show, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const showOut = () => {
        Animated.timing(show, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start();
    }

    const heightIn = () => {
        Animated.timing(height, {
            toValue: Dimensions.get("screen").height * .7,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const heightOut = () => {
        Animated.timing(height, {
            toValue: 0,
            duration: 500,
            useNativeDriver: false
        }).start();
    }

    const Action = () => {
        handleClick();
        setActive(!active);
        return (active ? 
            (
                showIn(),
                heightIn()
            )
            : 
            (
                showOut(),
                heightOut()
            )
        );
    }

    return (
        <View
            style={{
                position: "absolute",
                top: 45,
                left: 15,
                width: Dimensions.get("screen").width
            }}
        >
            <TouchableOpacity
                onPress={Action}
                style={{
                    position: "absolute",
                    top: 15,
                    right: 40,
                    width: 50,
                    height: 50,
                    zIndex: 11
                }}
            >
                <Image
                    source={selected.flag}
                    style={{
                        width: 50,
                        height: 50,
                        resizeMode: "cover",
                        borderRadius: 40
                    }}     
                />
                
            </TouchableOpacity>
            <Animated.View
                style={[
                    styles.containerList,
                    {
                        height,
                        opacity: show,
                    }
                ]}
            >
                <FlatList
                    data={langage}
                    keyExtractor={(_, index) => index.toString()}
                    style={{ height: "100%" }}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                            onPress={() => {
                                setSelected(item);
                                Action();
                                changeLangage(item.langage);
                            }}
                            style={styles.lang} 
                        >
                            <Image
                                source={item.flag}
                                style={{
                                    width: 70,
                                    height: 50,
                                    resizeMode: "cover",
                                    marginHorizontal: 5
                                }}
                            />
                            <Text style={{ marginHorizontal: 10 }} >
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                    )}
                />                
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerList: {
        position: "absolute",
        top: 40,
        left: 0,
        width: Dimensions.get("screen").width - 30,
        backgroundColor: "#fff7",
        borderRadius: 10,
        zIndex: 10
    },
    lang:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        margin: 10,
        borderRadius: 5
    }
})

export default Flag;
