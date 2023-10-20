import React from 'react'
import Header from '../components/Layout/Header';
import Hero from '../components/Root/Hero/Hero';
import Categories from '../components/Root/Categories/Categories';
import BestDeals from '../components/Root/BestDeals/BestDeals';


const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero />
        <Categories />
        <BestDeals />

    </div>
  )
}

export default HomePage