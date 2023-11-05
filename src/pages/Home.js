import React,{useContext} from 'react'
//import product context
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'
import Hero from '../components/Hero'


const Home = () => {
  const {products} =useContext(ProductContext)
  const filterProduct = products.filter((items)=>{
    return (items.category === "men's clothing" || items.category === "women's clothing" )
  })
  return (
    <div>
    <Hero/>
      <section className='py-16 mt-20'>
        <div className="container mx-auto">
        
          <div className='grid mx-auto md:mx-0 gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5' >
            {filterProduct.map((product)=>{
              return <Product product={product} key={product.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
