// App.js
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Preloader from './components/Preloader/Preloader';
import DmInbox from './pages/dminbox/DmInbox';
import EditProfile from './pages/editprofile/EditProfile';
import Explore from './pages/explore/Explore';
import ForgotPassword from './pages/forgotpassword/ForgotPassword';
import HelpPage from './pages/helpcenter/HelpPage';
import Home from './pages/home/Home';
import Inbox from './pages/inbox/Inbox';
import Login from './pages/login/Login';
import Post from './pages/post/Post';
import Profile from './pages/profile/Profile';
import Services from './pages/services/Services';
import Settings from './pages/settings/Settings';
import Register from './pages/signup/Register';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);


  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="App">
      {/* <Provider store={store}> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/post" element={<Post />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/dminbox" element={<DmInbox />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/ethereon-help-center" element={<HelpPage />} />
        </Routes>
      {/* </Provider> */}
    </div>
  );
}

export default App;
