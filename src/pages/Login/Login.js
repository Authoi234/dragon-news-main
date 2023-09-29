import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('')
    const { signIn } = useContext(AuthContext)

    const navigate = useNavigate('/')

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('')
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <Form onSubmit={handleSubmit}>
            <h1 className='text-danger'>Welcome Back!</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className='text-danger'>{error}</Form.Text>
            <Form.Group>
                <Form.Text className=''>Don't have an account? Please <Link to={'/register'}>Register</Link></Form.Text>
            </Form.Group>
        </Form>
    );
};

export default Login;