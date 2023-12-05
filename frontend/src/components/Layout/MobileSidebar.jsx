import React from 'react'
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai'

const MobileSidebar = ({setOpen}) => {
  return (
    <div className='fixed w-full bg-[#0000005f] h-full z-20 top-0 left-0'>
        <div className='fixed w-[78%] bg-gray-200 h-screen top-0 left-0'>
            <div className='w-full flex justify-between px-3 pt-[52px]'>
                <AiOutlineHeart size={26} color="#000" />

                <AiOutlineClose size={24} />
            </div>
        </div>
    </div>
  )
}

export default MobileSidebar