import React from 'react'
import './content.css'
import { Link } from 'react-router-dom'

export default function Content() {
  return (
    <div className='content'>
      <div className='con1'>
        <p>Introducing <strong className='name'>ElevateX<sub className='name'>2</sub></strong> </p>
      </div>
      <div className='con2'><h4>Redefining Mobile Technology for a Connected World</h4></div>
      <div className='con3 my-4'>
        <Link to='/' className='btn1'>Order now</Link>
      </div>
    </div>
  )
}
