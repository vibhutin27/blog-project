import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { auth, provider } from '../firebase/config'
import { signInWithPopup, signOut } from 'firebase/auth'
import Logo from '../assets/logo.png'


export const Navbar = () => {
  const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User signed in: ", result.user);
      setAuth(true); 
      localStorage.setItem("isAuth", true);
    } catch (error) {
      console.error("Login failed: ", error.message);
      alert("Authentication failed. Please try again."); // User-friendly feedback
    }
  };

  const handleLogut = () => {
    signOut(auth);
    setAuth(false); 
    localStorage.setItem("isAuth", false);
  }

  return (
    <header>
          <Link to="/" className="logo">
            <img src={Logo} alt="Routemate Logo" />
            <span>Blog page</span>
        </Link>
        <nav className="navigation">
            <NavLink to="/" className="link" end>Home</NavLink>

            <NavLink to="/contact" className="link">Contact</NavLink>
            {isAuth ? (
              <>
                <NavLink to="/addblog" className="link">Add Blog</NavLink> 
                <button><i className="bi bi-box-arrow-in-right link" onClick={handleLogut}>Logout</i></button>
              </>): ( <button><i className="bi bi-box-arrow-in-left link" onClick={handleLogin}>Login</i></button>)}
            
            
        </nav>
    </header>
  )
}

export default Navbar