import React from 'react';
import Banner from '../../Components/Banner';
import Products from '../../Components/Products';
import Status from '../../Components/Status';
import CarousalBanner from './CarousalBanner';

const Home = () => {
    return (
        <div>
            <CarousalBanner/>
            {/* <Banner/> */}
            <Status/>
            <Products/>
        </div>
    );
};

export default Home;