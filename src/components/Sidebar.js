import React from 'react';
import Channel from './Channel';
import './styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h5>followed channels</h5>
        <Channel
          avatar='https://media-exp1.licdn.com/dms/image/C4D03AQEcprotW7-6vA/profile-displayphoto-shrink_200_200/0/1603670661020?e=1628726400&v=beta&t=6SAHwj7DdEEQaOnpWEkQiNQOVV6HESITS2Pk44n4W0Q'
          name='Imran Mohamed'
          followers='786k'
        />
        <Channel
          avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/ed949a09-b742-4684-9b3d-8af1978e1ff0-profile_image-70x70.png'
          name='Learn WithLeon'
          followers='7.2k'
        />
        <h5>recommended channels</h5>
        <Channel
          avatar='https://media-exp1.licdn.com/dms/image/C4D03AQEcprotW7-6vA/profile-displayphoto-shrink_200_200/0/1603670661020?e=1628726400&v=beta&t=6SAHwj7DdEEQaOnpWEkQiNQOVV6HESITS2Pk44n4W0Q'
          name='Imran Mohamed'
          followers='786k'
        />
        <p className='sidebar__topShowMore'>Show more</p>
      </div>
      <div className='sidebar__bottom'>
        <div className='sidebar__bottomContainer'>
          <i className='fas fa-search'></i>
          <input type='text' placeholder='Search...' />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
