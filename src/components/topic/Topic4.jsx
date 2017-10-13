import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';

var pageName = "追求夢想";
var pageURL = "self-realization";

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'video-1'         :'aqz-KE-bpKQ',
  'video-2'         :'aqz-KE-bpKQ',
  'lecturer-1-image':['aqz-KE-bpKQ', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-1'      :['講師名字1', 
                      '講師內容1大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '標題標題', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'lecturer-2-image':['aqz-KE-bpKQ', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-2'      :['講師名字2', 
                      '講師內容2大片班小我有不術依是發錯常子氣。比得也來開經樂國技再了畫地處學日政容全邊些，人名球，張樣哥一因樂想。到不區態的國是洋我聽與，到你沒一打精叫情列成喜中現合星然無，從國總，在科苦畫進！表連府小的為出士直統去小那眼，長告科時害起指，就的歡種自結麼已難目此光重像還。財身了收中差然雖面子四前在形法遊到座公河原常！速子投片都，在得果高雖單子形多北布養會裡一可間不果方們過同信案白立間物合發，才黃法育樣人集？',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '標題標題', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'lecturer-3-image':['aqz-KE-bpKQ', 'images/400x400.png', 'images/400x400.png'],
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

class TopicD extends Component {
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
          // $('.fadein').css('opacity', 1);
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
          <div className="video-container mh0 mb3"><iframe width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a+'-image'][0]+"?rel=0&amp;controls=1&amp;showinfo=0"} frameborder="0" allowfullscreen></iframe></div>
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
        <div className="video-container"><iframe width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a]+"?rel=0&amp;controls=1&amp;showinfo=0"} frameborder="0" allowfullscreen></iframe></div>
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
            <div className="center mw9 ph2">
              <div className="center cf df mw6 mw-none-l intro">
                <div className="o1 w-100 w-50-l tc">
	                <video id="cover-video" className="cover-video mh0 ml0-l center mb3 mb0-l hideme hidediv" width="100%" autoPlay muted loop>
					  <source src={"images/"+pageURL+"/cover_video.mp4"} type="video/mp4" />
					</video>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                  <h1 className="w-100 f1 fw5 blue hideme hidediv">作文題目：我的夢想</h1>
                  <h3 className="w-100 mv4 hideme hidediv">小時候的你，寫過這個作文題目吧！你還記得自己寫下什麼嗎？<br/><br/>時間過得很快，曾為這個題目苦惱的你，也不知不覺的長大了。身為大人的你，已經知道「夢想」是什麼了嗎？</h3>
                  <div id="fb-like" className="fb-like w-100 mt3 hideme hidediv mw6" data-href={"http://revolution.toneskill.co/"+pageURL} data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="center w-100 df dfjc absolute fadein" id="scrolling">
            <img src="images/scroll.gif" className="center o-50" width="90" height="90" alt="scroll" />
          </div>
        </header>
        {/* Banner */}
        <section className="banner">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">夢想，總帶點浪漫、彷彿不切實際，<br className="dn-s"/>不小心說出來，還會有點難為情….</h3>
          </div>
        </section>
        {/*--- Section 1 ---*/}
        <section className="bg-white pv6-l pv5 min-vh-100 df">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <div className="center mw9 ph2">
              <div className="center cf df intro mb6-l mb5 mw6 mw-none-l">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-01.png"} alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr5-l tl df dfc afs">
                  <h2 className="w-100 fw5 hideme hidediv lh-copy blue">從小到大，沒有一堂課，教我們如何實現夢想</h2>
                  <h4 className="w-100 mt3 hideme hidediv">星爺說，做人如果沒夢想，那跟鹹魚有什麼分別？
                  <br/><br/>夢想，可以很簡單，但也可以很難實現夢想的過程，必須先經歷「尋夢」和「圓夢」兩階段。
                  <br/><br/>尋夢過程，「多方體驗」、「自我認識」和「獨立思考」會是三大重點。在這個階段，我們會更加瞭解自己，並且理解現實，最後終將內化出一個適合自己的夢想。
                  <br/><br/>而圓夢階段，我們又將學會尋找資源、夥伴、機會，</h4>
                </div>
              </div>
              <div className="center cf df intro mb6-l mb5 mw6 mw-none-l">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-02.png"} alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl5-l tl df dfc afs">
                  <h2 className="w-100 fw5 lh-copy blue hideme hidediv">尋夢：夢想，藏在哪裡？</h2>
                  <h4 className="w-100 mt3 hideme hidediv">人們的夢想都來自哪裡？關於夢想，充滿不同的契機，可能是一個靈感，一種嚮往，一次獨一無二的生命經驗，啟發了心中的什麼，讓人看見自己的與眾不同。但隨著社會框架和標準規範，尋找夢想也會變得越來越困難。<br/><br/>你的夢想呢，它藏在哪裡？
