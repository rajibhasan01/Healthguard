import React from 'react';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Blogs from '../Blogs/Blogs/Blogs';
import FQA from '../FQA/FQA';
import Gallery from '../Gallery/Gallery';
import Locations from '../OurLocation/Locations/Locations';
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
            <Banner2 />
            <Locations />
        </div>
    );
};

export default Home;