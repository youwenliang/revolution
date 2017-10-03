import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="df">
        <div className="center w-100 mw8 ph3 ph5-ns df">
          <Link to='/'><p className="white ph2">This is a footer</p></Link>
          <p className="white ph2">This is social icons</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
