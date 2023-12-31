import React, {useState, createContext, useEffect } from 'react'

export const CartContext= createContext()

const CartProvider = ({children}) => {
  const [cart, setCart]=useState([])
  const [itemAmount,setItemAmount]=useState(0)
  const [total, setTotal]=useState(0)

  //total amount
  useEffect(()=>{
    if (cart){
      const total = cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.price * currentItem.amount
      }, 0)
      setTotal(total)
    }
  }, [cart])
  
  //cart item amount
  useEffect(()=>{
    if (cart){
      const amount = cart.reduce((accumulator, currentItem)=>{
        return accumulator + currentItem.amount
      }, 0)
      setItemAmount(amount)
    }
  }, [cart])


  const addToCart=(product,id)=>{
    const newItem={...product, amount:1};
    //check if the item is already in cart
    const cartItem = cart.find((item)=>{
      return item.id === id
    })
    if(cartItem){
      const newCart= [...cart].map(item =>{
        if(item.id === id){
          return {...item, amount: cartItem.amount +1}
        }else{
          return item;
        }
      })
      setCart(newCart);
    }else {
      setCart([...cart, newItem]);
    }
  }
  //remove from cart
  const removeFromCart = (id) =>{
    const newCart =cart.filter((item)=>{
      return item.id !== id;
    })
    setCart(newCart)
  }
  //clear cart
  const clearCart=()=>{
    setCart([])
  }
  //decrease
  const decreaseItem = (id) => {
    //check if the item is already in cart
    const cartItem = cart.find((item)=>{
      return item.id === id
    });
    
    if(cartItem){
      const newCart= cart.map((item) =>{
        if(item.id === id){
          return {...item, amount: cartItem.amount -1}
        }else{
          return item;
        }
      })
      setCart(newCart);
    }
      if(cartItem.amount < 2) {
        removeFromCart(id)
      }
    
    
    
  }
  return (
    <CartContext.Provider value={{ total,itemAmount,removeFromCart, decreaseItem , clearCart ,cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
