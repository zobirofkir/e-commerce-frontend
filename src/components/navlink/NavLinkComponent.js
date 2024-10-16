import React from 'react'
import Logo from '../../images/logo/logo.png'

const NavLinkComponent = () => {
    const name = localStorage.getItem('name');

  return (
      <header>
            <nav class="bg-white px-4 lg:px-6  z-10 fixed w-full ">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" class="flex items-center">
                        <img src={Logo} class="mr-3 h-20 w-20" alt="CSW SHOP" />
                        {name ? (
                            <p class="self-center text-2xl font-semibold whitespace-nowrap">{name}</p>
                        ) : (
                            <p class="self-center text-2xl font-semibold whitespace-nowrap">CSW SHOP</p>
                        )}
                    </a>
                </div>
            </nav>
      </header>
  )
}

export default NavLinkComponent