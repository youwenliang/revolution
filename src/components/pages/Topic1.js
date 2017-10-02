import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';

class TopicA extends Component {
  componentDidMount() {
    document.title = "Za-Tone | 自我認識";
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 30,
      breakpoints: {
      // when window width is <= 960px
      960: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
    });
  }
  render() {
    return (
      <div>
        <header className="min-vh-100 pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns">
            <figure className="w-100 h5 bg-near-white mh0"></figure>
            <h1 className="tc">自我認識</h1>
            <h3 className="tc">This is a description</h3>
          </div>
        </header>
        <section className="bg-near-white min-vh-100 pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <div className="mw9 center ph3-ns">
              <div className="cf ph2-ns mb5">
                <div className="fl w-100 w-50-l w-100 ">
                  <Link to='/topicA'><div className="outline bg-white pv4 h5">A</div></Link>
                </div>
                <div className="fr w-100 w-50-l w-100 pl4-l tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
              <div className="cf ph2-ns mb5">
                <div className="fr w-100 w-50-l w-100 ">
                  <Link to='/topicB'><div className="outline bg-white pv4 h5">B</div></Link>
                </div>
                <div className="fl w-100 w-50-l w-100 tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
              <div className="cf ph2-ns mb5">
                <div className="fl w-100 w-50-l w-100 ">
                  <Link to='/topicC'><div className="outline bg-white pv4 h5">C</div></Link>
                </div>
                <div className="fr w-100 w-50-l w-100 pl4-l tl">
                  <h3>Title</h3>
                  <h5>Description</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white min-vh-100 pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <h2>This is a section title</h2>
            <h4>This is a section description</h4>
            <div className="swiper-container mt5 pb5">
              <div className="swiper-wrapper h5">
                <div className="swiper-slide bg-near-white">Slide 1</div>
                <div className="swiper-slide bg-near-white">Slide 2</div>
                <div className="swiper-slide bg-near-white">Slide 3</div>
                <div className="swiper-slide bg-near-white">Slide 4</div>
                <div className="swiper-slide bg-near-white">Slide 5</div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section className="bg-near-white min-vh-100 pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            
          </div>
        </section>
        <section className="bg-white min-vh-100 pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
