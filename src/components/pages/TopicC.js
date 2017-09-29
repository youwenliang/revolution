import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicC extends Component {
  componentDidMount() {
    document.title = "topic C";
  }
  render() {
    return (
      <div className="Footer">
        <p>
          I'm a topicC!
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    );
  }
}

export default TopicC;
