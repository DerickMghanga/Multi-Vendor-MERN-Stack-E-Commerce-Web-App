import React from 'react'
import styles from '../../../styles/styles'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className={`relative default-bg-img min-h-[70vh] md:min-h-[80vh] w-full bg-no-repeat ${styles.normalFlex}`}>
        <div className={`${styles.section} w-[90%] md:w-[60%]`}>
            <h1 className={`text-[35px] leading-[1.2] md:text-[60px] text-black font-bold capitalize`}>
                Best Collection for <br/> home decoration
            </h1>
            <p className='pt-5 text-[16px] font-[400] text-gray-100'>
                Sed in libero ut nibh placerat accumsan. Fusce ac felis sit amet ligula pharetra condimentum.
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
                Etiam feugiat lorem non metus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero,
                non adipiscing dolor urna a orci. Morbi nec metus.
            </p>
            <Link to="/products" className='inline-block'>
                <div className={`bg-gray-700 w-[140px] h-[40px] flex items-center justify-center rounded-lg mt-5 cursor-pointer shadow-lg`}>
                    <span className='text-gray-300 text-[18px]' >
                        Shop Now
                    </span>

                </div>
            </Link>
        </div>
    </div>
  )
}

export default Hero