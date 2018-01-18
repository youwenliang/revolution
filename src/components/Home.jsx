import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';
import $ from 'jquery';
import {Helmet} from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);
    this.randomNum = Math.floor(Math.random() * 3) + 1;
  }
  componentDidMount() {
    document.title = "雜學起義 Zashare Revolution - 台灣非典型教育革命";
    console.log("#home");
    window.history.pushState('Home', 'Title', '/#/');
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    
    var video = document.getElementById('home-video');
    var video_loop = document.getElementById('home-video-loop');
    video.load();
    video.pause();

    document.getElementById('home-video').addEventListener('ended', myHandler, false);
    function myHandler(e) {
      console.log('done');
      $('#home-video-loop').css({'z-index': 1, 'opacity': 1});
      video_loop.play();
    }

    video.addEventListener('canplaythrough', function() {
      console.log('video loaded');
    }, false);

    /* Preload Image */
    var images  = [];
    images.push('images/loading.gif');
    images.push('images/home_video1_poster.png');
    images.push('images/home_video2_poster.png');
    images.push('images/home_video3_poster.png');
    for ( var i = 1; i <= 5; i++) {
      images.push('images/雜ＸTONE_icon-0'+i+'.png');
    }
    images.push('images/self-realization/thumbnail_video_poster.png');

  	loadImage(images)
  	.then(function (allImgs) {
  	  setTimeout(function(){        
        document.getElementById('loading').classList.add('fade');
        document.body.classList.remove('ds');
        setTimeout(function(){
          $('#home .hidediv').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).removeClass('hideme');
              $(this).removeClass('hideme-left');
              $(this).removeClass('hideme-right');
            }  
          });
          $('.fadein').removeClass('fadein');
          setTimeout(function(){
            if($(window).width() >= 400) video.play();
            // $('#home-video').attr('poster', 'images/home_video_poster.png');
          },200);
        }, 400);
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
      <div id="home">
        {/* Header */}
        <header className="df dfjc min-vh-100 ">
          <div className="df dfc s95">
          	<div className="center w-100 mw8 ph5-l tc relative t-25">
              <h2 className="hideme hidediv t25">2017</h2>
              <figure className="center w-100 mw6 hideme hidediv relative t30">
                <video id="home-video" className="home-video relative" width="100%" muted playsInline preload="auto">
                <source src={"images/home_video"+this.randomNum+".mp4"} type="video/mp4" /></video>
                <video id="home-video-loop" className="home-video absolute" width="100%" muted playsInline preload="auto" loop>
                <source src={"images/home_video_loop"+this.randomNum+".mp4"} type="video/mp4" /></video>
                <figure>
                  <img src={"images/home_video"+this.randomNum+"_poster.png"} alt="雜學起義" />
                </figure>
              </figure>
              <figure className="center w-100 mw6 ma0 db hideme hidediv">
                <img className="home-title" src="images/home-title.svg" alt="雜學起義 Zashare Revolution!"/>
              </figure>
              <h3 className="mt0 tc tracked-mega hideme hidediv">台灣非典型教育革命</h3>
            </div>
            <div className="center w-100 df dfjc fadein" id="scrolling">
              <img src="images/scroll.gif" className="center o-50" width="90" height="90" alt="scroll" />
            </div>
          </div>
        </header>
        {/* Banner */}
        <section className="banner bg-dark-gray">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white i">雜學起義，一場真實的革命！不拋頭顱，不灑狗血，<br className="dn-m" />只等你義起，掀起改變的契機！</h3>
          </div>
        </section>
        {/* Topics */}
        <section className="bg-near-white pv5-l pv5-m pv4">
        	<div className="center w-100 mw70 ph5-l ph3 mb5-l mb0 tc-l tc-m tl">
            <h2 className="fw5 hideme hidediv ph2">雜學起義 革命戰略圖</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2">盤點五大副本任務，與我們一起洞悉情勢，策動改變！<br className="dn-s"/>馬上點選你有興趣的戰場，開啟成就教育新風景的使命！</h4>
            <div className="mw9 center mt5-l mt4">
              <div className="cf">
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/self-realization'>
                    <div className="bg-white ba b--moon-gray pb2 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <video className="topic-video" width="100%" muted preload="auto" poster="images/self-realization/thumbnail_video_poster.png">
                          <source src="images/self-realization/thumbnail_video.mp4" type="video/mp4" />
                        </video>
                        <figure>
                          <img src="images/self-realization/thumbnail_video_poster.png" alt="self realization"/>
                        </figure>
                      </figure>
                      <h3 className="center mt3 fw5">追求夢想</h3>
                      <p className="center mt2 ph4 mw6 tl">做人如果沒夢想，跟鹹魚有什麼分別？</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/aesthetic-education'>
                    <div className="bg-white ba b--moon-gray pb2 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <video className="topic-video" width="100%" muted preload="auto" poster="images/aesthetic-education/thumbnail_video_poster.png">
                          <source src="images/aesthetic-education/thumbnail_video.mp4" type="video/mp4" />
                        </video>
                        <figure>
                          <img src="images/aesthetic-education/thumbnail_video_poster.png" alt="aesthetic education"/>
                        </figure>
                      </figure>
                      <h3 className="center mt3 fw5">美感教育</h3>
                      <p className="center mt2 ph4 mw6 tl">我們的世界從不缺少美，而是缺少發現。</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/critical-thinking'>
                    <div className="bg-white ba b--moon-gray pb2 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <video className="topic-video" width="100%" muted preload="auto" poster="images/critical-thinking/thumbnail_video_poster.png">
                          <source src="images/critical-thinking/thumbnail_video.mp4" type="video/mp4" />
                        </video>
                        <figure>
                          <img src="images/critical-thinking/thumbnail_video_poster.png" alt="critical thinking"/>
                        </figure>
                      </figure>
                      <h3 className="center mt3 fw5">思辨能力</h3>
                      <p className="center mt2 ph4 mw6 tl">教育最大的目的，就是教你分辨「有人在胡說八道」</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/gender-equality'>
                    <div className="bg-white ba b--moon-gray pb2 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <video className="topic-video" width="100%" muted preload="auto" poster="images/gender-equality/thumbnail_video_poster.png">
                          <source src="images/gender-equality/thumbnail_video.mp4" type="video/mp4" />
                        </video>
                        <figure>
                          <img src="images/gender-equality/thumbnail_video_poster.png" alt="gender equality"/>
                        </figure>
                      </figure>
                      <h3 className="center mt3 fw5">性別平等</h3>
                      <p className="center mt2 ph4 mw6 tl">無論男女，我們都是被塑造而成的。</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <Link to='/respect-life'>
                    <div className="bg-white ba b--moon-gray pb2 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image ma0">
                        <video className="topic-video" width="100%" muted preload="auto" poster="images/respect-life/thumbnail_video_poster.png">
                          <source src="images/respect-life/thumbnail_video.mp4" type="video/mp4" />
                        </video>
                        <figure>
                          <img src="images/respect-life/thumbnail_video_poster.png" alt="respect life"/>
                        </figure>
                      </figure>
                      <h3 className="center mt3 fw5">尊重生命</h3>
                      <p className="center mt2 ph4 mw6 tl">一個國家的偉大程度，端看他們如何對待動物。</p>
                    </div>
                  </Link>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv">
                  <a href="https://toneproject.typeform.com/to/mrdeeQ" target="_blank" rel="noopener noreferrer">
                    <div className="bg-silver ba b--moon-gray pb2 df dfc dfjc topic mw6 mw-none-l center">
                      <figure className="db center home-image question ma0">
                        <figure>
                          <img src="images/雜ＸTONE_icon-02.png" alt="question" />
                        </figure>
                      </figure>
                      <h3 className="center mt3 fw5 white">提案起義</h3>
                      <p className="center mt2 ph4 mw6 tl white">這是一個隱藏任務！</p>
                    </div>
                  </a>
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
