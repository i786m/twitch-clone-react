import React from 'react';
import './styles/Channel.css';

const Channel = ({ avatar, name, followers }) => {
  return (
    <div className='channel'>
      <div className='channel__details'>
        <img src={avatar} alt='avatar' />
        <p>{name}</p>
      </div>
      <p>🔴 {followers}</p>
    </div>
  );
};

export default Channel;
