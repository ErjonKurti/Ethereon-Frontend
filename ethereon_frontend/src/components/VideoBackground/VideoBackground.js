import { default as React } from 'react';
import { assets } from '../../assets/assets';
import './VideoBackground.css';

const VideoBackground = () => {
    return (
        <div className="video-background-container">
            <div className="video-background">
                <video
                    className='NFS'
                    src={assets.NFS1}
                    autoPlay
                    loop
                    id="NFS"
                />
                <div className="text-overlay">
                    <h2>Our software is still in development...</h2>
                    {/* <h1>Unlock Your Programming Potential</h1>
                    <p>If you don't have Ethereon installed, you can download it here:</p> */}
                </div>
            </div>
        </div>
    );
}

export default VideoBackground;
