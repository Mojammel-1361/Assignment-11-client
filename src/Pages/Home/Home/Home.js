import React from 'react';
import useTitle from '../../../Hook/useTitle';
import About from '../About/About';
import Address from '../Address/Address';
import Baner from '../Baner/Baner';
import Services from '../Services/Services';

const Home = () => {
    useTitle("Home");
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