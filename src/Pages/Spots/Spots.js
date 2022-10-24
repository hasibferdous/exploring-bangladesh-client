import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Spots = () => {
    const spots = useLoaderData();
    const {title, details, image_url} = spots;
    return (
        <Card className='mt-5'>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
           {details}
          </Card.Text>
          <Button variant="primary">Send Feedback</Button>
        </Card.Body>
      </Card>
    );
};

export default Spots;