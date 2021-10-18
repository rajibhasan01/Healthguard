import React from 'react';
import Banner from '../Banner/Banner';
import FQA from '../FQA/FQA';
import Gallery from '../Gallery/Gallery';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div >
            <Banner />
            <Services />
            <Gallery />
            <FQA />
        </div>
    );
};

export default Home;