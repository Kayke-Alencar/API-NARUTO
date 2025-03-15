import FetchCharacters from "@/services/api"
import {useRouter} from "expo-router";
import { useEffect, useState } from "react";
import {Text, View, FlatList, Image, StyleSheet} from "react-native";

interface personagem {
    id:number;
    name:string;
    images:[string];
}

export default function(){
    const router = useRouter();
    const [personagem, setPersonagem] = useState<personagem>([]);
    const [carregar, setCarregar] = useState(true);

    useEffect(()=>{
        async function loadPersonagem(){
            const dados = await FetchCharacters();
            setPersonagem(dados.characters)
        }loadPersonagem();
    }, [] )

    return(
        <View style={style.container}>
            <Text>Pg detalhes</Text>
            <FlatList
                data={personagem}
                keyExtractor={item => {item.id.toString()} }
                renderItem={({item})=>(
                    <View style={style.card}> 
                        <Image style={style.image} source={{uri:item.images[0]}}></Image>
                        <Text style={style.name}>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"#FFF",
        padding:15,
    },

    card:{
        backgroundColor:"#F4F4F4",
        padding:10,
        marginVertical:8,
        borderRadius:10,
        alignItems:"center",
    },
    image:{
        width:100,
        height:100,
        borderRadius:50,
        marginBottom:5
    },

    name:{
        fontSize:18,
        fontWeight:"bold",
    }
})