import React, { useState } from 'react'
import { ImCross } from 'react-icons/im'
import { IoMenu } from 'react-icons/io5'
import Button from './Button'

 const Header = () => {
    const [mobile, setMobile] = useState(false)
  return (
    <nav className='navbar bg-white shadow-md overflow-hidden w-full top-0 left-0 border-b-2'>
      <div className='md:flex md:px-10 items-center justify-between py-4'>

      
      <div className='flex items-center text-2xl'>
        <img src='/logo.png' alt='logo' className='w-20'/>
      </div>
      <div className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden ' onClick={()=>setMobile(!mobile)}>
      {mobile ?  <ImCross/> : <IoMenu />}
     
     {/*  */}
      </div>
    
    <div className='space-x-2 flex flex-col '>
      <Button>
        Se connecter
      </Button>
    </div>
    

      
      
      </div>
    </nav>
  )
}

export default Header;
