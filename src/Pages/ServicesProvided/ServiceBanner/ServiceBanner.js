import React from 'react';
import './ServiceBanner.css';

const ServiceBanner = () => {
    return (
        <div className="background-service">
            <div className="container banner-2 py-3">
                <div className="row my-5">

                    <div className="col-md-6 d-flex justify-content-center align-items-center text-secondary">
                        <div>
                            <h1 className="text-warning pe-3">Services </h1>
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

export default ServiceBanner;