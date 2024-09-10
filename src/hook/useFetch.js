import axios from "axios";
import { useState } from "react";

export const useFetch = ()=>{
const [Envio, setEnvio]=useState()

const ruta ='https://send-yxvp.onrender.com/api/v1/contact'

 const getEnviar = (data)=>{
    console.log(data)
    axios.post(ruta,data)
    .then(resp => setEnvio(resp.data))
    .catch(error => console.log(error))


 }
console.log(Envio)
return [Envio, getEnviar]
    
}