import axios from "axios";
import { useState } from "react";

export const useFetch = ()=>{
const [Envio, setEnvio]=useState()

const ruta ='https://send-yxvp.onrender.com/api/v1/contact'

 const getEnviar =async(data)=>{
    console.log(data)
    await axios.post(ruta,data)
    .then(resp => setEnvio(resp.data))
    .catch(error => console.log(error))


 }

return [Envio, getEnviar]
    
}