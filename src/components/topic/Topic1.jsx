import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';

var modalId;
var modalString = {
  'lecturer-1':['講師名字1', '講師內容1大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'lecturer-2':['講師名字2', '講師內容2大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'lecturer-3':['講師名字3', '講師內容3大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-1' :['參展名字1', '參展內容1大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-2' :['參展名字2', '參展內容2大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-3' :['參展名字3', '參展內容3大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-4' :['參展名字4', '參展內容4大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-5' :['參展名字5', '參展內容5大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-6' :['參展名字6', '參展內容6大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？'],
  'exhibit-7' :['參展名字7', '參展內容7大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？']
}

class TopicA extends Component {
  componentDidMount() {
    document.title = "Revolution | 自我認識";
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
    // images.push('images/large.jpg');

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
  };

  showMore = (e) => {
    var more = document.getElementById('more');
    if(more.classList.contains('hide')) {
      more.classList.remove('hide');
      e.target.innerText = 'See Less';
    } else {
      more.classList.add('hide');
      e.target.innerText = 'See More';
    }
  };

  state = {
    open: false,
  };

  onOpenModal = (e) => {
    modalId = e.target.dataset.id;
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  modalContent = (a) => {
    switch(a) {
      case "lecturer-1":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <h3 className="mb3">{modalString['lecturer-1'][0]}</h3>
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <p>{modalString['lecturer-1'][1]}</p>
          </div>
        );
      case "lecturer-2":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <h3 className="mb3">{modalString['lecturer-2'][0]}</h3>
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <p>{modalString['lecturer-2'][1]}</p>
          </div>
        );
      case "lecturer-3":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <h3 className="mb3">{modalString['lecturer-3'][0]}</h3>
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <p>{modalString['lecturer-3'][1]}</p>
          </div>
        );
      case "exhibit-1":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-1'][0]}</h3>
            <p>{modalString['exhibit-1'][1]}</p>
          </div>
        );
      case "exhibit-2":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-2'][0]}</h3>
            <p>{modalString['exhibit-2'][1]}</p>
          </div>
        );
      case "exhibit-3":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-3'][0]}</h3>
            <p>{modalString['exhibit-3'][1]}</p>
          </div>
        );
      case "exhibit-4":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-4'][0]}</h3>
            <p>{modalString['exhibit-4'][1]}</p>
          </div>
        );
      case "exhibit-5":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-5'][0]}</h3>
            <p>{modalString['exhibit-5'][1]}</p>
          </div>
        );
      case "exhibit-6":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-6'][0]}</h3>
            <p>{modalString['exhibit-6'][1]}</p>
          </div>
        );
      case "exhibit-7":
        return (
          <div className="ph4-l ph4-m ph3 es h-100">
            <figure className="w-100 mh0 mb3">
              <img src="images/1920x1080.png" alt=""/>
            </figure>
            <h3 className="mb3">{modalString['exhibit-7'][0]}</h3>
            <p>{modalString['exhibit-7'][1]}</p>
          </div>
        );
      default:
        break;
    } 
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        {/*--- Navigation---*/}
        <div id="section-nav">
          <a href="#section-1">主題引言</a>
          <a href="#section-2">講師介紹</a>
          <a href="#section-3">參展單位</a>
          <a href="#section-4">額外資訊</a>
        </div>
        <header id="section-1" className="min-vh-100 pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns">
            <div className="mw9 center ph2">
              <div className="cf df intro">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3 mb0-l">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl-l tc df dfc">
                  <h1 className="w-100">品在事直國究</h1>
                  <h3 className="w-100 mt2 mw6 mw-none-l">無血氣國意中須素，照一現快府半頭小細，我有定士連受</h3>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*--- Section 1 ---*/}
        <section className="bg-near-white pv5 min-vh-100 df">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <div className="mw9 center ph2">
              <div className="cf df intro mb5">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc">
                  <h2 className="w-100">遊工只長小見</h2>
                  <h4 className="w-100 mt3 mw6 mw-none-l">容呢客有她她事財據。影人一指然人醫幾呢家至眼投重術玩爸面腳國成，電天要學在我性發因地法國無血氣國意中須素，照一現快府半頭小細？</h4>
                </div>
              </div>
              <div className="cf df intro mb5">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc">
                  <h2 className="w-100">遊工只長小見</h2>
                  <h4 className="w-100 mt3 mw6 mw-none-l">容呢客有她她事財據。影人一指然人醫幾呢家至眼投重術玩爸面腳國成，電天要學在我性發因地法國無血氣國意中須素，照一現快府半頭小細？</h4>
                </div>
              </div>
              <div className="cf df intro">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mw6 mw-none-l mh0 ml0-l center mb3">
                    <img src="images/1024x768.png" alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc">
                  <h2 className="w-100">遊工只長小見</h2>
                  <h4 className="w-100 mt3 mw6 mw-none-l">容呢客有她她事財據。影人一指然人醫幾呢家至眼投重術玩爸面腳國成，電天要學在我性發因地法國無血氣國意中須素，照一現快府半頭小細？</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-white pv5 df">
          <div className="center w-100 mw8 ph3 ph5-ns tc mb5 hideme hidediv">
            <h2>影人一指然</h2>
            <h4 className="mt3">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="swiper-pagination mt4 dn-l"></div>
            <div className="swiper-container mt4 mh2">
              <div className="swiper-wrapper ">
                <div className="swiper-slide bg-near-white cp pb3" data-id="lecturer-1" onClick={this.onOpenModal}>
                  <figure className="db center w-100  pn">
                    <img src="images/1920x1080.png" alt=""/>
                  </figure>
                  <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['lecturer-1'][0]}</h3>
                </div>
                <div className="swiper-slide bg-near-white cp pb3" data-id="lecturer-2" onClick={this.onOpenModal}>
                  <figure className="db center w-100  pn">
                    <img src="images/1920x1080.png" alt=""/>
                  </figure>
                  <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['lecturer-2'][0]}</h3>
                </div>
                <div className="swiper-slide bg-near-white cp pb3" data-id="lecturer-3" onClick={this.onOpenModal}>
                  <figure className="db center w-100  pn">
                    <img src="images/1920x1080.png" alt=""/>
                  </figure>
                  <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['lecturer-3'][0]}</h3>
                </div>
              </div>
            </div>
            {/*<div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>*/}
          </div>
          <Modal open={open} onClose={this.onCloseModal} little>
            {this.modalContent(modalId)}
          </Modal>
        </section>
        <section className="bg-dark-gray">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">給一大聲標提樣化義能加！不讀持檢滿手？<br/>知費位等不陸十縣不大到利，一點發木才屋和點小筆的</h3>
          </div>
        </section>
        {/*--- Section 3 ---*/}
        <section id="section-3" className="bg-near-white pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <h2>影人一指然</h2>
            <h4 className="mt3">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt5">
              <div className="cf">
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                  <div className="bg-white pb4  cp" data-id="exhibit-1" onClick={this.onOpenModal}>
                    <figure className="db center w-100  pn">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-1'][0]}</h3>
                    <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-1'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                  <div className="bg-white pb4  cp" data-id="exhibit-2" onClick={this.onOpenModal}>
                    <figure className="db center w-100  pn">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-2'][0]}</h3>
                    <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-2'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                  <div className="bg-white pb4  cp" data-id="exhibit-3" onClick={this.onOpenModal}>
                    <figure className="db center w-100  pn">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-3'][0]}</h3>
                    <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-3'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                  <div className="bg-white pb4  cp" data-id="exhibit-4" onClick={this.onOpenModal}>
                    <figure className="db center w-100  pn">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-4'][0]}</h3>
                    <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-4'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                  <div className="bg-white pb4  cp" data-id="exhibit-5" onClick={this.onOpenModal}>
                    <figure className="db center w-100  pn">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-5'][0]}</h3>
                    <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-5'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                  <div className="bg-white pb4  cp" data-id="exhibit-6" onClick={this.onOpenModal}>
                    <figure className="db center w-100  pn">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-6'][0]}</h3>
                    <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-6'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="hide" id="more">
                  <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv mb3 mb0-l">
                    <div className="bg-white pb4  cp" data-id="exhibit-7" onClick={this.onOpenModal}>
                      <figure className="db center w-100  pn">
                        <img src="images/1920x1080.png" alt=""/>
                      </figure>
                      <h3 className="center ph4 tl mt3 pn mw6 mw-none-l">{modalString['exhibit-7'][0]}</h3>
                      <p className="center ph4 tl pn mt2 mw6 mw-none-l">{modalString['exhibit-7'][1].substring(0, 50)}...</p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt4" onClick={this.showMore}>See More</button>
            </div>
          </div>
        </section>
        {/*--- Section 4 ---*/}
        <section id="section-4" className="bg-white pv5">
          <div className="center w-100 mw8 ph3 ph5-ns tc">
            <div className="mw9 center">
              <div className="cf">
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv">
                  <div className="bg-white pa3 df dfc">
                    <figure className="db center mw5 br-100">
                      <img src="images/600x600.png" alt=""/>
                    </figure>
                    <h3 className="center mt4">大一陽語體</h3>
                    <h5 className="center ph4 mt2 mw6 mw-none-l">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv">
                  <div className="bg-white pa3 df dfc">
                    <figure className="db center mw5 br-100">
                      <img src="images/600x600.png" alt=""/>
                    </figure>
                    <h3 className="center mt4">大一陽語體</h3>
                    <h5 className="center ph4 mt2 mw6 mw-none-l">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                  </div>
                </div>
                <div className="fl w-100 w-third-l w-100 pa2 hideme hidediv">
                  <div className="bg-white pa3 df dfc">
                    <figure className="db center mw5 br-100">
                      <img src="images/600x600.png" alt=""/>
                    </figure>
                    <h3 className="center mt4">大一陽語體</h3>
                    <h5 className="center ph4 mt2 mw6 mw-none-l">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 5 ---*/}
        <section className="bg-near-white">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3>給一大聲標提樣化義能加！不讀持檢滿手？<br/>知費位等不陸十縣不大到利，一點發木才屋和點小筆的</h3>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
