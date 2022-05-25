import React, { useState, useContext } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image } from 'react-native';
import Context from '../../../context';
import { Fr, An } from '../../items/images/flagImages';

const langage = [
    {
        id: 0,
        flag: Fr,
        langage: "fr",
        text: "Français"
    }, 
    {
        id: 1,
        flag: An,
        langage: "an",
        text: "Anlgais"
    }, 
];

const { width, height } = Dimensions.get("window");
const flagSize = 40;
    
const Flag = () => {
    const {state, changeLangage, changeMode} = useContext(Context); 
    const [selectedLanguage, setSelectedLanguage] = useState(langage[0]);
    const [modalVisible, setModalVisible] = useState(false);

    const changeLangageSelected = (langageSelected) => {
        setSelectedLanguage(langageSelected);
        setModalVisible(!modalVisible);
        changeLangage(langageSelected.langage);
    }

    return (
    <View style={styles.container} >
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        >
            <View style={styles.view}>
                {
                    langage.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.selection} onPress={() => changeLangageSelected(item)}>
                            <Image style={styles.imageSelection} source={item.flag}/>
                            <Text style={styles.textSelection}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
            <Image style={styles.selectedFlag} source={selectedLanguage.flag} />
        </TouchableOpacity>
    </View>
    );
};
    
const styles = StyleSheet.create({
    container:{
        flex: 1,
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    view:{
        position: "relative",
        top: "10%",
        backgroundColor: "#FFFFFF",
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 10
    },
    button:{
        position: "absolute",
        top: 20,
        right: 10,
        width: flagSize,
        height: flagSize,
        borderRadius: 40,
        zIndex: 2,
    },
    selectedFlag: {
        width: flagSize,
        height: flagSize,
        borderRadius: 40,
        resizeMode: "cover",
    },
    selection:{
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 0.8},
        shadowRadius: 3,
        shadowOpacity: .58,
        elevation: 1
    },
    imageSelection:{
        width: flagSize,
        height: flagSize,
        resizeMode: "contain",
        marginHorizontal: 10,
        borderRadius: 15,
    },
    textSelection:{
        fontWeight: "bold",
        marginHorizontal: 20
    },
});
    

export default Flag;
