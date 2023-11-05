import React,{useContext,} from 'react'
import { ProductContext } from '../contexts/ProductContext'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {products} =useContext(ProductContext)
  // const [id,setId]=useState([null])
  const {id}= useParams()
  const pro =   products.find((item)=>{
    return item.id === parseInt(id)
  })
  
  if(!pro){
    return <section>loadinh...</section>
  }

  return (
    <div>
      <img src={pro.image} alt="" />
    </div>
  )
}

export default ProductDetails
