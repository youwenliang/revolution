import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';

var pageName = "尊重生命";
var pageURL = "respect-life";

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'lecturer-1-image':['images/1920x1080.png', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-1'      :['講師名字1', 
                      '講師內容1大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '標題標題', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'lecturer-2-image':['images/1920x1080.png', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-2'      :['講師名字2', 
                      '講師內容2大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '標題標題', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'lecturer-3-image':['images/1920x1080.png', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-3'      :['講師名字3', 
                      '講師內容3大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '標題標題', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'exhibit-1-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-1'       :['標題標題', 
                      '1大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
  'exhibit-2-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-2'       :['標題標題', 
                      '2大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
  'exhibit-3-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-3'       :['標題標題', 
                      '3大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
  'exhibit-4-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-4'       :['標題標題', 
                      '4大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
  'exhibit-5-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-5'       :['標題標題', 
                      '5大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
  'exhibit-6-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-6'       :['標題標題', 
                      '6大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
  'exhibit-7-image' :['images/1920x1080.png', 'images/400x400.png'],
  'exhibit-7'       :['標題標題', 
                      '7大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼？',
                      '標題標題', 
                      'https://www.xxx.com',
                      'https://www.xxx.com'
                     ],
}

class TopicA extends Component {
  componentDidMount() {
    document.title = pageName + " - 雜學起義 Zashare Revolution";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    /* Init Swiper */
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 3,
      simulateTouch: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 20,
      breakpoints: {
        // when window width is <= 960px
        960: {
          slidesPerView: 1,
          spaceBetween: 30
        }
      }
    });

    /* Preload Image */
    var images  = [];
    images.push('images/1920x1080.png');
    images.push('images/600x600.png');
    images.push('images/1024x768.png');
    images.push('images/small_1024x768.png');

    loadImage(images)
    .then(function (allImgs) {
      setTimeout(function(){
        document.getElementById('loading').classList.add('fade');
        document.body.classList.remove('ds');
        setTimeout(function(){
          $('#'+pageURL+' .hidediv').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).removeClass('hideme');
              $(this).removeClass('hideme-left');
              $(this).removeClass('hideme-right');
            }  
          });
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
  };

  showMore = (e) => {
    var more = document.getElementById('more_2');
    if(more.classList.contains('hide')) {
      more.classList.remove('hide');
    }
    var more_1 = document.getElementById('more_1');
    if(more_1.classList.contains('hide')) {
      more_1.classList.remove('hide');
    }
    e.target.style.display = 'none';
  };

  state = {
    open: false,
  };

  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    console.log(modalId);
    this.setState({ open: true });
    setTimeout(function(){
      $('.modal-0-2').addClass('modal-show');
      if(modalId.indexOf('video') >= 0) $('.modal-0-2').addClass('modal-center');
    }, 100);
  };

  onCloseModal = () => {
    this.setState({ open: false });
    setTimeout(function(){
      $('.modal-0-2').addClass('modal-show');
    }, 200);
  };

  modalContent = (a) => {
    if(a.indexOf('lecturer') >= 0) {
      console.log('lecture');
      return (
        <div className="ph4-l ph4-m ph3 oh h-100 pv4-l pv4-m pv3">
          <h3 className="mb3 fw5">{modalString[a][0]}</h3>
          <figure className="w-100 mh0 mb3">
            <img src={modalString[a+'-image'][0]} alt=""/>
          </figure>
          <p className="mb4">{modalString[a][1]}</p>
          <div className="bg-white df dfc-s center pa3 pa4-m pa0-l pr4-l mb4">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw5">
                <img src={modalString[a+'-image'][1]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc">
              <h4 className="w-100 fw5 tc tl-l mt3 mt0-l">{modalString[a][2]}</h4>
              <p className="w-100 mt2 tc tl-l ">{modalString[a][3]}</p>
            </div>
          </div>
          <hr/>
          <h3 className="w-100 fw5 mv3">{modalString[a][4]}</h3>
          <div className="bg-near-white df dfc-s center pa3 pa4-m pa0-l pr4-l mb3">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw5">
                <img src={modalString[a+'-image'][2]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc">
              <h4 className="w-100 fw5 tc tl-l mt3 mt0-l">{modalString[a][5]}</h4>
              <p className="w-100 mt2 tc tl-l ">{modalString[a][6]}</p>
            </div>
          </div>
        </div>
      );
    } else if(a.indexOf('exhibit') >= 0) {
      console.log('exhibit');
      return (
        <div className="ph4-l ph4-m ph3 oh h-100 pb4-l pb4-m pb3">
          <figure className="w-100 mh0 mb3 modal-full">
            <img src={modalString[a+'-image'][0]} alt=""/>
          </figure>
          <div className="bg-white df dfc-s center pa0 pv3 pa4-m pa0-l pr4-l mv4-ns">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw5">
                <img src={modalString[a+'-image'][1]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc">
              <h4 className="w-100 fw5 tc tl-l mt3 mt0-l">{modalString[a][0]}</h4>
              <p className="w-100 mt2 tc tl-l mw6">{modalString[a][1]}</p>
            </div>
          </div>
          <hr/>
          <h3 className="w-100 fw5 mv3">{modalString[a][2]}</h3>
          <div className="pl4-ns pl0 mb3">
            <p className="w-100 mt2 tl"><span className="nowrap">官網：</span><a href={modalString[a][3]} target="_blank">{modalString[a][3]}</a></p>
            <p className="w-100 mt2 tl"><span className="nowrap">粉專：</span><a href={modalString[a][4]} target="_blank">{modalString[a][4]}</a></p>
          </div>
        </div>
      );
    } else if(a.indexOf('video') >= 0) {
      console.log('video');
      return (
        <video width="100%" autoPlay>
          <source src="/images/videos/movie.mp4" type="video/mp4" />
        </video>
      );
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div id={pageURL}>
        {/*--- Navigation---*/}
        <div id="section-nav">
          <a href="#section-1">主題引言</a>
          <a href="#section-2">講師介紹</a>
          <a href="#section-3">參展單位</a>
          <a href="#section-4">額外資訊</a>
        </div>
        <p>目錄</p>

        <Modal open={open} onClose={this.onCloseModal} little>
          {this.modalContent(modalId)}
          <div className="modal-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 36 36"><path className="fill-white" d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path></svg>
          </div>
        </Modal>
        <header id="section-1" className="min-vh-100 pv5 df relative">
          <div className="center w-100 mw8 ph5-l ph3">
            <div className="mw9 center ph2">
              <div className="cf df intro">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3 mb0-l topic-image hideme hidediv">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl-l tc df dfc">
                  <h1 className="w-100 fw5 hideme hidediv">品在事直國究</h1>
                  <h3 className="w-100 mt2 mw6 mw-none-l hideme hidediv">無血氣國意中須素，照一現快府半頭小細，我有定士連受</h3>
                  <div id="fb-like" className="fb-like w-100 mt3 hideme hidediv" data-href={"http://revolution.toneskill.co/"+pageURL} data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="center w-100 df dfjc absolute" id="scrolling">
            <img src="images/scroll.gif" className="center o-30" width="90" height="90" alt="scroll" />
          </div>
        </header>
        {/* Banner */}
        <section className="banner">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">給一大聲標提樣化義能加！不讀持檢滿手？<br/>知費位等不陸十縣不大到利，一點發木才屋和點小筆的</h3>
          </div>
        </section>
        {/*--- Section 1 ---*/}
        <section className="bg-white pv5 min-vh-100 df">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <div className="mw9 center ph2">
              <div className="cf df intro mb6-l mb5">
                <div className="o2-l w-100 w-50-l pl4-l mw6 mw-none-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3 hideme hidediv">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc mw6 mw-none-l afs">
                  <h2 className="w-100 fw5 hideme hidediv">遊工只長小見</h2>
                  <p className="w-100 mt3 hideme hidediv">容呢客有她她事財據。影人一指然人醫幾呢家至眼投重術玩爸面腳國成，電天要學在我性發因地法國無血氣國意中須素，照一現快府半頭小細？</p>
                </div>
              </div>
              <div className="cf df intro mb6-l mb5">
                <div className="o1 w-100 w-50-l pr4-l mw6 mw-none-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3 hideme hidediv">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc mw6 mw-none-l afs">
                  <h2 className="w-100 fw5 hideme hidediv">遊工只長小見</h2>
                  <p className="w-100 mt3 hideme hidediv">容呢客有她她事財據。影人一指然人醫幾呢家至眼投重術玩爸面腳國成，電天要學在我性發因地法國無血氣國意中須素，照一現快府半頭小細？</p>
                  <div className="mt4 button-round pr2 pl3 cp fw5 pa2 f5 bg-blue bg-animate hover-bg-dark-blue white tc hideme hidediv" data-id="video-1" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
              <div className="cf df intro">
                <div className="o2-l w-100 w-50-l pl4-l mw6 mw-none-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3 hideme hidediv">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc mw6 mw-none-l afs">
                  <h2 className="w-100 fw5 hideme hidediv">遊工只長小見</h2>
                  <p className="w-100 mt3 hideme hidediv">容呢客有她她事財據。影人一指然人醫幾呢家至眼投重術玩爸面腳國成，電天要學在我性發因地法國無血氣國意中須素，照一現快府半頭小細？</p>
                  <div className="mt4 button-round pr2 pl3 cp fw5 pa2 f5 bg-blue bg-animate hover-bg-dark-blue white tc hideme hidediv" data-id="video-2" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-near-white pv5 df">
          <div className="center w-100 mw8 ph5-l ph3 tc mb4 hideme hidediv">
            <h2 className="fw4 hideme hidediv">影人一指然</h2>
            <h4 className="fw4 mt3 hideme hidediv">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="swiper-pagination mt4 dn-l"></div>
            <div className="swiper-container mt4 mh2 mw6 mw-none-l center">
              <div className="swiper-wrapper">
                <div className="swiper-slide bg-white cp pb4 content-block ba b--light-gray" data-id="lecturer-1" onClick={this.onOpenModal}>
                  <figure className="db center w-100 pn topImg">
                    <img src="images/1920x1080.png" alt=""/>
                    <h3 className="absolute white">測試文字</h3>
                  </figure>
                  <h3 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-1'][0]}</h3>
                </div>
                <div className="swiper-slide bg-white cp pb4 content-block ba b--light-gray" data-id="lecturer-2" onClick={this.onOpenModal}>
                  <figure className="db center w-100 pn topImg">
                    <img src="images/1920x1080.png" alt=""/>
                    <h3 className="absolute white">測試文字</h3>
                  </figure>
                  <h3 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-2'][0]}</h3>
                </div>
                <div className="swiper-slide bg-white cp pb4 content-block ba b--light-gray" data-id="lecturer-3" onClick={this.onOpenModal}>
                  <figure className="db center w-100 pn topImg">
                    <img src="images/1920x1080.png" alt=""/>
                    <h3 className="absolute white">測試文字</h3>
                  </figure>
                  <h3 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-3'][0]}</h3>
                </div>
              </div>
            </div>
            {/*<div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>*/}
          </div>
        </section>
        {/* Banner */}
        <section className="banner">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">給一大聲標提樣化義能加！不讀持檢滿手？<br/>知費位等不陸十縣不大到利，一點發木才屋和點小筆的</h3>
          </div>
        </section>
        {/*--- Section 3 ---*/}
        <section id="section-3" className="bg-near-white pv5">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <h2 className="fw4 hideme hidediv">影人一指然</h2>
            <h4 className="fw4 mt3 hideme hidediv">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                  <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-1" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                      <h3 className="absolute white">測試文字</h3>
                    </figure>
                    <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-1'][0]}</h3>
                    <p className="center tl pn mt2 ph3">{modalString['exhibit-1'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                  <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-2" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                      <h3 className="absolute white">測試文字</h3>
                    </figure>
                    <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-2'][0]}</h3>
                    <p className="center tl pn mt2 ph3">{modalString['exhibit-2'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                  <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-3" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                      <h3 className="absolute white">測試文字</h3>
                    </figure>
                    <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-3'][0]}</h3>
                    <p className="center tl pn mt2 ph3">{modalString['exhibit-3'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="hide" id="more_2">
                  <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                    <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-4" onClick={this.onOpenModal}>
                      <figure className="db center w-100 pn topImg">
                        <img src="images/1920x1080.png" alt=""/>
                        <h3 className="absolute white">測試文字</h3>
                      </figure>
                      <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-4'][0]}</h3>
                      <p className="center tl pn mt2 ph3">{modalString['exhibit-4'][1].substring(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                    <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-5" onClick={this.onOpenModal}>
                      <figure className="db center w-100 pn topImg">
                        <img src="images/1920x1080.png" alt=""/>
                        <h3 className="absolute white">測試文字</h3>
                      </figure>
                      <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-5'][0]}</h3>
                      <p className="center tl pn mt2 ph3">{modalString['exhibit-5'][1].substring(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                    <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-6" onClick={this.onOpenModal}>
                      <figure className="db center w-100 pn topImg">
                        <img src="images/1920x1080.png" alt=""/>
                        <h3 className="absolute white">測試文字</h3>
                      </figure>
                      <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-6'][0]}</h3>
                      <p className="center tl pn mt2 ph3">{modalString['exhibit-6'][1].substring(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="hide" id="more_1">
                    <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                      <div className="pb4 cp mw6 mw-none-l center content-block bg-white ba b--light-gray" data-id="exhibit-7" onClick={this.onOpenModal}>
                        <figure className="db center w-100 pn topImg">
                          <img src="images/1920x1080.png" alt=""/>
                          <h3 className="absolute white">測試文字</h3>
                        </figure>
                        <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-7'][0]}</h3>
                        <p className="center tl pn mt2 ph3">{modalString['exhibit-7'][1].substring(0, 50)}...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center mt4 button w4 cp fw5 pa2 f5 bg-light-silver bg-animate hover-bg-silver white" onClick={this.showMore}>閱讀更多</div>
            </div>
          </div>
        </section>
        {/*--- Section 4 ---*/}
        <section id="section-4" className="bg-white pv5">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <h4 className="center fw4 mt3 mw7-l hideme hidediv mw6">無血氣國意素，照一現快府半頭小半頭血氣國意中須半頭血氣國意中須細無血氣國意中須素，照一現快府半頭小細無血氣國意中須素，照一現快府半頭血氣國意中須素，照一現快府血氣國國意中須快國意中須素，照一現快府半頭血氣國意中須素，照一現快府血意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt6-l mt5 mb5-l">
              <div className="cf df dfc-s">
                <div className="o1-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba b--light-silver pa4 df dfc br3">
                    <figure className="db center mw5 br-100 overflow-hidden">
                      <img src="images/600x600.png" alt=""/>
                    </figure>
                    <h3 className="center mt4 fw5">次要次要</h3>
                    <h5 className="center ph4-ns ph0 mt2 mw6 mw-none-l">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                    <a href="" target="_blank">
                      <div className="center mt4 button w4 cp fw5 pa2 f5 bg-blue bg-animate hover-bg-dark-blue white">分享</div>
                    </a>
                  </div>
                </div>
                <div className="o2-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba b--light-silver pa4 df dfc br3">
                    <figure className="db center mw5 br-100 overflow-hidden">
                      <img src="images/600x600.png" alt=""/>
                    </figure>
                    <h3 className="center mt4 fw5">主要主要</h3>
                    <h5 className="center ph4-ns ph0 mt2 mw6 mw-none-l">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                    <a href="" target="_blank">
                      <div className="center mt4 button w4 cp fw5 pa2 f5 bg-blue bg-animate hover-bg-dark-blue white">分享</div>
                    </a>
                  </div>
                </div>
                <div className="o3-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba b--light-silver pa4 df dfc br3">
                    <figure className="db center mw5 br-100 overflow-hidden">
                      <img src="images/600x600.png" alt=""/>
                    </figure>
                    <h3 className="center mt4 fw5">次要次要</h3>
                    <h5 className="center ph4-ns ph0 mt2 mw6 mw-none-l">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                    <a href="" target="_blank">
                      <div className="center mt4 button w4 cp fw5 pa2 f5 bg-blue bg-animate hover-bg-dark-blue white">分享</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <section className="banner">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc">
            <h3 className="center fw5 mt3 mw7-l hideme hidediv mw6 white">無血氣國意素，照一現快府半頭小半頭血氣國意中須半頭</h3>
            <div className="fb-share-button hideme hidediv mt5" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
