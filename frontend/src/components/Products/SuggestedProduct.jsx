import React, { useEffect, useState } from 'react'
import { productData } from '../../static/data';
import styles from '../../styles/styles';
import ProductCard from '../Root/ProductCard/ProductCard';

const SuggestedProduct = ({ data }) => {

    const [products, setProducts] = useState(null);

    //filter products in the same Category as the current product
    useEffect(() => {
        const d = productData && productData.filter((i) => i.category === data.category && i.name !== data.name);
        setProducts(d);
    }, []);

    return (
        <div className='bg-white'>
            {
                products?.length > 0 && (
                    <div className={`${styles.section} p-4`}>
                        <h2 className={`${styles.heading} !text-[25px] font-[500] border-b mb-5`}>
                            Related Products
                        </h2>

                        <div className='bg-gray-300 w-full p-3 rounded'>
                        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] border-0">
                            {
                                products && products.map((i, index) => (
                                    <ProductCard productData={i} key={index} />
                                ))
                            }
                        </div>
                        </div>

                    </div>
                )
            }
        </div>
    )
}

export default SuggestedProduct