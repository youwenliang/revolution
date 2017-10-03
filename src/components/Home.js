import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';

class Home extends Component {
  componentDidMount() {
    document.title = "Za-Tone";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    /* Preload Image */
    var images  = [];

	loadImage(images)
	.then(function (allImgs) {
	  setTimeout(function(){
	  	document.getElementById('loading').classList.add('fade');
	  	document.body.classList.remove('ds');
	  }, 400);
	  console.log(allImgs.length, 'images loaded!', allImgs);
	})
	.catch(function (err) {
	  console.error('One or more images have failed to load :(');
	  console.error(err.errored);
	  console.info('But these loaded fine:');
	  console.info(err.loaded);
	});
  }
  render() {
    return (
      <div>
        <header className="min-vh-100 pv5 df">
        	<div className="center w-100 mw8 ph3 ph5-ns">
            <figure className="center w-100 mw6 h5 bg-near-white mh0 mb4">
              
            </figure>
            <h1 className="tc">This is a header</h1>
            <h3 className="tc">This is a description</h3>
          </div>
        </header>
        <section className="bg-dark-gray">
          <div className="center w-100 mw8 ph3 pv5 tc hideme hidediv">
            <h2 className="white">This is a banner title</h2>
            <h4 className="white">This is a banner description</h4>
          </div>
        </section>
        <section className="bg-near-white pv5">
        	<div className="center w-100 mw8 ph3 ph5-ns tc mb5-l mb0 hideme hidediv">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topics/self-exploration'>
                    <div className="bg-white pa3 h5 df dfc">
                      <figure className="db center w-100 mw4 h4 bg-near-white ma0 br-100"></figure>
                      <h3 className="center ma0 mt3">自我認識</h3>
                      <h5 className="center mv0 ph4">自我認識的簡短介紹，自我認識的簡短介紹．</h5>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topics/gender-equality'>
                    <div className="bg-white pv4 h5 df">
                      <h3>性別平等</h3>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topics/aesthetic-education'>
                    <div className="bg-white pv4 h5 df">
                      <h3>美感教育</h3>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topics/pursue-your-dreams'>
                    <div className="bg-white pv4 h5 df">
                      <h3>追求夢想</h3>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topics/independent-thinking'>
                    <div className="bg-white pv4 h5 df">
                      <h3>獨立思考</h3>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/'>
                    <div className="bg-white pv4 h5 df">
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
