import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({productData}) => {

    const [click, setClick] = useState();

  return (
    <div className='w-full h-[370px bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
        <div className='flex justify-end'>

        </div>

        <Link to={`/product/${productData.name}`}>
            
        </Link>
    </div>
  )
}

export default ProductCard