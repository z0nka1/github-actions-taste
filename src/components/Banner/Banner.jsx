import React from 'react';
import './Banner.css';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner3 from '../../assets/banner3.png';
import agent from '../../assets/agent.png';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner_container">
        <div>
          <img src={agent} alt="agent" />
        </div>
        <div>
          <img src={banner1} alt="img1" />
          <img src={banner2} alt="img2" />
          <img src={banner3} alt="img3" />
        </div>
      </div>
    );
  }
}

export default Banner;
