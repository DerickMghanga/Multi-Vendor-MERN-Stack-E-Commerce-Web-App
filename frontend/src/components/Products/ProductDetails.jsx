import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/styles';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductDetails = ({ data }) => {

    const navigate = useNavigate();

    const [count, setCount] = useState(1);
    const [click, setClick] = useState(false);
    const [select, setSelect] = useState(0);

    function decrementCount() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function incrementCount() {
        setCount(count + 1);
    }

    const handleMessageSubmit = () => {
        navigate("/inbox?conversation=507ebjver884dgfhf");
    }


    return (
        <div className='bg-white'>
            {
                data ? (
                    <div className={`${styles.section} w-[90%] md:w-[80%]`}>
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
                                    <p className='mt-3'>{data.description}</p>

                                    <div className="flex pt-3">
                                        <h4 className={`${styles.productDiscountPrice}`}>${data.discount_price}</h4>
                                        <h3 className={`${styles.price}`}>{data.price ? data.price + "$" : null}</h3>
                                    </div>

                                    <div className={`${styles.normalFlex} mt-12 mb-6 justify-between pr-3`}>
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

                                    <div className='btn-primary'>
                                        <span className='flex items-center gap-2 text-white'>
                                            Add to Cart <AiOutlineShoppingCart size={23} />
                                        </span>
                                    </div>

                                    <div className="flex items-center pt-5">
                                        <img src={data.shop.shop_avatar.url} alt="shop-display"
                                            className='w-[50px] h-[50px] rounded-full'
                                        />

                                        <div className='ml-3'>
                                            <h3 className={`${styles.shop_name} p-0.5`}>{data.shop.name}</h3>
                                            <h5 className='pb-3 text-[15px]'>({data.shop.ratings} Ratings)</h5>
                                        </div>

                                        <div className='btn-primary ml-12'
                                            onClick={handleMessageSubmit}
                                        >
                                            <span className='text-white flex items-center gap-1 text-sm p-1'>
                                                Send Message <AiOutlineMessage size={18} />
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <ProductDetailsInfo data={data} />
                      
                    </div>
                ) : null
            }
        </div>
    )
}

const ProductDetailsInfo = ({ data }) => {

    const [active, setActive] = useState(1);

    return (
        <div className='bg-gray-300 px-3 md:px-10 rounded'>
            <div className="w-full flex justify-between border-b pt-8 pb-2">
                <div className="relative text-center">
                    <h5 className='text-black text-sm md:text-[20px] px-1 leading-5 font-[600] cursor-pointer'
                        onClick={() => setActive(1)}
                    >
                        Product Details
                    </h5>

                    {
                        active === 1 ? (
                            <div className={`${styles.active_indicator}`} />
                        ) : null
                    }
                </div>

                <div className="relative text-center">
                    <h5 className='text-black text-sm md:text-[20px] px-1 leading-5 font-[600] cursor-pointer'
                        onClick={() => setActive(2)}
                    >
                        Product Reviews
                    </h5>

                    {
                        active === 2 ? (
                            <div className={`${styles.active_indicator}`} />
                        ) : null
                    }
                </div>

                <div className="relative text-center">
                    <h5 className='text-black text-sm md:text-[20px] px-1 leading-5 font-[600] cursor-pointer'
                        onClick={() => setActive(3)}
                    >
                        Seller Information
                    </h5>

                    {
                        active === 3 ? (
                            <div className={`${styles.active_indicator}`} />
                        ) : null
                    }
                </div>
            </div>

            {
                active === 1 ? (
                    <>
                        <p className='py-2 leading-5 pb-10 whitespace-pre-line'>
                            Cras ultricies mi eu turpis hendrerit fringilla. Praesent nonummy mi in odio. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec vitae orci sed dolor rutrum auctor.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Quisque malesuada placerat nisl. Nam commodo suscipit quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                            Donec vitae sapien ut libero venenatis faucibus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Mauris sollicitudin fermentum libero. Morbi mollis tellus ac sapien. Etiam ultricies nisi vel augue.
                        </p>
                        <p className='py-2 leading-5 pb-10 whitespace-pre-line'>
                            Cras ultricies mi eu turpis hendrerit fringilla. Praesent nonummy mi in odio. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec vitae orci sed dolor rutrum auctor.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Quisque malesuada placerat nisl. Nam commodo suscipit quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                            Donec vitae sapien ut libero venenatis faucibus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Mauris sollicitudin fermentum libero. Morbi mollis tellus ac sapien. Etiam ultricies nisi vel augue.
                        </p>
                        <p className='py-2 leading-5 pb-10 whitespace-pre-line'>
                            Cras ultricies mi eu turpis hendrerit fringilla. Praesent nonummy mi in odio. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros. Donec vitae orci sed dolor rutrum auctor.
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Quisque malesuada placerat nisl. Nam commodo suscipit quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
                            Donec vitae sapien ut libero venenatis faucibus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Mauris sollicitudin fermentum libero. Morbi mollis tellus ac sapien. Etiam ultricies nisi vel augue.
                        </p>
                    </>
                ) : null
            }

            {
                active === 2 ? (
                    <div className='flex items-center justify-center h-[40vh]'>
                        <p>No Reviews yet!</p>
                    </div>
                ) : null
            }

            {
                active === 3 && (
                    <div className='w-full block md:flex p-5'>
                        <div className="w-full md:w-[50%]">
                            <div className="flex items-center">
                                <img src={data.shop.shop_avatar.url} alt="shop-pic"
                                    className='w-[50px] h-[50px] rounded-full'
                                />

                                <div className='ml-3'>
                                    <h3 className={`${styles.shop_name} p-0.5`}>{data.shop.name}</h3>
                                    <h5 className='pb-3 text-[15px]'>({data.shop.ratings} Ratings)</h5>
                                </div>
                            </div>

                            <p className='pt-2'>
                                Phasellus accumsan cursus velit. Vestibulum suscipit nulla quis orci. Pellentesque posuere.
                                Phasellus dolor. Etiam ultricies nisi vel augue. Fusce ac felis sit amet ligula pharetra condimentum.
                            </p>
                        </div>

                        <div className="w-full md:w-[50%] mt-5 md:flex flex-col items-end">
                            <div className="">
                                <h5 className='font-[600]'>
                                    Joined on: 
                                    <span className='font-[500]'> 11 November 2023</span>
                                </h5>

                                <h5 className='font-[600]'>
                                    Total Products: 
                                    <span className='font-[500]'> 400</span>
                                </h5>

                                <h5 className='font-[600]'>
                                    Total Reviews: 
                                    <span className='font-[500]'> 497</span>
                                </h5>

                                <Link to='/'>
                                    <div className='btn-primary text-white text-sm'>
                                        Visit Shop
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default ProductDetails