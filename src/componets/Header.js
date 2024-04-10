import React from 'react'
import logo from "../assets/logo.PNG"
import {Link, NavLink} from "react-router-dom"
const Header = () => {
  return (
    <header>
      <a href="/" className ="logo">
        <img src ={logo} alt ="logo"/>
      </a>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header