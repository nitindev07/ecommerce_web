import React, { useContext, useState } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import {TiTick} from 'react-icons/ti'

const Home = () => {
  const { products } = useContext(ProductContext);

  const [show, setShow] = useState(false);

  const git = () => {
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 500); // Display "Add to Cart" for 2 seconds (2000 milliseconds)
  };

  const filterProduct = products.filter((items) => {
    return (
      items.category === "men's clothing" ||
      items.category === "women's clothing"
    );
  });
  return (
    <div className="relativeve">
      <Hero />
      <section className="py-16 mt-20">
        <div className="container mx-auto">
          <div className="grid mx-auto md:mx-0 gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {filterProduct.map((product) => {
              return <Product git={git} product={product} key={product.id} />;
            })}
          </div>
          <div>
            <h1> {show && <div className="z-40 fixed border bg-white rounded-lg border-black shadow-2xl -ml-28 lg:-ml-20 left-1/2 bottom-10 py-2 px-2">
              <div className="flex justify-between items-center gap-x-4  px-4">
              <TiTick className="w-6 h-6 -ml-2 bg-green-400 rounded-full text-white"/>  
              <div className="text-xl font-semibold">Added To Cart</div>            
              </div>
            </div>}</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
