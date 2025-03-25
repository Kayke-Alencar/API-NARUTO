import { useState } from "react";

const API_HOST = "https://dattebayo-api.onrender.com/characters";

export default async function pinto(id:any){
    try{
        const response = await fetch(`${API_HOST}/${id}`);

        if(!response.ok){
            throw new Error(`${response.status} - ${response.statusText} `);
        }
        return await response.json();
    }
    catch{
        console.log("erro");
    }


}