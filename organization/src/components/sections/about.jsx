import React from 'react'
import { About } from '../../assets/data/fakedata'

export default function AboutSection() {
  return (
    <div className='about-section flex justify-between'>
        <div className="text">
          <h3>{About.title}</h3>
          <p>{About.text}</p>
        </div>
        <div className="about-img">
            <img src={About.image} alt="about" />
        </div>
    </div>
  )
}
