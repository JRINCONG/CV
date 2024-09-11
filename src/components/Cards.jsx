import React from 'react'
import {v4} from 'uuid';

export const Cards = ({Card, array}) => {


  return (
    <div className='Card'>

       
        <div className='Container_info'>
        <div className='Title'>
            <h3><box-icon type='solid' name='square'></box-icon>{Card.Name}</h3>
        </div>
       
        <div className='description'>
           <p>{Card.Description}</p>
        </div>
       
       <ul className='Container_lenguaje'>
        <li>Herramientas Utilizadas:</li>
        {
            array.map((item)=>(
                <li key={v4()} className='container_items'>{item}</li>
            ))
        }
       
       </ul>      
        </div>
        <div className='Container_img'>
            <img src={Card.img}/>
            <div className='Container_link'>
            <a href={Card.link} target="_blank">Link: {Card.Name}</a>
        </div>
        </div>
        </div>
  )
}


