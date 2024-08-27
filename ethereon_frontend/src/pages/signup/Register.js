import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { assets } from '../../assets/assets';

import './Register.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

const Register = () => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
    });

    const { first_name, last_name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className='content'>
            <div className='register-container'>
                <div className="flex align-items-center justify-content-center">
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                        <div className="text-center mb-5">
                            <a href="/home"><img src={assets.logo} alt="logo" height={50} className="mb-3 logo" /></a>
                            <h2 className="text-600 font-medium space">Register</h2>
                            <span className="text-600 font-medium line-height-3">Already have an account? &nbsp;</span>
                            <a href="/" className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Go to Login Page!</a>
                        </div>

                        <form onSubmit={onSubmit}>
                            <InputText
                                id="first_name"
                                type="text"
                                placeholder="Your First Name"
                                className="w-full mb-3 padding"
                                name='first_name'
                                value={first_name}
                                onChange={onChange}
                                required
                            />

                            <InputText
                                id="last_name"
                                type="text"
                                placeholder="Your Last Name"
                                className="w-full mb-3 padding"
                                name='last_name'
                                value={last_name}
                                onChange={onChange}
                                required
                            />

                            <InputText
                                id="email"
                                type="email"
                                placeholder="Email address"
                                className="w-full mb-3 padding"
                                name='email'
                                value={email}
                                onChange={onChange}
                                required
                            />

                            <InputText
                                id="password"
                                type="password"
                                placeholder="Password"
                                className="w-full mb-3 padding"
                                name='password'
                                value={password}
                                onChange={onChange}
                                required
                            />

                            <Button
                                label="Register"
                                icon="pi pi-user-plus"
                                className="w-full padding button0"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className='app-download'>
                <p>Get the app</p>
                <div className='app-download-platform'>
                    <img src={assets.play_store} alt='Play Store' />
                    <img src={assets.app_store} alt='App Store' />
                </div>
            </div>
            <AuthFooter />
        </div>
    );
}

export default Register;
