import FetchCharacters from "@/services/api"
import {useRouter} from "expo-router";
import { useEffect, useState} from "react";
import {Text, View, FlatList, Image, StyleSheet, Button} from "react-native";

interface personagem {
    id:[number];
    name:[string];
    images:[string];
}

export default function(){
    const router = useRouter();

    

    const [carregar, setCarregar] = useState(true);
    const [personagem, setPersonagem] = useState<personagem>([]); 
    //<personagem> é a forma de tipar em typescript, O trecho <personagem>([]) significa que estamos definido o useState como um array que contem objetos do tipo personagem  

    

    useEffect(()=>{
        async function loadPersonagem(){
            const dados = await FetchCharacters();
            setPersonagem(dados.characters)
        }loadPersonagem();
    }, [] )

    console.log(personagem)

    return(
        <View style={style.container}>
            <Text>Pg detalhes</Text>
            <FlatList  /*FlatList: é uma forma de rederizar arrays*/
                data={personagem}
                keyExtractor={item => {item.id.toString()} } /*keyExtractor define um numero unico pra cada item da lista, neste caso o propio id de cada personagem*/
                renderItem={({item})=>(
                    <View style={style.card}> 
                        <Image style={style.image} source={{uri:item.images[0]}}></Image>
                        <Text style={style.name}>{item.name}</Text>
                        <Button title="detalhes" onPress={()=>{router.push({pathname:"/detalhes", params:{id:item.id} })}}/>
                        {/*pathname é a pg a ser acessada, params são os parametros que serao enviados a outra pagina */}

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