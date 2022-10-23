import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const RightSideNav = () => {
    return (
        <div>
            <h2>Login With</h2>
            <ButtonGroup vertical>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaGoogle></FaGoogle> Google</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaGithub></FaGithub> Github</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaFacebook></FaFacebook> Facebook</Button>
            <h3>Find us on</h3>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaFacebook></FaFacebook> Facebook</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaInstagram></FaInstagram> Instagram</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaTwitter></FaTwitter> Twitter</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaWhatsapp></FaWhatsapp> Whats aap</Button>
            <Button className='mb-2 rounded-5' variant="outline-info"><FaYoutube></FaYoutube> Youtube</Button>
            </ButtonGroup>
        </div>
    );
};

export default RightSideNav;