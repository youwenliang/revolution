import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicA extends Component {
  componentDidMount() {
    document.title = "topic A";
  }
  render() {
    return (
      <div>
        <section className="bg-near-white min-vh-100 pv3">
          <div className="center w-100 mw8 ph3 ph5-ns">
            <p>This is Topic A</p>
            <Link to='/'>Home</Link>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
