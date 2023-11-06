import React,{useContext} from 'react'
import {SidebarContext} from '../contexts/SidebarContext'
import {IoMdArrowForward} from 'react-icons/io'
import { CartContext } from '../contexts/CartContext'
import CartItem from '../components/CartItem'
import {FiTrash2} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const {itemAmount}= useContext(CartContext)

  const {isopen,handleopen}= useContext(SidebarContext)
  const {clearCart, total ,cart}=useContext(CartContext)
  return (
    <div className={`${isopen ? 'right-0':'-right-[100%]'} h-full bg-white fixed top-0 w-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='font-semibold text-sm uppercase'>Shoping Bag ({itemAmount})</div>
        <div onClick={handleopen} className='text-2xl flex justify-center items-center cursor-pointer '><IoMdArrowForward/></div>
      </div>
      <div className='flex flex-col gap-y-2 h-[520px] lg:h-[540px] overflow-y-auto overflow-x-hidden border-b'>
        {cart.map((item)=>{
          return <CartItem item={item} key={item.id}/>
        })}
      </div>
      <div className='flex flex-col py-4 gap-y-3'>
      <div className='flex justify-between w-full items-center mb-2'>
        <div className='uppercase font-semibold'><span className='me-2'>Total:</span>$ {parseFloat(total).toFixed(2)}</div>
        <div onClick={()=>clearCart()} className='bg-red-500 w-12 h-12 flex justify-center cursor pointer text-xl items-centers py-3 text-white'><FiTrash2/></div>
      </div>
      <Link className='flex justify-center bg-gray-200 p-4'>View Cart</Link>
      <Link className='flex justify-center bg-black text-white py-4'>Checkout</Link>
      </div>
    </div>
  )
}

export default Sidebar
