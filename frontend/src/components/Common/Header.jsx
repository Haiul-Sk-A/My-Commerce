import React from 'react'
import Topbar from '../Layout/Topbar.jsx'
import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div>
      {<Topbar/>}
      {<Navbar/>}
    </div>
  )
}

export default Header