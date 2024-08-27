
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { assets } from '../../assets/assets';

import './ForgotPassword.css';

import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import AuthFooter from '../../components/AuthFooter/AuthFooter';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Password reset link sent to:', email);
    };

    return (
        <div className='content'>
            <div className='forgot-password-container'>
                <div className="flex align-items-center justify-content-center">
                    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                        <div className="text-center mb-5">
                            <img src={assets.logo} alt="hyper" height={50} className="mb-3 logo" />
                            <h2 className="text-600 font-medium line-height-3">Forgot your password?</h2>
                            <p className="text-600 font-medium line-height-3">Enter your email address to reset your password.</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <InputText
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                className="w-full mb-3 padding"
                                required
                            />
                            <Button label="Reset Password" icon="pi pi-envelope" className="w-full padding button0" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='app-download'>
                <div className='app-download' id='app-download'>
                    <p>Get the app</p>
                    <div className='app-download-platform'>
                        <img src={assets.play_store} alt='' />
                        <img src={assets.app_store} alt='' />
                    </div>
                </div>
            </div>
            <AuthFooter />
        </div>
    );
}

export default ForgotPassword;
