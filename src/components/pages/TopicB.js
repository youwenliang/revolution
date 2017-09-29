import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicB extends Component {
  componentDidMount() {
    document.title = "topic B";
  }
  render() {
    return (
      <div className="Footer">
        <p>
          I'm a topicB!
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    );
  }
}

export default TopicB;
