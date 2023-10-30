import React from 'react'
import styles from '../../styles/styles'
import CountDown from './CountDown.jsx';

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset" : "mb-12" } md:flex p-2`}>
        <div className="w-full md:w-[50%] m-auto">
            <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="feutured-product" />
        </div>

        <div className='w-full md:w-[50%] flex flex-col justify-center'>
            <h2 className={`${styles.productTitle}`}>
                iPhone 14 pro max 8GB RAM/256 GB
            </h2>

            <hr className='my-3 border border-gray-300'/>

            <p>
                Nunc nulla. Aenean massa. Ut tincidunt tincidunt erat.
                Phasellus accumsan cursus velit. Nam commodo suscipit quam. Fusce fermentum.
                Praesent adipiscing. Donec sodales sagittis magna. Nam pretium turpis et arcu.
                Vivamus in erat ut urna cursus vestibulum. Phasellus dolor. Etiam sollicitudin,
                ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, quis venenatis ante odio sit amet eros.
            </p>

            <div className="flex py-2 justify-between">
                <div className='flex'>
                    <h5 className='font-[500] text-[17px] text-[#d55b45] pr-3 line-through'>
                        1099 $
                    </h5>

                    <h5 className='font-bold text-[20px] text-black font-roboto'>
                        999 $
                    </h5>
                </div>

                <span className='pr-3 font-normal text-[17px] text-primary-green'>
                    120 Sold
                </span>
            </div>

            <CountDown/>

        </div>
    </div>
  )
}

export default EventCard