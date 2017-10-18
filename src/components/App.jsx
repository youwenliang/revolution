/*global FB*/
import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class App extends Component {
  socialShare = () => {
    var link = window.location.href.replace('/#','');
  	console.log(link);
    if (typeof FB !== 'undefined') {
      FB.ui({
        method: 'share',
        href: link,
      }, function(response){});
    }
  }
  
  render() {
    return (
      <div className="App">
        <div id="loading"></div>
        <div className="container fixed fe">
          <div className="br-100 db cp df dfjc" id="fb-share" onClick={this.socialShare}>
          	<FontAwesome name='facebook' className="white" alt="Share to Facebook" title="Share to Facebook" />
          </div>
        </div>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
