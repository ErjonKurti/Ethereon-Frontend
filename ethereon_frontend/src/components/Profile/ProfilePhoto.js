import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';


const ProfilePhoto = () => {
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <Button type="primary">Edit Profile</Button>
        </div>
    );
};

// Assuming you have a specific mount node
const mountNode = document.getElementById('profile-photo-mount');

ReactDOM.render(<ProfilePhoto />, mountNode);

export default ProfilePhoto;