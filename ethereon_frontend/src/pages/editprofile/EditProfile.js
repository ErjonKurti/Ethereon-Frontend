import React, { useState } from 'react';
import { FaCamera, FaFacebookF, FaGoogle, FaInstagram, FaSave, FaTwitter } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar';
import './EditProfile.css';

const EditProfile = () => {
    const [profileImage, setProfileImage] = useState('/assets/img/pfp.jpg');
    const [coverImage, setCoverImage] = useState('/assets/img/cover.jpg');
    const [username, setUsername] = useState('Ethereon');
    const [bio, setBio] = useState('Discover what\'s new on ethereon.');
    const [email, setEmail] = useState('ethereon@example.com');
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState(true);
    const [linkedAccounts, setLinkedAccounts] = useState({
        facebook: false,
        twitter: false,
        instagram: false,
        google: false
    });

    const handleProfileImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(URL.createObjectURL(file));
        }
    };

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCoverImage(URL.createObjectURL(file));
        }
    };

    const handleSave = () => {
        // Logic to save profile details goes here
        alert('Profile updated!');
    };

    const toggleNotification = () => setNotifications(!notifications);

    const toggleLinkedAccount = (platform) => {
        setLinkedAccounts(prevState => ({ ...prevState, [platform]: !prevState[platform] }));
    };

    return (
        <>
            <Navbar />
            <div className="edit-profile-container">
                <header className="edit-profile-header">
                    <h1>Edit Profile</h1>
                </header>
                <div className="edit-profile-body">
                    <div className="edit-profile-pic">
                        <img src={profileImage} alt="Profile" />
                        <label className="upload-button">
                            <FaCamera />
                            <input type="file" accept="image/*" onChange={handleProfileImageChange} />
                        </label>
                    </div>
                    <div className="edit-profile-info">
                        <label>
                            <span>Username</span>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Bio</span>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Email</span>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label>
                            <span>Password</span>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <div className="edit-profile-notifications">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={toggleNotification}
                                />
                                <span>Enable notifications</span>
                            </label>
                        </div>
                        <div className="edit-profile-linked-accounts">
                            <h2>Linked Accounts</h2>
                            <div className="linked-account">
                                <FaFacebookF className={linkedAccounts.facebook ? 'active' : ''} onClick={() => toggleLinkedAccount('facebook')} />
                                <span>Facebook</span>
                            </div>
                            <div className="linked-account">
                                <FaTwitter className={linkedAccounts.twitter ? 'active' : ''} onClick={() => toggleLinkedAccount('twitter')} />
                                <span>Twitter</span>
                            </div>
                            <div className="linked-account">
                                <FaInstagram className={linkedAccounts.instagram ? 'active' : ''} onClick={() => toggleLinkedAccount('instagram')} />
                                <span>Instagram</span>
                            </div>
                            <div className="linked-account">
                                <FaGoogle className={linkedAccounts.google ? 'active' : ''} onClick={() => toggleLinkedAccount('google')} />
                                <span>Google</span>
                            </div>
                        </div>
                        <button className="save-button" onClick={handleSave}>
                            <FaSave /> Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditProfile;
