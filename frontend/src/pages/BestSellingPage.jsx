import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import styles from '../styles/styles'
import { productData } from '../static/data'
import ProductCard from '../components/Root/ProductCard/ProductCard'

const BestSellingPage = () => {

    const [data, setData] = useState([]);

    useEffect(()=>{
        const d = productData && productData.sort((a,b) => b.total_sell - a.total_sell); //from the most sold to least sold
        setData(d);

        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <Header activeHeading={2} />

        <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] my-12">
                {
                    data && data.map((i, index) => (
                        <ProductCard productData={i} key={index} />
                    ))
                }
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default BestSellingPage