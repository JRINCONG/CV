import React, { useEffect, useState } from 'react'
import '../styles/Contacto.css'
import { useForm } from 'react-hook-form'
import { useFetch } from '../hook/useFetch'






export const Contact = () => {
 const {  register, handleSubmit, reset } = useForm()

 const [Estado, setEstado] = useState(false)
const [ Envio, getEnviar] = useFetch() 

 useEffect(()=>{
  if(Envio){
    setEstado(true)
    setTimeout(() => {
      setEstado()
    }, "9000");
  }
 
 },[Envio])

 
 
 const Submit = async(data)=>{
 
 await getEnviar(data)
    reset({
   Nombre:"",
   Apellido:"",
   Empresa:"",
   Telefono:"",
   Email:"",
   Mensage:""
    })

 
 }
 


  return (
    <>
    
    <div className='Container_contacto' id='contacto'>


    <div className='info_contacto'>
    <h1>// Contacto</h1>
      <p className='info_info'><box-icon type='solid' name='square'></box-icon>JAIRO RINCÓN GUTIÉRREZ</p>
      <p className='info_info'><box-icon type='solid' name='square'></box-icon>Cel: +57- 3126346336</p>
      <p className='info_info'><box-icon type='solid' name='square'></box-icon>rincon303@hotmail.com</p>
      <p className='info_info'><box-icon type='solid' name='square'></box-icon>Colombia-Cartagena</p><br/>
      
    </div>
    <div className='Container_form'>      
      <form className='contact' onSubmit={handleSubmit(Submit)}>
        <div className='info_input'>
        <label htmlFor="Nombre">Nombre:</label>
        <input {...register('Nombre')} type='text' placeholder='Nombre' name='Nombre' required/>
        </div>
        <div className='info_input'>
        <label htmlFor="Apellidos">Apellidos:</label>
        <input {...register('Apellido')}type='text' placeholder='Apellidos' name='Apellido'required/>
        </div>
        <div className='info_input'>
        <label htmlFor="empresa">Empresa:</label>
        <input  {...register('Empresa')} type='text' placeholder='Nombre de la empresa'name='Empresa' required/>
        </div>
        <div className='info_input'>
        <label htmlFor="empresa">Telefono:</label>
        <input  {...register('Telefono')} type='Numero' placeholder='Telefono'name='Telefono'/>
        </div>
        <div className='info_input'>
        <label htmlFor="texto">Email: </label>
        <input  {...register('Email')} type='email' placeholder='Email' name='Email' required/>
        </div>
        <div className='info_input'>
        <label htmlFor="mensage">Nota:</label>
        <textarea  {...register('Mensage')} className ="text_tarea" name="Mensage" id=""></textarea>
        </div>
       <button className="boton" type='submi'>Enviar</button>
       {
        (Estado)&& <h2 className='msg'>Gracias por Contactarme..!!</h2>
       
       }
        
      </form>
      <hr/>
    </div>
    </div> 
  </>
  )
}


