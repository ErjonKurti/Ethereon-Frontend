import React from 'react';
import './AuthFooter.css';

const AuthFooter = () => {
    return (
        <footer className="auth-footer">
            <div className="footer-content">
                <div className="footer-links">
                    <div className="footer-links-row">
                        <a href="/ethereon-help-center">Ethereon Help Center</a>
                    </div>
                    <div className="footer-links-row1">
                        <span>English (UK)</span>
                        <span>©2024 Ethereon from Meta</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default AuthFooter;
