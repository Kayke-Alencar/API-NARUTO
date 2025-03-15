import {useRouter} from "expo-router";
import {Text, Button, View} from "react-native";

export default function home(){
    const router = useRouter();

    return(
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>Pagina Home</Text>
            <Button title="Ver detalhes" onPress={()=>{router.push("/details")}}/>
        </View>
    )
}