import GetchCharacters from "@/services/getCharacters"
import {useLocalSearchParams, useRouter} from "expo-router";
import { useEffect, useState} from "react";
import {Text, View, FlatList, Image, StyleSheet, Button} from "react-native";

export default function(){
    const {id} = useLocalSearchParams();
    let characters = GetchCharacters(id);
    console.log(characters);

    return(
        <View>
            <Text>
                
            </Text>
        </View>
    )
}