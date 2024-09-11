import React from 'react';
import {Proyectos} from '../util/Array_Proyectos';
import { Cards } from '../components/Cards';
import '../styles/Cards.css';
import {v4} from 'uuid';




export const Proyect = () => {

  return (
    <>
  
    <div className='Container_Proyect'> 
    
    <h1 className='Proyectos'>// Proyectos</h1>
 
     <div className='Containers_Cards'>
        {
            Proyectos?.map((card)=>(      
                <Cards
                key={v4()}
                Card ={card}  
                array={card.Lenguajes}              
                />
            ))           
        }       
    </div>
    </div>
  </>
  )
}


