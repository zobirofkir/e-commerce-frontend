import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterComponent from '../components/footer/FooterComponent'
import NavLinkComponent from '../components/navlink/NavLinkComponent'

const Layout = () => {
  return (
    <div className='layout'>
        <NavLinkComponent />

        <main>
            <Outlet />
        </main>

        <FooterComponent />
    </div>
  )
}

export default Layout