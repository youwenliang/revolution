import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class App extends Component {
  socialShare = () => {
  	console.log(window.location.href.replace('/#',''));
  }
  
  render() {
    return (
      <div className="App">
        <div id="loading"></div>
        <div className="container fixed">
          <Link to='/'>
            <figure className="db cp df dfjc" id="za-share">
              <img src="/images/index_za_logo.svg" height="28px" />
            </figure>
          </Link>
          <div className="br-100 db cp df dfjc" id="fb-share" onClick={this.socialShare}>
          	<FontAwesome name='facebook' className="white" />
          </div>
        </div>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
