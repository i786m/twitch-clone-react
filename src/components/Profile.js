import React from 'react';
import './styles/Profile.css';

const Profile = () => {
  return (
    <div className='profile'>
      <div className='profile__topLeft'>
        <img
          src='https://media-exp1.licdn.com/dms/image/C4D03AQEcprotW7-6vA/profile-displayphoto-shrink_200_200/0/1603670661020?e=1628726400&v=beta&t=6SAHwj7DdEEQaOnpWEkQiNQOVV6HESITS2Pk44n4W0Q'
          alt='Imran'
        />
        <div className='profile_topLeftDetails'>
          <h1>Imran Mohamed</h1>
          <h3>786k followers</h3>
        </div>
      </div>
      <div className='profile__topRight'>
        <i className='fas fa-heart graybg'></i>
        <i className='fas fa-bell graybg'></i>
        <i className='fas fa-ellipsis-v'></i>
      </div>
      <div className='profile__menu'>
        <h2 className='active'>Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className='fas fa-arrow-up'></i>
        </h2>
        <h2>Chat</h2>
      </div>
    </div>
  );
};

export default Profile;
