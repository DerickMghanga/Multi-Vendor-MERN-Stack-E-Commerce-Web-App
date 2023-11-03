import React from 'react'
import {RxCross1} from 'react-icons/rx'
import {IoBagHandleOutline} from 'react-icons/io5'
import styles from '../../styles/styles'

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
        <div className="fixed top-0 right-0 min-h-full w-[26%] bg-slate-300 flex flex-col shadow-lg">
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

                    <h5 className='pl-2 text-[20px] font-[500]'> 3 items</h5>
                </div>

                {/* Cart Single Items */}
                <br/>
                <div className='w-full border-t'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart