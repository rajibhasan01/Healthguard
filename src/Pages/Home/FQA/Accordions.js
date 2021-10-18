import React from 'react';
import { Accordion } from 'react-bootstrap';

const Accordions = (props) => {
    const { children } = props;
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header><span className="text-muted pe-2 fs-5">{children}</span> </Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Accordions;