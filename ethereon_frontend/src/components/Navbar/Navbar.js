import { faHome, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FaEnvelope, FaShieldAlt } from 'react-icons/fa';
import { assets } from '../../assets/assets';

import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <a className="navbar-brand" href="/home">
                    <img src={assets.logo} alt='Ethereon Logo' className='logo' />
                </a>
                <ul className="navbar-menu">
                    <li className="nav-item"><a className="nav-link" href="/home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="/explore">Explore</a></li>
                    <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
                    <li className="nav-item"><a className="nav-link" href="/ethereon-help-center">Ethereon Help Center</a></li>
                </ul>
                <div className="navbar-right">
                    <a className="nav-link" href="/ethereon-help-center">
                        <FaShieldAlt />
                    </a>
                    <a className="nav-link" href="/inbox">
                        <FaEnvelope />
                    </a>
                    <div className="navbar-profile">
                        <a className="navbar-brand" href="/settings">
                            <img
                                src={assets.settings}
                                alt="Profile"
                                style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                            />
                        </a>
                    </div>
                </div>
            </nav>

            <nav className="mobile-navbar">
                <a href="/home"><FontAwesomeIcon icon={faHome} /></a>
                <a href="/explore"><FontAwesomeIcon icon={faSearch} /></a>
                <a href="/services"><img src={assets.concept_2} alt='' className='spin bold-image' style={{ width: '35px', height: '30px', }} /></a>
                <a href="/post"><FontAwesomeIcon icon={faPlus} /></a>
                <a href="/profile"><FontAwesomeIcon icon={faUser} /></a>
            </nav>
        </>
    );
};

export default Navbar;
