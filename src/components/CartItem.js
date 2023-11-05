import React, { useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext'


const CartItem = ({item}) => {
  const {removeFromCart, decreaseItem,addToCart}=useContext(CartContext)
  const {product} =useContext(ProductContext)

  const {id, title, image, price, amount} =item;
  return (
    <div className='flex py-4 gap-x-4 lg:px-6 border-b border-gray-200  w-full font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="" />
        </Link>
        <div className='w-full flex flex-col'>
          {/* title and remove button */}
          <div className='flex justify-between mb-2'>
            <Link className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline' to={`/product/${id}`}>
              {title}
            </Link>
            <div onClick={()=>removeFromCart(id)} className=' cursor-pointer text-xl'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition' />
            </div>
          </div>
          <div className='flex gap-x-2 h-[36px] text-sm '>
            {/* qty */}
            <div className='flex flex-1 justify-between max-w-[100px] items-center h-full border text-primary font-medium'>
              {/* minusicon */}
              <div onClick={()=>decreaseItem(id)} className='h-full cursor-pointer flex flex-1 justify-center items-center'><IoMdRemove/></div>
              {/* amount */}
              <div className='h-ful flex justify-center items-center px-2'>{amount}</div>
              {/* addicon */}
              <div onClick={()=>addToCart(product,id)} className=' h-full cursor-pointer flex flex-1 justify-center items-center'><IoMdAdd/></div>
            </div>
            {/* item price */}
            <div className='flex-1 flex items-center justify-around'>$ {price}</div>
            {/* final price */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium  '>{`$ ${parseFloat(price  * amount ).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
