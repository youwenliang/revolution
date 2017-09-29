import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicA extends Component {
  componentDidMount() {
    document.title = "topic A";
  }
  render() {
    return (
      <div className="Footer">
        <p>
          I'm a topicA!
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    );
  }
}

export default TopicA;
