import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx';
import styles from '../../../styles/styles';
import { AiOutlineMessage, AiFillHeart, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetailsCard = ({productData, setOpen}) => {

    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    // const [select, setSelect] = useState(false);

    const handleMessageSubmit = () => {

    }

    const decrementCount = () => {
        if(count > 1) {
            setCount(count - 1);
        }
    } 

    const incrementCount = () => {
        setCount(count + 1);
    } 

  return (
    <div className='bg-white'>
        {
            productData ? (
                <div className='fixed w-full h-screen top-0 left-0 z-40 flex items-center justify-center'>
                    <div className='w-[90%] md:w-[60%] h-[90vh] md:h-[75vh] bg-white overflow-y-scroll rounded-md shadow-lg shadow-gray-400 relative p-4'>
                        <RxCross1 size={21}
                            className='absolute right-3 top-3 z-50 border border-gray-400 rounded-full p-0.5'
                            onClick={() => setOpen(false)}
                        />
                        
                        <div className='block w-full md:flex'>
                            <div className="w-full md:w-[50%]">
                                <img src={productData.image_Url[0].url} alt="product-img" />

                                <div className='flex gap-1'>
                                    <img src={productData.shop.shop_avatar.url} alt="shop-avatar"
                                        className='w-[50px] h-[50px] rounded-full mr-2'
                                    />

                                    <div>
                                        <h3 className={`${styles.shop_name}`}>
                                            {productData.shop.name}
                                        </h3>
                                        <h5 className='pb-3 text-[15px]'>
                                            ({productData.shop.ratings}) Ratings
                                        </h5>
                                    </div>
                                </div>

                                <div className='btn-primary'
                                        onClick={handleMessageSubmit}
                                    >
                                    <span className='text-white flex items-center text-sm gap-1'>
                                        Send message <AiOutlineMessage size={18} />
                                    </span>
                                </div>

                                <h5 className='text-[16px] text-sm text-primary-green mt-4'>
                                    ({productData.total_sell}) Sold Out
                                </h5>
                            </div>

                            <div className="w-full md:w-[50%] pt-5 px-[5px]">
                                <h1 className={`${styles.productTitle} text-[20px]`}>
                                    {productData.name}
                                </h1>
                                <hr className='my-3 border border-gray-300'/>
                                <p>{productData.description}</p>

                                <div className='flex pt-3'>
                                    <h4 className={`${styles.productDiscountPrice}`}>
                                        {productData.discount_price + " $"}
                                    </h4>

                                    <h3 className={`${styles.price}`}>
                                        {productData.price ? productData.price + " $" : null}
                                    </h3>
                                </div>

                                <div className="flex mb-3 items-center mt-12 justify-between pr-3">
                                    <div>
                                        <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out'
                                            onClick={decrementCount}
                                        >
                                            -
                                        </button>

                                        <span className='bg-gray-200 text-gray-600 font-medium px-4 py-[10px]'>
                                            {count}
                                        </span>

                                        <button className='bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out'
                                            onClick={incrementCount}
                                        >
                                            +
                                        </button> 
                                        
                                    </div>

                                    <div>
                                        {   //Add to Favourites
                                            click ? (
                                                <AiFillHeart size={24} 
                                                className='cursor-pointer'
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title='Remove from Wishlist'
                                                />
                                            ) : (
                                                <AiOutlineHeart size={24} 
                                                className='cursor-pointer'
                                                onClick={() => setClick(!click)}
                                                color={click ? "red" : "#333"}
                                                title='Add to Wishlist'
                                                />
                                            )
                                        }
                                    </div>
                                </div>

                                <div className='btn-primary mt-6'>
                                    <span className='flex items-center gap-2 text-white'>
                                        Add to Cart <AiOutlineShoppingCart size={23} />
                                    </span>
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

export default ProductDetailsCard