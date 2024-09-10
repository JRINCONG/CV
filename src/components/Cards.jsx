import React from 'react'
import {v4} from 'uuid';

export const Cards = ({Card, array}) => {


  return (
    <div className='Container_card shadow-2xl'>

        <div className='Container_img'>
            <img src={Card.img}/>
        </div>
        <hr className='division'/>
        <div className='Title'>
            <h3>{Card.Name}</h3>
        </div>
        <div className='description'>
           <p>{Card.Description}</p>
        </div>
        <div className='Container_link'>
            <a href={Card.link} target="_blank">Link: {Card.Name}</a>
        </div>
       <ul className='Container_lenguaje'>
        {
            array.map((item)=>(
                <li key={v4()} className='container_items'>{item}</li>
            ))
        }
       
       </ul>
      
        </div>
  )
}


