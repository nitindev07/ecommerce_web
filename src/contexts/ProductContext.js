import React,{createContext, useEffect, useState} from 'react'

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products, setProduct]=useState([])
  //fetch data
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then(res =>{
        return res.json()
      })
      .then(data =>{
        setProduct(data);
      })
      
  },[]);
  
  
  
  return (
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;
