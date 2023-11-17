import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Address = () => {
    return (
        <div className='w-full px-5'>
            <div className="flex w-full items-center justify-between">
                <h1 className='text-[22px] font-[600] pb-2'>My Addresses</h1>
                <div className='btn-secondary'>
                    <span>Add New</span>
                </div>
            </div>
            <br />

            <div className="w-full bg-white h-[70px] rounded-[4px] flex items-center justify-between px-3 pr-10 shadow">
                <div className="flex items-center">
                    <h5>Default</h5>
                </div>
                <div className='pl-8 flex items-center'>
                    <h6>0100 Latema Road, Nairobi CBD, Kenya</h6>
                </div>
                <div className='pl-8 flex items-center'>
                    <h6>(254) 7123 456 99 </h6>
                </div>
                <div className="min-w-[10%] flex items-center justify-between pl-8">
                    <AiOutlineDelete size={25} color='red' />
                </div>
            </div>
        </div>
    )
}

export default Address