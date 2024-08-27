// components/Modal/ShareModal.js
import React from 'react';
import { FaEnvelope, FaInstagram, FaRegCopy, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import './ShareModal.css';

const ShareModal = ({ isOpen, onClose }) => {
    const profileUrl = 'https://ethereon.netlify.app/profile';

    if (!isOpen) return null;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(profileUrl).then(() => {
            alert('Profile link copied to clipboard!');
        }, (err) => {
            console.error('Failed to copy: ', err);
        });
    };

    return (
        <div className="share-modal-overlay">
            <div className="share-modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Share Profile</h2>
                <div className="share-buttons">
                    <a href={`https://wa.me/?text=${encodeURIComponent(profileUrl)}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="share-icon" />
                        WhatsApp
                    </a>
                    <a href={`https://instagram.com/share?url=${encodeURIComponent(profileUrl)}`} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="share-icon" />
                        Instagram
                    </a>
                    <a href={`sms:?&body=${encodeURIComponent(profileUrl)}`} target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="share-icon" />
                        Messages
                    </a>
                    <a href={`https://www.tiktok.com/share?url=${encodeURIComponent(profileUrl)}`} target="_blank" rel="noopener noreferrer">
                        <FaTiktok className="share-icon" />
                        TikTok
                    </a>
                    <a href={`mailto:?subject=Check out this profile&body=${encodeURIComponent(profileUrl)}`} target="_blank" rel="noopener noreferrer">
                        <FaEnvelope className="share-icon" />
                        Gmail
                    </a>
                    <button className="copy-link-button">
                        <FaRegCopy className="share-icon" />
                        https://ethereon.netlify.app/profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShareModal;
