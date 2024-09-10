import React from 'react'
import '../styles/Menu.css'



export const Menu = () => {

   const menu=document.querySelector('.Menu')
const Abrir = ()=>{
   document.querySelector('.Menu').classList.add('show_menu')

}
const Cerrar = ()=>{
   document.querySelector('.Menu').classList.remove('show_menu')
}


  


  return (
    <>
    <div className='Container-Menu'>
      <div className='Menu shadow-2xl'>
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

