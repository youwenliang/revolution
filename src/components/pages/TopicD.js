import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopicD extends Component {
  componentDidMount() {
    document.title = "topic D";
  }
  render() {
    return (
      <div className="Footer">
        <p>
          I'm a topicD!
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    );
  }
}

export default TopicD;
