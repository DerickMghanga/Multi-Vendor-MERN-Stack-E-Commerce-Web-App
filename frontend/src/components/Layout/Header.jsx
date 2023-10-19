import React, { useState } from 'react'
import styles from '../../styles/styles'
import { Link } from 'react-router-dom'
import {productData, categoriesData} from '../../static/data'
import { AiOutlineHeart, AiOutlineSearch } from 'react-icons/ai'
import {IoIosArrowForward, IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import {BiMenuAltLeft} from 'react-icons/bi'
import DropDown from './DropDown'
import Navbar from './Navbar'

const Header = ({activeHeading}) => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchData, setSearchData] = useState("");
    const [active, setActive] = useState(false);
    const [dropDown ,setDropDown] = useState(false);

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        // filter word typed from dummy data(static>data)
        const filteredProducts = productData && productData.filter((product) => 
            product.name.toLowerCase().includes(term.toLowerCase())
        );

        setSearchData(filteredProducts);
    };

    //active navBar after scroll
    window.addEventListener("scroll", () => {
        if(window.screenY > 70) {
            setActive(true);
        } else {
            setActive(false);
        }
    })

  return (
    <>
        <div className={`${styles.section}`}>
            <div className="hidden md:h-[50px] md:my-[18px] md:flex items-center justify-between">
                <div className='w-9 h-9'>
                    <Link to="/">
                        <img src="/shopify.png" alt="logo"/>
                    </Link>
                </div>

                {/* SEARCH BOX */}
                <div className=" w-[50%] relative">
                    <input type="text" placeholder='Search Product...'
                        value={searchTerm} onChange={handleSearchChange}
                        className='h-[35px] w-full px-2 text-sm border border-primary-green rounded-full'
                    />

                    <AiOutlineSearch size={25} className='absolute right-2 top-1.5 cursor-pointer' />

                    {
                        searchData && searchData.length !== 0 ? (
                            <div className='absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4'>
                                {searchData && searchData.map((i, index) => {
                                    const d = i.name;

                                    const Product_name = d.replace(/\s+/g, "-");  //replace all white-spaces with "-"

                                    return(
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

                <div>
                    <Link to="/seller">
                        <h1 className='text-primary-green bg-gray-100 flex items-center border border-primary-green p-1 rounded-full '>
                            Become a seller <IoIosArrowForward size={18} className='ml-1'/>
                        </h1>
                    </Link>
                </div>

            </div>
      
        </div>

        <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition hidden md:flex items-center justify-between w-full bg-lime-600 h-[70px]`}>
            <div className={`${styles.section} relative ${styles.normalFlex} justify-between`}>
                {/* CATEGORIES */}
                <div>
                    <div className='relative h-[60px] mt-[10px] w-[270px] hidden lg:block'>
                        <BiMenuAltLeft size={25} className='absolute top-3 left-2' />

                        <button className='h-full w-full flex justify-between items-center pl-14 bg-white text-md select-none rounded-t-lg'>
                            All Categories
                        </button>

                        <div className='absolute right-3 top-4 cursor-pointer animate-bounce'
                            onClick={() => setDropDown(!dropDown)}
                        >
                            {dropDown ? <IoIosArrowUp size={22} /> : <IoIosArrowDown size={22}/>}
                        </div>

                        {
                            dropDown ? (
                                <DropDown
                                    categoriesData = {categoriesData}
                                    setDropDown = {setDropDown}
                                 />
                            ) : null
                        }

                    
                    </div>
                </div>

                {/* NavItems */}
                <div className={`${styles.normalFlex}`}>
                        <Navbar active={activeHeading} />
                </div>

                <div>
                    <div className={`${styles.normalFlex}`}>
                        <div className='relative cursor-pointer mr-[15px]'>
                            <AiOutlineHeart size={26}
                                className=''
                            />

                            <span className='absolute text-[12px] text-center leading-tight right-0 -top-0.5 rounded-full bg-white w-4 h-4 p-0 m-0'>
                                0
                            </span>
                        </div>
                    </div>
                </div> 

            </div>
        </div>
    </>
    
  )
}

export default Header