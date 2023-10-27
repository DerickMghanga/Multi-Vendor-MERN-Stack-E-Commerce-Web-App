import React, { useEffect, useState } from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import styles from '../styles/styles'
import { useSearchParams } from 'react-router-dom'
import { productData } from '../static/data'
import ProductCard from '../components/Root/ProductCard/ProductCard'

const ProductsPage = () => {

    const [searchParams] = useSearchParams();  //'useSearchParams' returns an Array
    const categoryData = searchParams.get("category");
    const [data, setData] = useState([]);

    useEffect(()=>{
        if(categoryData === null) {  //no category selected(All products)
            const d = productData && productData.sort((a,b) => a.total_sell - b.total_sell);
            setData(d);

        } else {  //when category selected in Header.jsx >> Category section: Dropdown.jsx
            const d = productData && productData.filter((i) => i.category === categoryData);
            setData(d);
        }

        window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <Header activeHeading={3} />

        {/* DISPLAY CATEGORIES IN A CATEGORY */}
        <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] my-12">
                {
                    data && data.map((i, index) => (
                        <ProductCard productData={i} key={index} />
                    ))
                }
            </div>

            
            {/* INCASE NO PRODUCTS AVAILABLE */}
            {
                data && data.length === 0 ? (
                    <h1 className='text-center w-full py-[110px] text-[20px]'>
                        Sorry. No products found.
                    </h1>
                ) : null
            }
        </div>

        <Footer />
    </div>
  )
}

export default ProductsPage