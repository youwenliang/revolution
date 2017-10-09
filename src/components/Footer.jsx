import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="df">
        <div className="center w-100 mw8 ph5-l ph3 df">
          <Link to='/'><p className="white ph2">這是一個首頁圖</p></Link>
          <p className="white ph2">這裡可以放啥呢</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
