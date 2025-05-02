import React from 'react'
import Topbar from '../Layout/Topbar.jsx'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <header >
      {<Topbar/>}
      {<Navbar className='border-b border-gray-200'/>}      
    </header>
  )
}

export default Header