import React from 'react'
import Header from '../components/Layout/Header';
import Hero from '../components/Root/Hero/Hero';
import Categories from '../components/Root/Categories/Categories';
import BestDeals from '../components/Root/BestDeals/BestDeals';
import FeaturedProduct from '../components/Root/FeaturedProduct/FeaturedProduct';
import Events from '../components/Events/Events';
import Sponsored from '../components/Root/Sponsored/Sponsored';


const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero />
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
    </div>
  )
}

export default HomePage