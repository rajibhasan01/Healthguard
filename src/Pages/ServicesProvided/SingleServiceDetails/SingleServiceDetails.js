import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const SingleServiceDetails = () => {
    const { serviceID } = useParams();
    const [singleItem, setSingleItem] = useState([]);


    useEffect(() => {
        fetch('/database2.json')
            .then(res => res.json())
            .then(data => setSingleItem(data))
            .catch(error => { console.log(error.message) })

    }, []);

    const key = parseInt(serviceID);

    const displayItem = singleItem.filter(item => key === item.id);



    return (
        <div className="container marginTop py-5">
            <div>

                <Card>
                    <h1>loading...</h1>
                    <Card.Img variant="top" src={displayItem[0]?.img} />
                    <Card.Body>
                        <Card.Title>{displayItem[0]?.D_name}</Card.Title>
                        <Card.Text>
                            {displayItem[0]?.description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Price: ${displayItem[0]?.price}</small>
                    </Card.Footer>
                </Card>
            </div>

        </div>
    );
};

export default SingleServiceDetails;