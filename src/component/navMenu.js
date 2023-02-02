import React, { useState } from 'react'

import "./NavMenu.css"
import { IoMenu } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
export default function NavMenu() {
  const [mobile, setMobile] = useState(false)

  const Links = [
    {name:"CHAT",link:"/"},
    {name:"POISSON",link:"/poisson"},
    {name:"EQUIDES",link:"/equides"},
    {name:"PETIT MAMMIFERE",link:"/petitmammifere"},
    {name:"CHIEN",link:"/chien"},
    {name:"ANIMAUX DE TERRARIUM",link:"/animauxdeterrarium"},
    {name:"OISEAUX",link:"/oiseaux"},
    {name:"ANIMAUX DE LA FERME",link:"/animauxdelaferme"},
    {name:"A PROPOS",link:"/apropos"},
    {name:"MENU",link:"/menu"}
]

  return (
    <nav className='navbar bg-white shadow-md overflow-hidden w-full top-0 left-0'>
      <div className='md:flex md:px-10 items-center justify-center py-4'>
        <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden ' onClick={()=>setMobile(!mobile)}>
      {mobile ?  <ImCross/> : <IoMenu />}
      </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 md:pl-25 transition-all duration-500  ease-in  ${mobile ? "top-16" : "top-[-490px]"}`}>
      {
      Links.map((link, i)=>(
        <li key={i} className='md:ml-8 text-xs md:my-0 my-7'>
          <a href={link.link} className='hover:bg-gray-800 hover:py-2 hover:p-2 hover:text-gray-400 duration-500 rounded'>
            {link.name}
          </a>
        </li>
        ))
      } 
      </ul>
      </div>
    </nav>
  );
}

