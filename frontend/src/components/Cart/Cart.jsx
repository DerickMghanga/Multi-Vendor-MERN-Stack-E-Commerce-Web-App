import React, { useState } from 'react'
import {RxCross1} from 'react-icons/rx'
import {IoBagHandleOutline} from 'react-icons/io5'
import {HiPlus, HiOutlineMinus} from 'react-icons/hi'

import styles from '../../styles/styles'
import { Link } from 'react-router-dom'

const Cart = ({setOpenCart}) => {
    const cartData = [
        {
            name: "iPhone 14 pro max 256GB & 8GB RAM Silver Colour",
            description: "test",
            price: 999,
        },
        {
            name: "MacBook pro max 512GB SSD & 16GB RAM Gold Colour",
            description: "test",
            price: 2999,
        },
        {
            name: "Samsung S22+ Ultra 128GB & 8GB RAM Silver Colour",
            description: "test",
            price: 1299,
        },
    ]
  return (
    <div className='fixed top-0 left-0 w-full bg-[#00000037] h-screen z-10'>
        <div className="fixed top-0 right-0 min-h-full w-[28%] bg-slate-100 flex flex-col shadow-lg">
            <div>
                <div className="flex w-full justify-end pt-5 pr-5">
                    <RxCross1 size={25}
                        className='cursor-pointer border border-black rounded-full p-1'
                        onClick={()=> setOpenCart(false)}
                     />
                </div>

                {/* Items length */}
                <div className={`${styles.normalFlex} p-4`}>
                    <IoBagHandleOutline size={25} />

                    <h5 className='pl-2 text-[20px] font-[500]'>3 items added to Cart</h5>
                </div>

                {/* Cart Single Items */}
                <br/>
                <div className='w-full border-t'>
                    {
                        cartData && cartData.map((i, index)=> (
                            <CartSingle key={index} data={i}/> 
                        ))
                    }
                </div>
            </div>

            <div className="px-5 my-2">
                {/* CheckOut Buttons */}
                <Link to='/checkout'>
                    <div className='h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-[5px]'>
                        <h1 className='text-white text-[17px] font-[600px]'>Checkout Now ($5297)</h1>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}


// CART SINGLE COMPONENT
const CartSingle = ({data}) => {

    const [value, setvalue] = useState(1);
    const totalprice = data.price * value;

    return (
        <div className='border-b p-4'>
            <div className="w-full flex items-center">
                <div>
                    <div className={`bg-[#e44343] border border-[#e4434373] rounded-full w-[24px] h-[24px] ${styles.normalFlex} justify-center cursor-pointer`}
                        onClick={()=> setvalue(value + 1)}
                    >
                        <HiPlus size={16} color="#fff"/>
                    </div>

                    <span className='pl-2'>
                        {value}
                    </span>

                    <div className={`bg-[#a7abb14f] rounded-full w-[24px] h-[24px] ${styles.normalFlex} justify-center cursor-pointer`}
                        onClick={()=> setvalue(value === 1? 1 : value - 1)}
                    >
                        <HiOutlineMinus size={16} color="#7d879c"/>
                    </div>
                </div>

                <img src="https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=" 
                    className='w-[60px] h-[60px] rounded-lg ml-3' alt="product" 
                />

                <div className='ml-2'> 
                    <h1>{data.name}</h1>
                    <h4 className='font-[400px] text-[15px] text-[#00000082]'>${data.price}  x  {value}</h4>
                    <h4 className='font-bold text-[17px] pt-[3px] text-[#d02222] font-roboto'>${totalprice}</h4>
                </div>

                <RxCross1 size={22} color="#000" className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default Cart