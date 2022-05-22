import React from 'react';
import Banner from '../../Components/Banner';
import Products from '../../Components/Products';
import CarousalBanner from './CarousalBanner';

const Home = () => {
    return (
        <div>
            <CarousalBanner/>
            <Banner/>
            <Products/>
        </div>
    );
};

export default Home;