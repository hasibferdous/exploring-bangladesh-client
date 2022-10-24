import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {FaEye, FaRegBookmark, FaShareAlt, FaStar} from 'react-icons/fa'

const SpotSummaryCard = ({spots}) => {
    const {_id, title, author, details, image_url, rating, total_view} = spots;
    //console.log(spots);

    return (
        <Card className="text-center mb-4">
        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
                <Image
                    roundedCircle
                    className='me-1'
                    src={author.img}
                    style={{height: '60px'}}
                ></Image>
                <div>
                    <p className='mb-0 mt-2'>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div>
                <FaRegBookmark></FaRegBookmark>
                <FaShareAlt></FaShareAlt>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {
                details.length > 250 ?
                <p>{details.slice(0, 250) + '...'} <Link to={`/spots/${_id}`}>See More</Link></p>
                : <p>{details}</p>
            }
            </Card.Text>
         
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
            <div>
                <FaStar className='text-warning me-2'></FaStar>
                <span>{rating?.number}</span>
            </div>
            <div>
                <FaEye className='me-2'></FaEye>
                <span>{total_view}</span>
            </div>
        </Card.Footer>
      </Card>
    );
};

export default SpotSummaryCard;