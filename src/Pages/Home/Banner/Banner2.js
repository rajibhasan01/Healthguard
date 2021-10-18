import React from 'react';
import './Banner.css';

const Banner2 = () => {
    return (
        <div className="banner-background">
            <div className="container banner-2 py-5">
                <div className="row my-5">

                    <div className="col-md-6 d-flex justify-content-center align-items-center text-white">
                        <div>
                            <h1 className="text-warning pe-3">Conditions </h1>
                            <h1 className="text-warning text-end pe-3">A-Z</h1>
                        </div>
                        <h4> Choose doctor based on knowledge. Not chance. Find information on symptoms, diagnosis, and treatment options to discuss with your doctor.</h4>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <img src="https://i.ibb.co/6wMFRQp/home-healthy-pic2.png" alt="dr" className="w-75" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;