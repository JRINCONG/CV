import React from 'react'
import '../styles/Hero.css'
import { ReactTyped, Typed } from 'react-typed'
export const Hero = () => {
  return (
    <div className='Container_Hero'>
    <figure>
      <div className='Container_foto'>

      <h1 className='Hero_Name font-serif text-5xl font-bold'>JAIRO RINCON G</h1>
      </div>
      <p className="hero__description">
            <span className="typing">
            <ReactTyped
                    strings={[
                    "Fron-tend Developer",
                    "Back-end Developer",
                    "Full-stack Developer",
                    ]}
                    TypedSpeed={150}
                    backSpeed={100}
                    loop
                  
                  />

            </span>
          </p>

    </figure>
        
    
    </div>
  )
}

