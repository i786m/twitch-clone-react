import React from 'react';
import  './styles/Main.css'
import Profile from './Profile'
import Stream from './Stream'

const Main = () => {
  return (
    <div className='main'>
      <div className="main__stream"><Stream /></div>
      <div className='main__left'><Profile /></div>
      <div className='main__rightPlaceHolder'></div>
    </div>
  );
};

export default Main;
