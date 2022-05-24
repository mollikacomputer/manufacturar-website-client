import React from 'react';
import Comments from '../../Components/Comments';
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
            <Comments/>
            <Footer/>
        </div>
    );
};

export default Home;