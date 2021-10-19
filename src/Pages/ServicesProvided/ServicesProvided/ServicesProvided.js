import React from 'react';
import Services from '../../Home/Services/Services/Services';
import ServiceBanner from '../ServiceBanner/ServiceBanner';

const ServicesProvided = () => {
    return (
        <div className="marginTop">
            <ServiceBanner />
            <Services />
        </div>
    );
};

export default ServicesProvided;