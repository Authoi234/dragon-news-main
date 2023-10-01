import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, photoURL, name, email);
        createUser(email, password)
        .then(res => {
                const user = res.user;
                console.log(user);
                setError('');
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification()
                form.reset();
                toast.success('please verify your email adress berfore login')
            })
            .catch(e => {
                setError(e.message)
            })
        }
    
        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: {name},
                photoURL: {photoURL}
            }
            updateUserProfile(profile)
            .then(() => {})
            .catch(e => console.error(e.message))
            
        }

        const handleEmailVerification = () => {
            verifyEmail()
            .then(() => {})
            .catch(e => console.error(e))
        }

        const handleAccepted = event => {
            setAccepted(event.target.checked);
        }
        return (
            <Form onSubmit={handleSubmit}>
            <h1 className='text-danger'>Welcome! Please Register</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo url</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter your photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                type="checkbox" 
                onClick={handleAccepted}
                label={<>Accept our <Link to={'/terms'}>terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className='text-danger'>
                {error}
            </Form.Text>
            <Form.Group>
                <Form.Text className=''>Already have an account? Please <Link to={'/login'}>Login</Link></Form.Text>
            </Form.Group>
        </Form>
    );
};

export default Register;