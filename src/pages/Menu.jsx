import React, { useState } from 'react'
import '../styles/Menu.css'



export const Menu = () => {


   const [isValue, setisValue] = useState(false)

   
const Abrir = ()=>{
   setisValue(true)
}
const Cerrar = ()=>{
   setisValue()
}


  


  return (
    <>
    <div className='Container-Menu'>
      <div className={`Menu ${isValue ?"show_menu":""}`}>
      <button className='btn btn-close' onClick={Cerrar}>
      <box-icon name='x'></box-icon>
      </button>
      <lu className='Menu_items'>
     
        <li className='Menu_list'>
           <a href='#' className='menu_link'>Inicio</a>
        </li>
        <li className='Menu_list'>
           <a href='#' className='menu_link'>Acerca de mí</a>
        </li>
        <li className='Menu_list'>
           <a href='#' className='menu_link'>Habilidades</a>
        </li>
        <li className='Menu_list'>
           <a href='#' className='menu_link'>Proyectos</a>
        </li>
        <li className='Menu_list'>
           <a href='#' className='menu_link'>Contacto</a>
        </li>        
           
      
      <a href='#' className='btn btn-resume'>Descargar C.V.</a>
      </lu>
      </div>

      <div>
      <button className='btn btn-open'onClick={Abrir}>
      <box-icon name='menu'></box-icon>
      </button>
      </div>
      
    </div>
   
    
    </>
  )
}

