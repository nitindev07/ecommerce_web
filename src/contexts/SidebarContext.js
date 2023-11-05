import React, { createContext, useState } from 'react'

export const SidebarContext = createContext()


const Sidebarprovide = ({children}) => {
const [isopen, setIsOpen]= useState(false)
const handleopen = () =>{
  setIsOpen(false)
}
  return (
    <SidebarContext.Provider value={{isopen, setIsOpen, handleopen}}>
      {children}
    </SidebarContext.Provider>
  )
}

export default Sidebarprovide
