// src/pages/Login.js
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { StoreContext } from '../../Context/StoreContext';

const Login = () => {
    const { setToken, url, loadCartData } = useContext(StoreContext);
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post(`${url}/api/user/login`, data);
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem('token', response.data.token);
            loadCartData({ token: response.data.token });
            toast.success('Login successful!');
            navigate('/'); // Redirect to home or another page after login
        } else {
            toast.error(response.data.message);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>
            <form onSubmit={onLogin} className="bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-700 to-purple-700 opacity-30"></div>
                <h2 className="text-4xl font-bold mb-6 text-white text-center">Login</h2>
                <span className="text-gray-300 mb-4 block text-center">Don't have an account? &nbsp;
                    <a href="/register" className="text-teal-300 hover:text-teal-400 font-semibold">Create today!</a>
                </span>
                <div className="mb-4">
                    <input
                        name='email'
                        onChange={onChangeHandler}
                        value={data.email}
                        type="email"
                        placeholder='Your email'
                        required
                        className="bg-gray-700 text-white shadow-md border rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
                    />
                </div>
                <div className="mb-6">
                    <input
                        name='password'
                        onChange={onChangeHandler}
                        value={data.password}
                        type="password"
                        placeholder='Password'
                        required
                        className="bg-gray-700 text-white shadow-md border rounded-lg w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-300 transition duration-300"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
