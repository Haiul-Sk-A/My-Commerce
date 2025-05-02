import React from 'react'
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      {/*heder*/}
      <Header/>
      {/*Main Content*/}  
      <main>
        <Outlet/>
      </main>
      {/*Footer8*/}
      <Footer/> 
    </>
  )
}

export default UserLayout