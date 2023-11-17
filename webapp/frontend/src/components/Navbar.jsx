import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../img/logo.png"

const Navbar = () => {
  return (

    <div className='navbar'>Navbar
    <div className='container'><div className='logo'>
      <img src={Logo} alt=""/>
      </div>
      <div className='links'>
        <Link className="link" to="/konyveles">
          <h6>Könyvelés</h6>
          </Link>
          <Link className="link" to="/profil">
          <h6>Felhasznalo profil</h6>
          </Link>
          <Link className="link" to="/osszegzes">
          <h6>Összegzés</h6>
          </Link>
          <Link className="link" to="/konyveles2">
          <h6>Könyvelés2</h6>
          </Link>
          <Link className="link" to="/konyveles3">
          <h6>Könyvelés3</h6>
          </Link>
          <span>Profilname</span>
          <span>Logout</span>
          
          </div></div></div>
  )
}

export default Navbar