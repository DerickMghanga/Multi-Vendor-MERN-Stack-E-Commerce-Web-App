import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { footerProductLinks, footerSupportLinks, footercompanyLinks } from '../../static/data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-200'>
        <div className='md:flex md:justify-between md:items-center px-4 sm:px-12 bg-color text-white '>
            <h1 className='lg:text-3xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'>
                <span className='text-black mr-2'>
                    Subscribe
                </span> 
                 to get alerts <br/> on events and new offers.
            </h1>

            <div>
                <input type='text' required placeholder='Enter your email...'
                    className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 px-3 py-2 rounded-lg focus:outline-none'
                />
                <button className='bg-green-900 hover:bg-teal-600 duration-300 px-4 py-1.5 mb-3 rounded-md w-full sm:w-auto'>
                    Subscribe
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 px-5 sm:px-8 py-8 sm:text-center">
            <ul className='px-5 text-center sm:text-start flex sm:block flex-col items-center'>
                <Link to='/'>
                    <img src="/shopify.png" alt="logo"
                        className='w-10 h-10'
                    />
                </Link>

                <br/>
                <p className='text-gray-600'>The home elements needed to create beautiful products.</p>

                <div className="flex flex-items-center mt-[15px] gap-3">
                    <AiFillFacebook size={25} className='cursor-pointer' />
                    <AiOutlineTwitter size={25} className='cursor-pointer' />
                    <AiFillInstagram size={25} className='cursor-pointer' />
                    <AiFillYoutube size={25} className='cursor-pointer' />
                </div>
            </ul>

            <ul className="text-center sm:text-start">
                <h1 className='mb-2 font-semibold'>Company</h1>
                {footerProductLinks.map((link) => (
                    <li className='text-gray-600 my-0.5 hover:text-sky-600 hover:underline' key={link.name}>
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))} 
            </ul>

            <ul className="text-center sm:text-start">
                <h1 className='mb-2 font-semibold'>Shop</h1>
                {footercompanyLinks.map((link) => (
                    <li className='text-gray-600 my-0.5 hover:text-sky-600 hover:underline' key={link.name}>
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))} 
            </ul>

            <ul className="text-center sm:text-start">
                <h1 className='mb-2 font-semibold'>Support</h1>
                {footerSupportLinks.map((link) => (
                    <li className='text-gray-600 my-0.5 hover:text-sky-600 hover:underline' key={link.name}>
                        <Link to={link.link}>
                            {link.name}
                        </Link>
                    </li>
                ))} 
            </ul>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 px-5 sm:px-8 text-gray-500 text-sm pb-8'>
            <span>© 2023 Ecommerce. All rights reserved.</span>
            <span>Terms & Privacy Policy.</span>
            <div className='flex sm:block items-center w-full justify-center'>
                <img src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75" 
                    alt="payments"
                />
            </div>
        </div>
    </div>
  )
}

export default Footer