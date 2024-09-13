import React from 'react'
import '../styles/Skill.css'

export const Skill = () => {
  return (
    <div className='container-skill'>
  
        
      

    
        <div className='habilidades' id='habilidad'>
        <h1>// Mis Habilidades</h1>
        <ul>
          
            <li><box-icon type='solid' name='square'></box-icon>Trabajo en Equipo</li>
            <li><box-icon type='solid' name='square'></box-icon>Comunicación clara</li>
            <li><box-icon type='solid' name='square'></box-icon>Responsabilidad</li>
            <li><box-icon type='solid' name='square'></box-icon>Resolución de problemas</li>
            <li><box-icon type='solid' name='square'></box-icon>Adaptación al cambio</li>
            <li><box-icon type='solid' name='square'></box-icon>Gestión del tiempo</li>
        </ul>
      </div>
      

     <div className='logos'>
      <div>
        <img src='../img/React.webp'/>
      </div>
      <div>
        <img src='../img/node.png'/>
      </div>
      <div>
        <img src='../img/tailwindcss.webp'/>
      </div>
      <div >
        <img src='../img/javascript.png'/>
      </div>
      <div>
        <img src='../img/html.png'/>
      </div>
      </div>
     
      </div>
      
  )
}

