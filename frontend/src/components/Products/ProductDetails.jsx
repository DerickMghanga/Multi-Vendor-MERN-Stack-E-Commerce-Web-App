import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';

const ProductDetails = ({ data }) => {

    const navigate = useNavigate();

    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);

    return (
        <div className='bg-white'>
            {
                data ? (
                    <div className={`${styles.section} w-[90%] md:w-[80%] h-screen`}>
                        <div className="w-full py-5">
                            <div className="block w-full md:flex">
                                <div className="w-full md:w-[50%]">
                                    <img src={data.image_Url[select].url} alt="main-product-display"
                                        className='w-[80%]'
                                    />

                                    <div className="w-full flex gap-2">
                                        <div className={`${select === 0 ? 'border' : 'null'} cursor-pointer`}>
                                            <img src={data?.image_Url[0].url} alt="product-item"
                                                className='h-[150px]' onClick={() => setSelect(0)}
                                            />
                                        </div>

                                        <div className={`${select === 1 ? 'border' : 'null'} cursor-pointer`}>
                                            <img src={data?.image_Url[1].url} alt="product-item"
                                                className='h-[150px]' onClick={() => setSelect(1)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-[50%] pt-5">
                                    <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                                    <p>{data.description}</p>

                                    <div className="flex pt-3">
                                        <h4 className={`${styles.productDiscountPrice}`}>${data.discount_price}</h4>
                                        <h3 className={`${styles.price}`}>{data.price ? data.price +"$":null}</h3>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default ProductDetails