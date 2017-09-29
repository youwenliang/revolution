import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Page404 extends Component {
  render() {
    return (
      <div className="Footer">
        <p>
          Not Found!
          <Link to='/'>Back to Home</Link>
        </p>
      </div>
    );
  }
}

export default Page404;
