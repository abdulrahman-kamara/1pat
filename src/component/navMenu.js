import React from 'react'

import "./NavMenu.css"
import Button from './Button';

export default function NavMenu() {

  const Links = [
    {name:"ACCUEIL",link:"/"},
    {name:"PROFILE",link:"/profile"},
    {name:"SHOP",link:"/shop"},
    {name:"CONTACT",link:"/contact"},
    {name:"ABOUT",link:"/about"}

]

  return (
    <nav className='navbar bg-white shadow-md overflow-hidden w-full top-0 left-0'>
      <div className='md:flex md:px-10 items-center justify-between py-4'>

      
      <div className='flex items-center text-2xl'>
        <span>
       <ion-icon name="menu-outline"></ion-icon>
        </span> 
        Logo   
      </div>
      <div className='text-3xl bg-black'>
      
      <ion-icon name="heart"></ion-icon>
      </div>
      <ul className='md:flex md:items-center md:pb-0 pb-5 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in '>
    {
      Links.map((link, i)=>(
      <li key={i} className='md:ml-8 text-xl md:my-0 my-7'>
        <a href={link.link} className='hover:bg-gray-800 hover:py-2 hover:p-2 hover:text-gray-400 duration-500'>
          {link.name}
        </a>
      </li>
      ))
    }
      </ul>

      <Button>
        Newsletter
      </Button>
      {/* <Button>
        Se connecter
      </Button> */}
      </div>
    </nav>
  );
}

