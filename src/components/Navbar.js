import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        
        <NavLink to="/">
          <div>
            <img width={100} height={100} src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-shopping-website-logo-social-media-design-template-7c68f89c80b29e89312c5672e209721c_screen.jpg?ts=1589638076"/>
          </div>
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          
          <NavLink to="/cart">
            <FaShoppingCart />
          </NavLink>
        </div>
      </div>
    </div> 
  )
}

export default Navbar
