import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs/Blogs';
import FQA from '../FQA/FQA';
import Gallery from '../Gallery/Gallery';
import Professionals from '../Professionals/Professionals/Professionals';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div >
            <Banner />
            <Services />
            <Gallery />
            <FQA />
            <Blogs />
            <Professionals />
        </div>
    );
};

export default Home;