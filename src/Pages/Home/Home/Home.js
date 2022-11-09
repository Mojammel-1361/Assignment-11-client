import React from 'react';
import About from '../About/About';
import Address from '../Address/Address';
import Baner from '../Baner/Baner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Baner></Baner>
            <About></About>
            <Services></Services>
            <Address></Address>
        </div>
    );
};

export default Home;