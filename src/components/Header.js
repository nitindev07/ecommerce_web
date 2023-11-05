import React, { useContext, useState,useEffect } from 'react'
import {SidebarContext} from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from '../img/logo.svg'
import { CartContext } from '../contexts/CartContext'


const Header = () => {
  const [isActive, setIsActive]=useState(false)
  const {itemAmount}= useContext(CartContext)
  const {setIsOpen, isopen}=useContext(SidebarContext)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{window.scrollY > 80 ? setIsActive(true): setIsActive(false);})
  })
  return (
    <header className={`${isActive ? 'bg-white py-4 shadow-md': 'bg-none py-6'} fixed w-full transition-all z-10`}>
    <div className='bg-pink container mx-auto flex items-center justify-between py-3 h-full'>
      <Link to={'/'}><img className='w-[40px]' src={logo} alt="" /></Link>
      <div className='relative cursor-pointer flex' onClick={()=>setIsOpen(!isopen)}>
      <BsBag className='text-2xl'/>
      <div className='absolute bg-red-500 text-white -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex justify-center items-center -right-2'>{itemAmount}</div>
      </div>
    </div>
    </header>
  )
}

export default Header
