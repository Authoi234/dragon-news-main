import React, { useContext } from 'react';
import { ButtonGroup, ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub, FaWhatsapp, FaTwitch, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from './../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant='outline-dark'> <FaGithub></FaGithub> login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaYoutube></FaYoutube> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div><BrandCarousel></BrandCarousel></div>
        </div>
    );
};

export default RightSideNav;