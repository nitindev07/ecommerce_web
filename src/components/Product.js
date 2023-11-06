import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill}  from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';

const Product = ({product, git}) => {
  const {addToCart}=useContext(CartContext)
 
  
  const {id ,image , category, title, price}= product
  return (
    <div>
      <div className='border h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='flex justify-center w-full h-full items-center'>
          <Link to={`/product/${id}`} className='w-[200px] mx-auto flex justify-center items-center'>
            <img className='group-hover:scale-110 transition duration-300 max-h-[160px]' src={image} alt="" />
          </Link>
        </div>
        <div className='absolute top-1 lg:-right-11 right-1 lg:group-hover:right-1 p-2 lg:opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={() => {
      addToCart(product, id);
      git();
    }}><div className='flex bg-red-500 justify-center items-center text-white w-10 h-10'><BsPlus className='text-3xl'/></div></button>
          <Link to={`/product/${id}`} className='w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl'><BsEyeFill/></Link>
        </div>
      </div>
      <div>
        <div>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold'>{title}</h2>
        </Link>
        <div className=' font-semibold'>$ {price}</div>
      </div>
    </div>
  )
}

export default Product
