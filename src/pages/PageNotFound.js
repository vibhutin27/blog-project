import React from 'react'
import notfound from '../assets/pagenotfound.jpg'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <img src={notfound} alt="" />
      <button>
        <Link to="/">
        Back to Home
        </Link>
        
        </button>
    </div>
  )
}

