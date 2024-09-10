import React from 'react'
import '../styles/Abaut.css'

export const Abaut = () => {
  return (
    <div className='Container_Abaut'>
        <div className='text_title'>
        <h1><b>//</b> Sobre mí</h1>
        </div>
        <div className='container_items'>

       
        <div className='texto_abaut'>
            <p>Soy una persona que se esfuerza en todo momento por garantizar la satisfacción de la empresa. Cuento con amplia experiencia profesional y un sólido conocimiento del sector. Tengo facilidad para trabajar tanto en equipo como de forma independiente, según las necesidades. Busco la oportunidad de demostrar mi valía en una empresa de futuro.</p>
        </div>
        
        <div className="shadow-2xl imagen_abaut">
           <img src='../img/1970468.svg'/>
        </div>
        </div>
    </div>
  )
}


