import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentDidMount() {
    document.title = "Home";
  }
  render() {
    return (
      <div>
        <header className="min-vh-100 pv5 df">
        	<div className="center w-100 mw8 ph3 ph5-ns">
            <figure className="w-100 h5 bg-near-white mh0"></figure>
            <h1 className="tc">This is a header</h1>
            <h3 className="tc">This is a description</h3>
          </div>
        </header>
        <section className="bg-dark-gray">
          <div className="center w-100 mw8 ph3 pv4 tc">
            <h2 className="white">This is a banner title</h2>
            <h4 className="white">This is a banner description</h4>
          </div>
        </section>
        <section className="bg-near-white min-vh-100 pv5">
        	<div className="center w-100 mw8 ph3 ph5-ns tc">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div class="mw9 center ph3-ns">
              <div class="cf ph2-ns">
                <div class="fl w-100 w-third-l w-100 pa2 ">
                  <Link to='/self-exploration'>
                    <div class="outline bg-white pv4 h5">
                      <h3>自我認識</h3>
                    </div>
                  </Link>
                </div>
                <div class="fl w-100 w-third-l w-100 pa2 ">
                  <Link to='/gender-equality'>
                    <div class="outline bg-white pv4 h5">
                      <h3>性別平等</h3>
                    </div>
                  </Link>
                </div>
                <div class="fl w-100 w-third-l w-100 pa2 ">
                  <Link to='/aesthetic-education'>
                    <div class="outline bg-white pv4 h5">
                      <h3>美感教育</h3>
                    </div>
                  </Link>
                </div>
                <div class="fl w-100 w-third-l w-100 pa2 ">
                  <Link to='/pursue-your-dreams'>
                    <div class="outline bg-white pv4 h5">
                      <h3>追求夢想</h3>
                    </div>
                  </Link>
                </div>
                <div class="fl w-100 w-third-l w-100 pa2 ">
                  <Link to='/independent-thinking'>
                    <div class="outline bg-white pv4 h5">
                      <h3>獨立思考</h3>
                    </div>
                  </Link>
                </div>
                <div class="fl w-100 w-third-l w-100 pa2 ">
                  <Link to='/'>
                    <div class="outline bg-white pv4 h5">
                      <h3>?</h3>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
