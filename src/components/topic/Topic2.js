import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicB extends Component {
  componentDidMount() {
    document.title = "Revolution | topic B";
  }
  render() {
    return (
      <div>
        <section className="bg-near-white min-vh-100 pv3">
          <div className="center w-100 mw8 ph3 ph5-ns">
            <p>This is Topic B</p>
            <Link to='/'>Home</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicB;
