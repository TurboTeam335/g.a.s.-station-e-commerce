import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Import the Link component
import tele from '../../img/telecaster2_high_res.png';
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
          <Link to='/guitars'>  {/* Use Link instead of a */}
            <div
              className='circle guitar'
              style={{ backgroundImage: `url(${gibson})` }}
            ></div>
          </Link>
          <p>Guitars</p>
        </div>
        <div className='circle-item'>
          <Link to='/amplifiers'>  {/* Use Link instead of a */}
            <div
              className='circle amplifier'
              style={{ backgroundImage: `url(${supro})` }}
            ></div>
          </Link>
          <p>Amplifiers</p>
        </div>
        <div className='circle-item'>
          <Link to='/pedals'>  {/* Use Link instead of a */}
            <div
              className='circle pedal'
              style={{ backgroundImage: `url(${strymon})` }}
            ></div>
          </Link>
          <p>Pedals</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
