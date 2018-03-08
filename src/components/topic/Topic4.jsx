/*global FB*/
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';
import {Helmet} from "react-helmet";

var pageName = "性別平等";
var pageURL = "gender-equality";
var themeColor = "pink";
var exhibitNum = 0;

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'video-1'         :'O9NnVTWWC8U',
  'video-2'         :'R5J2oiw3N04',
  'lecturer-1-image':['O9NnVTWWC8U', 'images/gender-equality/lecturer1-1.png', 'images/gender-equality/lecturer1-2.png'],
  'lecturer-1'      :['動眼神經/眼球央視製作人', 
                      '讓每個人都能自在的做自己',
                      '我希望多元性別不只能夠更被瞭解，也能夠更被呈現出來，讓每個人都能夠更做自己。',
                      '動眼神經',
                      '眼球中央電視台共同創辦人暨製作人，相信內容的力量加上新媒體的影響力可以激盪出更多有價值的論述、衝撞出更多未來的可能。「生活中事事與政治相關，我們應該更自在地談論政治。」繞了地球半圈想尋找自己，意外發現自己的「國家」在世界上是多麼曖昧的存在，回到台灣後，希望能夠讓這片土地更好。讓我們用白眼拯救世間苦難',
                      '延伸推薦', 
                      '眼球中央電視台', 
                      '本台為中華民國國家電視台，為政府喉舌。全面深化島內思想改革、全面落實只說政府好話、全面檢討反政府言論、全面奉承領導人馬、全面樂觀看待國家危難。用眼一分鐘，看透世間60秒。'
                     ],
  'lecturer-2-image':['R5J2oiw3N04', 'images/gender-equality/lecturer2-1.png', 'images/gender-equality/lecturer2-2.png'],
  'lecturer-2'      :['苗博雅/社會民主黨全國委員', 
                      '性別平等非常簡單，就是真正的尊重他人',
                      '做為一個獨立自主的個體，不管他的性別是什麼，都值得得到我們同樣的尊重。',
                      '苗博雅',
                      '18歲起即投入社會運動，長期參與性別平等及台灣同志運動，並關注台灣各項弱勢族群相關議題。2015年3月，苗博雅宣布代表社會民主黨投入2016年立法委員選舉，現為台北市議員擬候選人。',
                      '延伸推薦', 
                      '台灣性別平等教育協會', 
                      '過去多年來，我們除了在校內結合有興趣的教師，發展教材教法；也往來各地，參與各項研習課程活動；並從事相關學術研究，鑽研論述；還積極影響政府政策，推動立法。因為深感性別平等教育的重要性，也為了累積、交流彼此的經驗，並持續深耕與推廣這個議題，我們這一群夥伴，包括基層中小學教師、大專院校學者，以及民間團體專業工作者，決定打造這個共同的家，來立性別教育的大業。'
                     ]
}

