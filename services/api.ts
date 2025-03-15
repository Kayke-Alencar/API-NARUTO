const API_HOST = "https://dattebayo-api.onrender.com";

export default async function FetchCharacters(){
    try{
        const response = await fetch(`${API_HOST}/characters`);
        //await indica uma func asincrona.
        //fetch(), func para fazer requisicoes http

        if(!response.ok){
            throw new Error(`${response.status} - ${response.statusText} `);
        }
        return await response.json();
    }
    catch{
        console.log("erro");
    }
}