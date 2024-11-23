import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtactedRoute = ({children}) => {
    const isAuth = (JSON.parse(localStorage.getItem("isAuth")) || false);
  return (
    
    isAuth ? children : <Navigate to="/" />
  )
}

export default ProtactedRoute