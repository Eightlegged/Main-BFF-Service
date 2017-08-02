import React, { Component } from 'react';

import './Footer.css';
import TeamLogo from '../TeamLogo.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <span>made By:</span>
        <img className="Eightlegged-Logo" src={TeamLogo}/>
      </div>
    );
  }
};

export default Footer;
