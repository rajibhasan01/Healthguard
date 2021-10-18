import React from 'react';
import Accordions from './Accordions';
import './FAQ.css';


const FQA = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="pe-md-3">
                        <img className="w-100" src="https://i.ibb.co/MB0wsbh/h7-img-15.jpg" alt="pic" />
                    </div>


                </div>

                <div className="col-12 col-md-6 my-3 accordion-box">
                    <Accordions>
                        Assess your general health and the way your organs function by doing laboratory tests.
                    </Accordions>
                    <br />

                    <Accordions>
                        Our specialists will help you understand your results.
                    </Accordions>
                    <br />
                    <Accordions>
                        Carefully run laboratory tests.
                    </Accordions>

                    <br />
                    <Accordions>
                        Innovative & highly effective care for all patients.
                    </Accordions>



                </div>
            </div>
        </div>

    );
};

export default FQA;