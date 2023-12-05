import React from 'react'
import { AiOutlineCreditCard, AiOutlineLogout, AiOutlineMessage } from 'react-icons/ai';
import { MdOutlineTrackChanges } from 'react-icons/md';
import { TbAddressBook } from 'react-icons/tb';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import { RxPerson } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { server } from '../../server';
import {toast} from "react-toastify";

const ProfileSideBar = ({ active, setActive }) => {

    const navigate = useNavigate();

    const logOutHandler = () => {
        axios.get(`${server}/user/logout`, {withCredentials: true})
        .then((res)=> {
            toast.success(res.data.message);
            window.location.reload(true);
            navigate("/login");
        }).catch((err)=>{
            console.log(err.response.data.message);
        })
    }

    return (
        <div className='w-full bg-white shadow-sm rounded-[10px] p-4'>
            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> setActive(1)}
            >
                <RxPerson size={22} color={active === 1 ? "green":""} />
                <span className={`pl-3 ${active === 1 ? "text-lime-600 font-semibold":""}`}>
                    Profile
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> setActive(2)}
            >
                <HiOutlineShoppingBag size={22} color={active === 2 ? "green":""} />
                <span className={`pl-3 ${active === 2 ? "text-lime-600 font-semibold":""}`}>
                    Orders
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> setActive(3)}
            >
                <HiOutlineReceiptRefund size={22} color={active === 3 ? "green":""} />
                <span className={`pl-3 ${active === 3 ? "text-lime-600 font-semibold":""}`}>
                    Refunds
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> {
                    setActive(4);
                    navigate('/inbox');
                }}
            >
                <AiOutlineMessage size={22} color={active === 4 ? "green":""} />
                <span className={`pl-3 ${active === 4 ? "text-lime-600 font-semibold":""}`}>
                    Inbox
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> setActive(5)}
            >
                <MdOutlineTrackChanges size={22} color={active === 5 ? "green":""} />
                <span className={`pl-3 ${active === 5 ? "text-lime-600 font-semibold":""}`}>
                    Track Order
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> setActive(6)}
            >
                <AiOutlineCreditCard size={22} color={active === 6 ? "green":""} />
                <span className={`pl-3 ${active === 6 ? "text-lime-600 font-semibold":""}`}>
                    Payment Methods
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> setActive(7)}
            >
                <TbAddressBook size={22} color={active === 7 ? "green":""} />
                <span className={`pl-3 ${active === 7 ? "text-lime-600 font-semibold":""}`}>
                    Address
                </span>
            </div>

            <div className='flex items-center cursor-pointer w-full mb-8'
                onClick={()=> logOutHandler()}
            >
                <AiOutlineLogout size={22} color={active === 8 ? "red":""} />
                <span className={`pl-3 ${active === 8 ? "text-lime-600 font-semibold":""}`}>
                    Log out
                </span>
            </div>
        </div>
    )
}

export default ProfileSideBar