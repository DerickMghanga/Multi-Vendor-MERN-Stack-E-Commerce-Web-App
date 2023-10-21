import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../../styles/styles';
import {AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineStar} from 'react-icons/ai';
import ProductDetailsCard from '../ProductDetailsCard/ProductDetailsCard.jsx';

const ProductCard = ({productData}) => {

    const [click, setClick] = useState(false);
    const [open, setOpen] = useState(false);

    const d = productData.name;
    const product_name = d.replace(/\s+/g, "-");

  return (
    <>
      <div className='w-full h-[370px] bg-white rounded-lg shadow-sm p-3 relative cursor-pointer'>
          <div className='flex justify-end'>
          </div>

          <Link to={`/product/${product_name}`}>
            <img src={productData.image_Url[0].url} alt=''
              className='w-full h-[170px] object-contain'
            />
          </Link>

          <Link to="/">
            <h5 className={`${styles.shop_name}`}>
              {productData.shop.name}
            </h5>
          </Link>

          <Link to={`/product/${product_name}`}>
            <h4 className='pb-3 font-[500]'>
              {productData.name.length > 40 ? productData.name.slice(0, 40) + '...' : productData.name}
            </h4>

            <div className="flex">
              <AiFillStar className='mr-2 text-[#f6ba00] cursor-pointer' size={20}/>
              <AiFillStar className='mr-2 text-[#f6ba00] cursor-pointer' size={20}/>
              <AiFillStar className='mr-2 text-[#f6ba00] cursor-pointer' size={20}/>
              <AiFillStar className='mr-2 text-[#f6ba00] cursor-pointer' size={20}/>
              <AiOutlineStar className='mr-2 text-[#f6ba00] cursor-pointer' size={20}/>
            </div>

            <div className="py-2 flex items-center justify-between">
              <div className="flex">
                <h5 className={`${styles.productDiscountPrice}`}>
                  {productData.price === 0 ? productData.price + " " : productData.discount_price+ " "}
                  $
                </h5>

                <h4 className={`${styles.price}`}>
                  {productData.price ? productData.price + " $" : null}
                </h4>
              </div>

              <span className='font-[400] text-[17px] text-primary-green'>
                {productData.total_sell +" sold"}
              </span>
            </div>
          </Link>

          {/* Side Options */}
          <div>  
            {   //Add to Favourites
              click ? (
                <AiFillHeart size={23} 
                  className='cursor-pointer absolute right-2 top-5'
                  onClick={() => setClick(!click)}
                  color={click ? "red" : "#333"}
                  title='Remove from Wishlist'
                />
              ) : (
                <AiOutlineHeart size={23} 
                  className='cursor-pointer absolute right-2 top-5'
                  onClick={() => setClick(!click)}
                  color={click ? "red" : "#333"}
                  title='Add to Wishlist'
                />
              )
            }

            <AiOutlineEye size={23}  // Show pop-up of product details
              className='cursor-pointer absolute right-2 top-14'
              onClick={() => setOpen(!open)}
              color='#333'
              title='Quick View'
            />

            <AiOutlineShoppingCart size={23}  //Add to Cart
              className='cursor-pointer absolute right-2 top-24'
              onClick={() => setOpen(!open)}
              color='#444'
              title='Add to cart'
            />

            {
              open ? (
                <ProductDetailsCard setOpen={setOpen}
                  productData={productData}
                />
              ) : null
            }

          </div>

      </div>
    </>
  )
}

export default ProductCard