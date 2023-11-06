import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const {addToCart}=useContext(CartContext)

  // const [id,setId]=useState([null])
  const { id } = useParams();
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-sceen flex justify-center items-center">
        loading...
      </section>
    );
  }

  const { image, title, price, description } = product;

  return (
    <section className="flex items-center pt-32 pb-12 lg:py-32">
      <div className="container mx-auto">
        <div className="flex items-center lg:flex-row flex-col">
          <div className="flex-1 flex justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-y-5">
              <h3 className="text-2xl font-medium text-center max-w-[450px] lg:text-start">{title}</h3>
              <div className="text-lg font-medium text-center mb-2 lg:text-start text-red-700">$ {price}</div>
              <div className="text-center lg:text-start text-[12px] mb-3 lg:text-[16px] font-medium">{description}</div>
              <button className="bg-primary mx-auto lg:mx-0 text-white w-[150px] py-3 px-3" onClick={()=>addToCart(product, product.id)} >Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
