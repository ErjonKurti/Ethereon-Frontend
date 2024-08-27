import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const [isFrontCamera, setIsFrontCamera] = useState(false);
    const [brightness, setBrightness] = useState(100);
    const [hasPermission, setHasPermission] = useState(null);
    const videoRef = useRef(null);

    const toggleCamera = () => {
        setIsFrontCamera(!isFrontCamera);
    };

    const handleBrightnessChange = (e) => {
        setBrightness(e.target.value);
    };

    const handleCapture = () => {
        if (videoRef.current) {
            const canvas = document.createElement('canvas');
            canvas.width = videoRef.current.videoWidth;
            canvas.height = videoRef.current.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/png');
            console.log('Captured image:', dataURL);
        }
    };

    useEffect(() => {
        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: isFrontCamera ? 'user' : 'environment' }
                });
                setHasPermission(true);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                setHasPermission(false);
                console.error('Error accessing camera:', err);
            }
        };

        getCameraStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject;
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [isFrontCamera]);

    return (
        <div className="post-container">
            <div className="top-bar">
                <Link to="/home" className="top-button">&larr;</Link>
                <span className="top-title">Create Post</span>
            </div>
            <div className="camera-view" style={{ filter: `brightness(${brightness}%)`, backgroundColor: hasPermission ? 'black' : '#333' }}>
                {hasPermission === false ? (
                    <div className="permission-message">Please allow camera access.</div>
                ) : (
                    <>
                        <video
                            autoPlay
                            playsInline
                            className="video-feed"
                            ref={videoRef}
                        />
                        <button className="camera-toggle" onClick={toggleCamera}>
                            <i className="fas fa-camera"></i>
                        </button>
                    </>
                )}
            </div>
            <div className="controls">
                <div className="slider-container">
                    <label htmlFor="brightness" className="slider-label">Brightness</label>
                    <input
                        id="brightness"
                        type="range"
                        min="0"
                        max="200"
                        value={brightness}
                        onChange={handleBrightnessChange}
                        className="slider"
                    />
                </div>
            </div>
            <div className="bottom-bar">
                <button className="bottom-button">Gallery</button>
                <button className="capture-button" onClick={handleCapture}></button>
                <button className="bottom-button">Filters</button>
                <div className="post-options">
                    <button className="post-option" onClick={() => console.log('Story')}>Story</button>
                    <button className="post-option" onClick={() => console.log('Post')}>Post</button>
                    <button className="post-option" onClick={() => console.log('Reel')}>Reel</button>
                    <button className="post-option" onClick={() => console.log('Live')}>Live</button>
                </div>
            </div>
        </div>
    );
};

export default Post;