</h4>
                  <div className="mt4 button-round pr2 pl3 cp fw5 pa2 f5 bg-light-blue bg-animate hover-bg-blue white tc hideme hidediv" data-id="video-1" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
              <div className="center cf df intro mb6-l mb5 mw6 mw-none-l">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-03.png"} alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr5-l tl df dfc afs">
                  <h2 className="w-100 fw5 hideme hidediv lh-copy blue">尋夢：夢想，藏在哪裡？</h2>
                  <h4 className="w-100 mt3 hideme hidediv">人們的夢想都來自哪裡？關於夢想，充滿不同的契機，可能是一個靈感，一種嚮往，一次獨一無二的生命經驗，啟發了心中的什麼，讓人看見自己的與眾不同。但隨著社會框架和標準規範，尋找夢想也會變得越來越困難。<br/><br/>你的夢想呢，它藏在哪裡？
</h4>

                  <div className="mt4 button-round pr2 pl3 cp fw5 pa2 f5 bg-light-blue bg-animate hover-bg-blue white tc hideme hidediv" data-id="video-2" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-near-white pv5 df">
          <div className="center w-100 mw8 ph5-l ph3 tc mb4 hideme hidediv">
            <h2 className="fw4 hideme hidediv">嘿，這些人想跟你聊聊夢想！</h2>
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
            <h3 className="white">夢想，總帶點浪漫、彷彿不切實際，<br className="dn-s"/>不小心說出來，還會有點難為情….</h3>
          </div>
        </section>
        {/*--- Section 3 ---*/}
        <section id="section-3" className="bg-near-white pv5">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <h2 className="fw4 hideme hidediv">影人一指然</h2>
            <h4 className="fw4 mt3 hideme hidediv">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt5">
              <div className="cf mw6 mw-none-l center">
                <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                  <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-1" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                      <h3 className="absolute white">測試文字</h3>
                    </figure>
                    <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-1'][0]}</h3>
                    <p className="center tl pn mt2 ph3">{modalString['exhibit-1'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                  <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-2" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                      <h3 className="absolute white">測試文字</h3>
                    </figure>
                    <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-2'][0]}</h3>
                    <p className="center tl pn mt2 ph3">{modalString['exhibit-2'][1].substring(0, 50)}...</p>
                  </div>
                </div>
                <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                  <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-3" onClick={this.onOpenModal}>
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
                    <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-4" onClick={this.onOpenModal}>
                      <figure className="db center w-100 pn topImg">
                        <img src="images/1920x1080.png" alt=""/>
                        <h3 className="absolute white">測試文字</h3>
                      </figure>
                      <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-4'][0]}</h3>
                      <p className="center tl pn mt2 ph3">{modalString['exhibit-4'][1].substring(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                    <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-5" onClick={this.onOpenModal}>
                      <figure className="db center w-100 pn topImg">
                        <img src="images/1920x1080.png" alt=""/>
                        <h3 className="absolute white">測試文字</h3>
                      </figure>
                      <h3 className="center tl mt3 pn mh3 fw5 ph3">{modalString['exhibit-5'][0]}</h3>
                      <p className="center tl pn mt2 ph3">{modalString['exhibit-5'][1].substring(0, 50)}...</p>
                    </div>
                  </div>
                  <div className="fl w-100 w-third-l pa2 hideme hidediv mb3 mb0-l">
                    <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-6" onClick={this.onOpenModal}>
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
                      <div className="pb4 cp center content-block bg-white ba b--light-gray" data-id="exhibit-7" onClick={this.onOpenModal}>
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
              <div className="center cf df dfc-s mw6 mw-none-l">
                <div className="o1-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba b--moon-gray pa4 df dfc br3">
                    <figure className="db center mw5">
                      <img src={"images/"+pageURL+"/雜ＸTONE_icon-05.png"} alt=""/>
                    </figure>
                    <h3 className="center mt4 fw5">次要次要</h3>
                    <h5 className="center ph4-ns ph0 mt2">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                    <a href="" target="_blank">
                      <div className="center mt4 button w4 cp fw5 pa2 f5 bg-light-blue bg-animate hover-bg-blue white">分享</div>
                    </a>
                  </div>
                </div>
                <div className="o2-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba b--moon-gray pa4 df dfc br3">
                    <figure className="db center mw5">
                      <img src={"images/"+pageURL+"/雜ＸTONE_icon-04.png"} alt=""/>
                    </figure>
                    <h3 className="center mt4 fw5">主要主要</h3>
                    <h5 className="center ph4-ns ph0 mt2">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                    <a href="" target="_blank">
                      <div className="center mt4 button w4 cp fw5 pa2 f5 bg-light-blue bg-animate hover-bg-blue white">分享</div>
                    </a>
                  </div>
                </div>
                <div className="o3-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba b--moon-gray pa4 df dfc br3">
                    <figure className="db center mw5">
                      <img src={"images/"+pageURL+"/雜ＸTONE_icon-06.png"} alt=""/>
                    </figure>
                    <h3 className="center mt4 fw5">次要次要</h3>
                    <h5 className="center ph4-ns ph0 mt2">在較城是功不持天只政差是時：刻會是用所了不陽會我．</h5>
                    <a href="" target="_blank">
                      <div className="center mt4 button w4 cp fw5 pa2 f5 bg-light-blue bg-animate hover-bg-blue white">分享</div>
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
            <div className="fb-share-button hideme hidediv mt5" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button" data-size="large" data-mobile-iframe="true"><a className="fb-xfbml-parse-ignore" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">Share</a></div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicD;
