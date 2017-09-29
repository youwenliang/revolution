import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div>
        <header className="min-vh-100">
        	<div className="center w-100 mw9 ph5 ph3-m">This is a header</div>
        </header>
        <section className="bg-near-white min-vh-100">
        	<div className="center w-100 mw9 ph5 ph3-m">This is a section</div>
        </section>
      </div>
    );
  }
}

export default Home;
