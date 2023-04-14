import React, { useState } from 'react';
import './Register.css';
const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmail = (event) => {
        const email = event.target.value;
        // console.log(email);
        setEmail(email);
    }
    // console.log(email);

    const handlePassword = (event) => {
        const password = event.target.value;
        // console.log(password);
        setPassword(password);
    }
    // console.log(password);
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email,password);
    }
    return (
        <div className='register-form'>
            <h1>Pleaser Register.....!!</h1>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmail} type="email" name="email" id="email" placeholder='Your Email' />
                <br />
                <input onBlur={handlePassword} type="password" name="password" id="password" placeholder='Your Password'/>
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;