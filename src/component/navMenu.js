import React, { useState } from 'react'

import "./NavMenu.css"
import Button from './Button';
import { IoMenu } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
export default function NavMenu() {
  const [mobile, setMobile] = useState(false)

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
      <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden ' onClick={()=>setMobile(!mobile)}>
      {mobile ?  <ImCross/> : <IoMenu />}
     
     {/*  */}
      </div>
      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 md:pl-25 transition-all duration-500 bg-blue-300 ease-in  ${mobile ? "top-16" : "top-[-490px]"}`}>
    {
      Links.map((link, i)=>(
      <li key={i} className='md:ml-8 text-xl md:my-0 my-7'>
        <a href={link.link} className='hover:bg-gray-800 hover:py-2 hover:p-2 hover:text-gray-400 duration-500 rounded'>
          {link.name}
        </a>
      </li>
      ))
    }
    <div className='space-x-2 flex flex-col '>
    {/* <Button>
        Newsletter
      </Button>
      <Button>
        Se connecter
      </Button> */}
    </div>
    </ul>

      
      
      </div>
    </nav>
  );
}

