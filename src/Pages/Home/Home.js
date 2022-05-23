import React from 'react';
import Footer from '../../Components/Footer';
// import Banner from '../../Components/Banner';
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
            <Footer/>
        </div>
    );
};

export default Home;