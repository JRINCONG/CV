import React, { useEffect, useState } from 'react'
import '../styles/Contacto.css'
import { useForm } from 'react-hook-form'
import { useFetch } from '../hook/usefetch'





export const Contact = () => {
 const {  register, handleSubmit, reset } = useForm()

 const [Estado, setEstado] = useState(false)

 const [Envio, getEnviar ]=useFetch()

 useEffect(()=>{
  if(Envio){
    setEstado(true)
    setTimeout(() => {
      setEstado()
    }, "9000");
  }
 
 },[Envio])

 
 
 const Submit = (data)=>{
 
  getEnviar(data)
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
    <h1><b>//</b> Contacto</h1>
    <div className='Container_contacto shadow-2xl'>


    <div className='info_contacto'>
      <h2>JAIRO RINCÓN GUTIÉRREZ</h2>
      <p>Cel: +57- 3126346336</p>
      <p>rincon303@hotmail.com</p>
      <p>Colombia-Cartagena</p><br/>
      
    </div>
    <div className='Container_form'>      
      <form className='contact shadow-2xl' onSubmit={handleSubmit(Submit)}>
        <div className='info_input'>
        <label htmlFor="Nombre">Nombre:</label>
        <input {...register('Nombre')} type='text' placeholder='Nombre' name='Nombre'/>
        </div>
        <div className='info_input'>
        <label htmlFor="Apellidos">Apellidos:</label>
        <input {...register('Apellido')}type='text' placeholder='Apellidos' name='Apellido'/>
        </div>
        <div className='info_input'>
        <label htmlFor="empresa">Empresa:</label>
        <input  {...register('Empresa')} type='text' placeholder='Nombre de la empresa'name='Empresa'/>
        </div>
        <div className='info_input'>
        <label htmlFor="empresa">Telefono:</label>
        <input  {...register('Telefono')} type='Numero' placeholder='Telefono'name='Telefono'/>
        </div>
        <div className='info_input'>
        <label htmlFor="texto">Email: </label>
        <input  {...register('Email')} type='email' placeholder='Email' name='Email'/>
        </div>
        <div className='info_input'>
        <label htmlFor="mensage">Nota:</label>
        <textarea  {...register('Mensage')} className ="text_tarea" name="Mensage" id=""></textarea>
        </div>
       <button className="boton" type='submi'>Enviar</button>
       {
        (Estado)&& <h2>Mensaje enviado Correctamente</h2>
       
       }
        
      </form>
      <hr/>
    </div>
    </div> 
  </>
  )
}


