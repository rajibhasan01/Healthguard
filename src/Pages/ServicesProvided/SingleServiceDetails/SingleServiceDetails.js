import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleServiceDetails = () => {
    const { serviceID } = useParams();
    const [singleItem, setSingleItem] = useState({});


    useEffect(() => {
        fetch('../../database2.json')
            .then(res => res.json())
            .then(data => setSingleItem(data))
            .catch(error => { console.log(error.message) })

    }, []);
    console.log(singleItem);
    let sitem;
    // for (const item of singleItem) {
    //     if (serviceID == item.id) {
    //         sitem = item;
    //         console.log(sitem);
    //     }
    // }

    return (
        <div className="container marginTop py-5">
            <div>

                <Card>
                    <h1>loading...</h1>
                    <Card.Img variant="top" src={sitem?.img} />
                    <Card.Body>
                        <Card.Title>{sitem?.D_name}</Card.Title>
                        <Card.Text>
                            {sitem?.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Price: ${sitem?.price}</small>
                    </Card.Footer>
                </Card>
            </div>

        </div>
    );
};

export default SingleServiceDetails;