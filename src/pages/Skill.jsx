import React from 'react'
import '../styles/Skill.css'

export const Skill = () => {
  return (
    <div className='container-skill'>
  
        <h1><b>//</b> Mis Habilidades</h1>
      
      

     <div className='logos'>
      <div className="md:transition-all">
        <img src='../img/React.webp'/>
      </div>
      <div>
        <img src='../img/node.png'/>
      </div>
      <div>
        <img src='../img/tailwindcss.webp'/>
      </div>
      <div className="shadow-2xl">
        <img src='../img/javascript.png'/>
      </div>
      <div>
        <img src='../img/html.png'/>
      </div>
      </div>
      <div className='habilidades'>
        <ul>
          
            <li><box-icon name='check-double'></box-icon>Trabajo en Equipo</li>
            <li><box-icon name='check-double'></box-icon>Comunicación clara</li>
            <li><box-icon name='check-double'></box-icon>ResponsResponsabilidad</li>
            <li><box-icon name='check-double'></box-icon>ReResolución de problemas</li>
            <li><box-icon name='check-double'></box-icon>AdAdaptación al cambio</li>
            <li><box-icon name='check-double'></box-icon>Gestión del tiempo</li>
        </ul>
      </div>
      </div>
   
  )
}

