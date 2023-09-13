import React from 'react';
import './Home.css';
import tele from '../../img/telecaster2.png';
import gibson from '../../img/335.png';
import strymon from '../../img/strymon.png';
import supro from '../../img/supro.png';

const Home = () => {
  return (
    <div className='container'>
      <div className='main-section'>
        <img src={tele} alt='Telecaster guitar' />
      </div>
      <div className='circle-container'>
        <div className='circle-item'>
          <a href='/guitars'>
            <div
              className='circle guitar'
              style={{ backgroundImage: `url(${gibson})` }}
            ></div>
          </a>
          <p>Guitars</p>
        </div>
        <div className='circle-item'>
          <a href='/amplifiers'>
            <div
              className='circle amplifier'
              style={{ backgroundImage: `url(${supro})` }}
            ></div>
          </a>
          <p>Amplifiers</p>
        </div>
        <div className='circle-item'>
          <a href='/pedals'>
            <div
              className='circle pedal'
              style={{ backgroundImage: `url(${strymon})` }}
            ></div>
          </a>
          <p>Pedals</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
