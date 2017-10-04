import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  socialShare = () => {
  	console.log(window.location.href);
  }
  
  render() {
    return (
      <div className="App">
        <div id="loading"></div>
        <div className="br-100 db fixed bg-black cp df dfjc" id="fb-share" onClick={this.socialShare}>
        	<FontAwesome name='facebook' className="white" />
        </div>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
