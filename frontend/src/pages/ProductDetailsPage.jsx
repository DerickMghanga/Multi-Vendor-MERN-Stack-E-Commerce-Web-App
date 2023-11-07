import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import ProductDetails from '../components/Products/ProductDetails.jsx'
import { useParams } from 'react-router-dom'
import { productData } from '../static/data'

const ProductDetailsPage = () => {

  const {name}  = useParams();
  // console.log(name);
  const [data, setData] = useState(null);

  const productName = name.replace(/-+/g, " ");
  // console.log(productName);

  useEffect(()=> {
    const data = productData.find((i)=> i.name === productName);  //filter product name

    setData(data);
  }, []);


  return (
    <div>
      <Header />
      <ProductDetails data={data}/>
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage