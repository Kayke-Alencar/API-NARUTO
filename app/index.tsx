import {Text, Button, View} from "react-native";
import { useEffect, useState } from "react";
import {useRouter} from "expo-router";

export default function HomeScreen(){
    const router = useRouter();
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("componente montado");
    })

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}} >
            <Text>Bem vindo ao fim do mundo</Text>
            <Text>contador:{count}</Text>
            <Button title="Aumentar" onPress={()=>{setCount(count+1)}}/>
            <Button title="Ir para home" onPress={()=>{router.push("/home")}}/>
        </View>
    )
}