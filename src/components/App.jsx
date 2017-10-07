import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

class App extends Component {
  socialShare = () => {
  	console.log(window.location.href);
  }
  
  render() {
    return (
      <div className="App">
        <div id="loading"></div>
        <Link to='/'><figure className="db fixed bg-silver cp df dfjc" id="za-share"></figure></Link>
        <div className="br-100 db fixed bg-silver cp df dfjc" id="fb-share" onClick={this.socialShare}>
        	<FontAwesome name='facebook' className="white" />
        </div>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
