import React, { useState } from 'react'
import { productData } from '../../static/data'
import { AiOutlineClose, AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const MobileSidebar = ({ setOpen }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState("");


  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // filter word typed from dummy data(static>data)
    const filteredProducts = productData && productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchData(filteredProducts);
  }

  return (
    <div className='fixed w-full bg-[#00000034] h-full z-50 top-0 left-0'>
      <div className='fixed w-[74%] bg-gray-200 h-screen top-0 left-0'>
        <div className='w-full flex justify-between px-2'>
          <div className='relative mt-5 ml-2'>
            <AiOutlineHeart size={25} color="#000" />
            <span className='absolute text-[12px] text-center font-bold leading-tight right-0 -top-0.5 rounded-full bg-sky-200 w-4 h-4 p-0 m-0'>
              0
            </span>
          </div>

          <div className='mt-5 mr-1'>
            <AiOutlineClose size={25}
              onClick={() => setOpen(false)}
            />
          </div>
        </div>

        {/* MOBILE SEARCH BAR */}
        <div className='relative my-6 w-[96%] m-auto h-[40px]'>
          <input type="text" placeholder='Search Product...'
            className='h-[40px] w-full px-1 border-[1.5px] border-lime-600 rounded-md outline-none'
            value={searchTerm} onChange={handleSearchChange}
          />

          <AiOutlineSearch size={25} className='absolute right-2 top-1.5 cursor-pointer' />

          {
            searchData && searchData.length !== 0 ? (
              <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                {searchData && searchData.map((i, index) => {
                  const d = i.name;

                  const Product_name = d.replace(/\s+/g, "-");  //replace all white-spaces with "-"

                  return (
                    <Link to={`/product/${Product_name}`} key={index}>
                      <div className="w-full flex items-start py-3 cursor-pointer">
                        <img src={i.image_Url[0].url} alt="product-image01"
                          className='w-[40px] h-[40px] mr-[10px]'
                        />

                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : null
          }
        </div>
      </div>
    </div>
  )
}

export default MobileSidebar