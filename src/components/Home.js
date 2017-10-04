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
            <h3 className="ma0 tc">2017</h3>
            <figure className="center w-100 mw6 h5 bg-near-white mh0 mb4">
              
            </figure>
            <h1 className="ma0 tc">雜學起義</h1>
            <h3 className="ma0 tc">This is a description</h3>
          </div>
        </header>
        <section className="bg-dark-gray">
          <div className="center w-100 mw8 ph3 pv5 tc hideme hidediv">
            <h3 className="ma0 white">This is a banner title</h3>
            <h5 className="ma0 white">This is a banner description</h5>
          </div>
        </section>
        <section className="bg-near-white pv5">
        	<div className="center w-100 mw8 ph3 ph5-ns tc mb5-l mb0 hideme hidediv">
            <h2 className="ma0">This is a section title</h2>
            <h4 className="ma0">This is a section description</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topic/self-exploration'>
                    <div className="bg-white pa3 h5 df dfc dfjc br4 topic">
                      <figure className="db center w-100 mw4 h4 bg-near-white ma0 br-100"></figure>
                      <h5 className="center ma0 mt3">自我認識</h5>
                      <h6 className="center mv0 ph4">自我認識的簡短介紹，自我認識的簡短介紹．</h6>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topic/gender-equality'>
                    <div className="bg-white pa3 h5 df dfc dfjc br4 topic">
                      <figure className="db center w-100 mw4 h4 bg-near-white ma0 br-100"></figure>
                      <h5 className="center ma0 mt3">性別平等</h5>
                      <h6 className="center mv0 ph4">性別平等的簡短介紹，性別平等的簡短介紹．</h6>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topic/aesthetic-education'>
                    <div className="bg-white pa3 h5 df dfc dfjc br4 topic">
                      <figure className="db center w-100 mw4 h4 bg-near-white ma0 br-100"></figure>
                      <h5 className="center ma0 mt3">美感教育</h5>
                      <h6 className="center mv0 ph4">美感教育的簡短介紹，美感教育的簡短介紹．</h6>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topic/pursue-your-dreams'>
                    <div className="bg-white pa3 h5 df dfc dfjc br4 topic">
                      <figure className="db center w-100 mw4 h4 bg-near-white ma0 br-100"></figure>
                      <h5 className="center ma0 mt3">追求夢想</h5>
                      <h6 className="center mv0 ph4">追求夢想的簡短介紹，追求夢想的簡短介紹．</h6>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/topic/independent-thinking'>
                    <div className="bg-white pa3 h5 df dfc dfjc br4 topic">
                      <figure className="db center w-100 mw4 h4 bg-near-white ma0 br-100"></figure>
                      <h5 className="center ma0 mt3">獨立思考</h5>
                      <h6 className="center mv0 ph4">獨立思考的簡短介紹，獨立思考的簡短介紹．</h6>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2">
                  <Link to='/'>
                    <div className="bg-silver pa3 h5 df dfc dfjc br4 topic">
                      <figure className="db center w-100 mw4 h4 bg-white ma0 br-100"></figure>
                      <h5 className="center ma0 mt3 white">????</h5>
                      <h6 className="center mv0 ph4 white">????簡短介紹，????簡短介紹．</h6>
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
