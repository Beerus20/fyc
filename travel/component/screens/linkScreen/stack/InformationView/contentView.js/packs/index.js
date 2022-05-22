import PackSilver from "./packSilver";
import PackGold from "./packGold";
import PackPlatinium from "./packPlatinium";

export { PackGold, PackPlatinium, PackSilver };

import React, {useContext} from "react";
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity } from "react-native";
import { introText } from "./introText";
import { styles } from "../styles";
import { goldImage, silverImage, platiniumImage } from "../../../../../../items/images/images";
import Context from "../../../../../../../context";

const { width, height } = Dimensions.get("screen");
const listOfPercentage = [
    {name:{ "fr": "Location", "an" : "Rent" }, percentage:"97%"},
    {name:{ "fr": "Mariage", "an" : "Wedding" }, percentage:"88%"},
    {name:{ "fr": "Séminaire", "an" : "Seminary" }, percentage:"92%"},
    {name:{ "fr": "Evenementiel", "an" : "Event" }, percentage:"75%"}
]

const PackService = ({source}) => {
    return (    
        <TouchableOpacity 
            onPren
            style = {{ 
                backgroundColor: "#fff",
                margin: 5,
                borderRadius: 100,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0
                },
                shadowRadius: 10,
                shadowOpacity: .5 
            }} 
        >
            <Image
                source={source}
                style = {{
                    width: width * .25,
                    height: width * .25,
                    resizeMode: "cover",
                    borderRadius: 40,
                    margin: 5,                    
                }}
            />
        </TouchableOpacity>
    )
}

const PercentageLevel = ({name, percentage}) => {

    return (
        <View
            style={{
                backgroundColor: "#bbb",
                borderRadius: 70,
                marginVertical: 10
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: percentage,
                    backgroundColor: "#fc8947",
                    borderRadius: 70,
                    paddingHorizontal: 10,
                }}
            >
                <Text style={{color:"white"}} >{name}</Text>
                <Text style={{color:"white"}} >{percentage}</Text>
            </View>
        </View>
    )
}

const Packs = () => {
    const {state} = useContext(Context);
    const text = introText[state.langage];

    return (
        <ScrollView style = {{ width,height, padding: 10 }}>
            <Text style = { styles.title } >
                { text["intro"] }
            </Text>
            <Text>
                { text["text intro"] }
            </Text>
            
            <Text style = { styles.title } >
                { text["proposition"] }
            </Text>
            
            <Text>
                { text["proposition text"] }
            </Text>
            <View style = {{ flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                <PackService source={silverImage} />
                <PackService source={goldImage} />
                <PackService source={platiniumImage} />
            </View>
            
            <Text style = { styles.title } >
                { text["titre 1"] }
            </Text>

            <Text>
                { text["text 1"] }
            </Text>
            <View style={{ backgroundColor: "#f0f2f1",marginVertical: 10, padding: 10, shadowColor: "#000", shadowOffset: {width:0,height:0}, shadowRadius: 2, shadowOpacity: .8, borderRadius: 10 }} >
                {listOfPercentage.map((value,index) => <PercentageLevel key={index.toString()} name={value.name[state.langage]} percentage={value.percentage} />)}
            </View>
            <Text style = { styles.title } >
                { text["titre 2"] }
            </Text>

            <Text>
                { text["text 2"] }
            </Text>
            
        </ScrollView>
    )
}


export default Packs;

