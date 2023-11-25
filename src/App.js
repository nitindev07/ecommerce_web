import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { useState } from 'react';

const App = () => {
  const [show, setShow] = useState(false);

  const git = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 500); // Display "Add to Cart" for 2 seconds (2000 milliseconds)
  };

  return (
    <div className='overflow-hidden'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home git={git} show={show}/>}/>
          <Route path='/product/:id' element={<ProductDetails show={show} git={git} />}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
} 

export default App
