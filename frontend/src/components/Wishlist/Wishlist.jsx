import React from 'react'
import {RxCross1} from 'react-icons/rx'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsCartPlus} from 'react-icons/bs'
import styles from '../../styles/styles'

const Wishlist = ({setOpenWishList}) => {
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
                        onClick={()=> setOpenWishList(false)}
                     />
                </div>

                {/* Items length */}
                <div className={`${styles.normalFlex} p-3`}>
                    <AiOutlineHeart size={25} />
                    <h5 className='pl-1 text-[20px] font-[500]'>3 items added to Wishlist</h5>
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
        </div>
    </div>
  )
}


// CART SINGLE COMPONENT
const CartSingle = ({data}) => {
    return (
        <div className='border-b p-3'>
            <div className="w-full flex items-center gap-3">
                <RxCross1 size={25} color="#000" className='cursor-pointer'/>

                <img src="https://media.istockphoto.com/id/1208148708/photo/polka-dot-summer-brown-dress-suede-wedge-sandals-eco-straw-tote-bag-cosmetics-on-a-light.jpg?s=612x612&w=0&k=20&c=9Y135GYKHLlPotGIfynBbMPhXNbYeuDuFzreL_nfDE8=" 
                    className='w-[60px] h-[60px] rounded-lg border border-gray-300' alt="product" 
                />

                <div> 
                    <h1>{data.name}</h1>
                    <h4 className='font-[400px] text-[15px] text-[#d02222]'>${data.price}</h4>
                </div>

                <div>
                    <BsCartPlus size={20} className='cursor-pointer' title='Add to Cart'/>
                </div>
            </div>
        </div>
    )
}

export default Wishlist