class Topic2 extends Component {
  componentDidMount() {
    document.title = pageName + " - 雜學起義 Zashare Revolution";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    /* Init Swiper */
    var swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      slidesPerView: 2,
      simulateTouch: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 32,
      breakpoints: {
        // when window width is <= 960px
        960: {
          slidesPerView: 1,
          spaceBetween: 40
        }
      }
    });

    /* Preload Image */
    var images  = [];
    for ( var i = 1; i <= 3; i++) {
      images.push('images/'+pageURL+'/雜ＸTONE_icon-'+i+'.png');
    }
    images.push('images/'+pageURL+'/cover_video_poster.png');
    images.push('images/'+pageURL+'/cover_video_poster_small.png');

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
          $('.fadein').removeClass('fadein');
          console.log("#self-realization");
      	  window.history.pushState(pageURL, 'Title', '/'+pageURL);
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

  socialShare = () => {
    var link = window.location.href.replace('/#','');
    console.log(link);
    if (typeof FB !== 'undefined') {
      FB.ui({
        method: 'share',
        href: link,
      }, function(response){});
    }
  }

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
        <div className="pa5-l pa4-m pa3 oh h-100">
          <h3 className="f35 fw5 mb3 pr3-ns">雜學起義：聽{modalString[a][3]}聊性平</h3>
          <div className="video-container mh0 mb3"><iframe title="youtube" width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a+'-image'][0]+"?modestbranding=1&amp;rel=0&amp;controls=1"} frameBorder="0" allowFullScreen></iframe></div>
          <p className="mb5">{modalString[a][2]}</p>
          <div className="bg-white df dfc-s center pa3 pa4-m pa0-l pr4-l mb4">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw200 mw160-s">
                <img src={modalString[a+'-image'][1]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc">
              <h3 className="w-100 fw4 tc tl-l mt3 mt0-l"><span className="fw7">{modalString[a][0].split('/')[0]}</span><span className="o-50">/{modalString[a][0].split('/')[1]}</span></h3>
              <p className="w-100 mt2 tl">{modalString[a][4]}</p>
            </div>
          </div>
          <hr/>
          <h3 className="w-100 fw5 mt1 mb4">{modalString[a][5]}</h3>
          <div className="bg-white df dfc-s center pa3 pa4-m pa0-l pr4-l mb3">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw5">
                <img src={modalString[a+'-image'][2]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc pv4-l">
              <h3 className="w-100 fw5 tc tl-l mt3 mt0-l">{modalString[a][6]}</h3>
              <p className="w-100 mt2 tl">{modalString[a][7]}</p>
            </div>
          </div>
          <div className="modal-close mt4 mb3">
          </div>
        </div>
      );
    } else if(a.indexOf('exhibit') >= 0) {
      console.log('exhibit');
      let links = null;
      if(modalString[a][3] === '') links = <div className="mb3 pl4-l pl0"><p className="w-100 mt2 tl"><span className="nowrap">粉專：</span><a href={modalString[a][4]} target="_blank">{modalString[a][4]}</a></p></div>;
      else links = <div className="mb3 pl4-l pl0"><p className="w-100 mt2 tl"><span className="nowrap">官網：</span><a href={modalString[a][3]} target="_blank">{modalString[a][3]}</a></p><p className="w-100 mt2 tl"><span className="nowrap">粉專：</span><a href={modalString[a][4]} target="_blank">{modalString[a][4]}</a></p></div>;
      return (
        <div className="ph5-l ph4-m ph3 pb5-l pb4-m pb3 oh h-100">
          <figure className="w-100 mh0 mb3 modal-full">
            <img src={'images/'+pageURL+'/exhibit_'+a.split('-')[1]+'_cover.jpg'} alt=""/>
          </figure>
          <div className="bg-white df dfc-s center pa0 pv3 mv4-ns">
            <div className="o1 w-100 w-30-l">
              <a href={modalString[a][4]} target="_blank">
                <figure className="db center ma0 mw5-l mw4">
                  <img src={'images/'+pageURL+'/exhibit_'+a.split('-')[1]+'_logo.jpg'} alt=""/>
                </figure>
              </a>
            </div>
            <div className="o2 w-100 w-70-l tl-l tc df dfc pl4-l pl0 mw6">
              <h2 className="w-100 fw5 f35 tc tl-l mt3 mt0-l">{modalString[a][0]}</h2>
              <p className="w-100 mt2 tl">{modalString[a][2]}</p>
            </div>
          </div>
          <hr/>
          <h3 className="w-100 fw5 mt1 mb4">相關連結：</h3>
          {links}
          <div className="modal-close mt4 mb3">
          </div>
        </div>
      );
    } else if(a.indexOf('video') >= 0) {
      console.log('video');
      return (
        <div className="video-container">
          <iframe title="youtube" width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a]+"?modestbranding=1&amp;rel=0&amp;controls=1"} frameBorder="0" allowFullScreen></iframe>
          <div className="close-video cp" onClick={this.onCloseModal}>關閉影片</div>
        </div>
      );
    }
  }

  exhibitComponent = (a) => {
    return (
      <div className="fl w-100 w-third-l pa3-l pa2 hideme hidediv mb3 mb0-l">
        <div className="pb4 cp center content-block bg-white ba b--moon-gray br1" data-id={"exhibit-"+a} onClick={this.onOpenModal}>
          <figure className="db center w-100 pn topImg">
            <img src={'images/'+pageURL+'/exhibit_'+a+'_cover.jpg'} alt=""/>
          </figure>
          <h4 className="center tl mt3 pn mh3 fw5 ph15">{modalString['exhibit-'+a][1]}</h4>
          <p className="center tl pn mt2 ph15">{modalString['exhibit-'+a][2].substring(0, 30)}...</p>
        </div>
      </div>
    )
  }

  render() {
    const { open } = this.state;
    return (
      <div id={pageURL}>
        {/*--- Navigation---*/}
        <div id="section-nav">
          <a href="#section-0">主題首頁</a>
          <a href="#section-1">議題簡介</a>
          <a href="#section-2">名人對談</a>
          <a href="#section-4">加入革命</a>
        </div>
        <p>目錄</p>
        {/* Modal */}
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.modalContent(modalId)}
        </Modal>
        <header id="section-0" className="min-vh-100 df dfjc">
          <div className="w-100 df dfc">
            <div className="center w-100 mw8 ph5-l ph3 t30 relative header-cover">
              <div className="center mw9 ph2">
                <div className="center cf df mw6 mw-none-l dfc-s intro">
                  <div className="o1 w-100 w-50-l tc">
  	                <video id="cover-video" className="cover-video mh0 ml0-l center mb3 mb0-l hideme hidediv" width="100%" muted playsInline preload="auto" loop poster={"images/"+pageURL+"/cover_video_poster.png"}>
                      <source src={"images/"+pageURL+"/cover_video.mp4"} type="video/mp4" />
                    </video>
                    <figure className="mh0 ml0-l center mb3 mb0-1 hideme hidediv">
                      <img src={"images/"+pageURL+"/cover_video_poster_small.png"} alt=""/>
                    </figure>
                  </div>
                  <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                    <h1 className={"w-100 fw5 hideme hidediv "+themeColor}>性別平等</h1>
                    <h5 className="w-100 fw3 mt4 mb3 hideme hidediv">為什麼女生等於粉紅色？<br/><br/>男生就該喜歡小汽車？
					<br className="dn-s"/>追求性別平等的價值，
					<br className="dn-s"/>在於讓每個人都能自在活出自己的樣子。
					<br className="dn-s"/>曾為這個題目苦惱的你，也不知不覺的長大了。</h5>
                    <div id="fb-like" className="fb-like w-100 mt3 hideme hidediv mw6" data-href={"http://revolution.zashare.org/#/"+pageURL} data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center w-100 df dfjc fadein" id="scrolling">
              <img src="images/scroll.gif" className="center o-50" width="85.5" height="85.5" alt="scroll" />
            </div>
          </div>
        </header>
        {/* Banner */}
        <section className={"banner bg-"+themeColor}>
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">做自己喜歡的樣子，才能活出自己的樣子。</h3>
          </div>
        </section>
        {/*--- Section 1 ---*/}
        <section id="section-1" className="bg-white pv5-ns pv4 df">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <div className="center mw9 ph2">
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-1.png"} alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc afs">
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>理解性別，而不是製造差別。</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">什麼是女生該有的樣子？男生該有的樣子？這些框框，讓好多人不能活出自己真正的樣子。教育孩子性別平等，並不是鼓勵標新立異，而是透過理解性別的各種面向，學會尊重每個個體的獨特與價值。</p>
                </div>
              </div>
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-2.png"} alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                  <h2 className={"w-100 fw5 lh-copy hideme hidediv "+themeColor}>性別，不只是男女</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">性別是一種區分的方法，最常見的是以生理特徵區分為男生和女生，除此之外，還有涉及心理層面的「性別認同」及「性取向」。<br/><br/>生理性別：從外表的生理特徵分為男性與女性。
					<br/>性別認同：代表一個人對自己性別上的自我認同。
					<br/>性取向：指一個人對特定性別而產生的性吸引力。</p>
                  <div className={"mt4 button-round pr2 pl3 cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc hideme hidediv"} data-id="video-1" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
              <div className="center cf df dfc-s intro mw6 mw-none-l">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-3.png"} alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc afs">
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>平等，從尊重做起</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">用正確的方式認識性別的各種樣貌，並理解到：「不論是哪種生理性別、性取向、性別認同，都應該被平等的尊重與對待」，不會因為性別而失去機會、工作機會、交友機會、被別人公平評價的機會。男生當家庭主夫不奇怪，女生是機師也很正常，讓性別不再是枷鎖，就是性別平等真正的價值與目的。</p>
                  <div className={"mt4 button-round pr2 pl3 cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc hideme hidediv"} data-id="video-2" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-near-white pv5-ns pv4 df">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">嘿，這些人想跟你聊聊性平！</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2">性別平等對他們來說，是....？</h4>
            <div className="swiper-pagination mt4"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="ph3">
              <div className="swiper-container mt5-l mt4 mh2 mw6 mw65-l center pb3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-1" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src={"images/"+pageURL+"/lecturer1-3.png"} alt=""/>
                    </figure>
                    <h4 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-1'][1]}</h4>
                    <h5 className="center ph3 tl mt3 pn fw4"><span className="fw7">{modalString['lecturer-1'][0].split('/')[0]}</span><span className="o-50">/{modalString['lecturer-1'][0].split('/')[1]}</span></h5>
                  </div>
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-2" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src={"images/"+pageURL+"/lecturer2-3.png"} alt=""/>
                    </figure>
                    <h4 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-2'][1]}</h4>
                    <h5 className="center ph3 tl mt3 pn fw4"><span className="fw7">{modalString['lecturer-2'][0].split('/')[0]}</span><span className="o-50">/{modalString['lecturer-2'][0].split('/')[1]}</span></h5>
                  </div>
                </div>
              </div>
            </div>
            {/*<div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>*/}
          </div>
        </section>
        {/* Banner */}
        <section className={"banner bg-"+themeColor}>
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">不管你是哪種樣子，都值得被尊重。</h3>
          </div>
        </section>
        <section id="section-3" className="dn"></section>
        {/*--- Section 4 ---*/}
        <section id="section-4" className="bg-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h4 className="center fw4 mw7-l hideme hidediv mw6 ph2">關於理解性別，以及創造平等，<br className="dn-s" />我們都還可以做得更多。<br/><br/>雜學起義，一場透過非典型教育著手的性平革命，現正起義中<br/><br/>如果你對自我實現、創新教育有興趣，<br className="dn-s" />想加入這場雜學起義，實踐更多創新可能<br className="dn-s" />現在就留下行動，成為我們的一份子！</h4>
            <div className="mw9 center mt5-l mt4 mb4-l">
              <div className="center cf df dfc-s mw6 mw-none-l relative t30">
                <div className="o1-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba bw2 b--moon-gray pa3 pl1-l df dfc br3">
                    <figure className="db center mw160 mt2">
                      <img src={"images/雜ＸTONE_icon-5.png"} alt=""/>
                    </figure>
                    <h3 className="center mt0 fw5 tracked-m">認識雜學校</h3>
                    <p className="center ph3-ns ph0 mt2 tl">雜學校是什麼呢？我們想幹麻？這邊請！</p>
                    <a href="http://zashare.org" target="_blank" rel="noopener noreferrer">
                      <div className={"center mv4-l mt4 mb3 button cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc"}>前往雜學校</div>
                    </a>
                  </div>
                </div>
                <div className="o2-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba bw2 b--moon-gray pa3 df dfc br3">
                    <figure className="db center mw200 mt3">
                      <img src={"images/雜ＸTONE_icon-4.png"} alt=""/>
                    </figure>
                    <h3 className="center mt2 fw5 tracked-m">加入革命</h3>
                    <p className="center ph2-ns ph0 mt2 tl">革命正要展開，未來將陸續推出系列活動及工作坊，想投身參與，請留下Email，接收第一手革命訊息！</p>
                    <a href="https://toneproject.typeform.com/to/mrdeeQ" target="_blank" rel="noopener noreferrer">
                      <div className={"center mv4-l mt4 mb3 button cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc"}>算我一份</div>
                    </a>
                  </div>
                </div>
                <div className="o3-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba bw2 b--moon-gray pa3 pr1-l df dfc br3">
                    <figure className="db center mw160 mt2">
                      <img src={"images/雜ＸTONE_icon-6.png"} alt=""/>
                    </figure>
                    <h3 className="center mt0 fw5 tracked-m">看其他主題</h3>
                    <p className="center pl4-ns pr3-ns ph0 mt2 tl">除了性平，我還想要瞭解更多！</p>
                    <Link to='/'>
                      <div className={"center mv4-l mt4 mb3 button cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc"}>回首頁</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <section className={"banner bg-"+themeColor}>
          <div className="center w-100 mw6 mw-none-l ph3 pv3 tc">
            <h4 className="center fw4 mt4 mw7-l hideme hidediv mw6 white i">馬上推廣！分享這個訊息，一起擴散這場雜學革命</h4>
            <div className={"center mv4 button button-fb cp hideme hidediv fw5 bg-white bg-animate hover-bg-near-white "+themeColor} onClick={this.socialShare}>
              立即分享</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Topic2;

