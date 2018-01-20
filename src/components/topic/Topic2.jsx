/*global FB*/
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';
import {Helmet} from "react-helmet";

var pageName = "美感教育";
var pageURL = "aesthetic-education";
var themeColor = "red";
var exhibitNum = 4;

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'video-1'         :'TKFuCifcYdY',
  'video-2'         :'p9Z49qPuH30',
  'lecturer-1-image':['TKFuCifcYdY', 'images/aesthetic-education/lecturer1-1.png', 'images/aesthetic-education/lecturer1-2.png'],
  'lecturer-1'      :['張柏韋 / 美感細胞共同創辦人', 
                      '培養美感最好的方式，是增廣你的視野',
                      '培養美感最好的方式，是增廣你的視野。在這些多元的選擇之中，找到一個你喜歡的，然後栽進去。',
                      '張柏韋',
                      '葉丙成，號丙紳，現任台大電機系教授、台大 MOOC 計畫執⾏⻑、無界塾創辦人、PaGamO 團隊創辦人。⾃幼觀父葉勝年教授對生徒之關懷，⽽立後受台大電機許博文⽼師「教授稱謂實不如師，多未傳道、解惑故」之啟發，輔以天⽣生雞婆性格，漸步上熱血教師一途。',
                      '延伸推薦', 
                      '我的成功，我決定', 
                      '一本為臺灣孩子量身打造，讀了最「有感」、最「有FU」的人物故事集，帶領孩子重新思考「成功」的定義，積極面對生命中的挫折與失敗， 在人生的舞臺上，創造出屬於自己的價值，讓自己的名字真正發光發亮！'
                     ],
  'lecturer-2-image':['p9Z49qPuH30', 'images/aesthetic-education/lecturer2-1.png', 'images/aesthetic-education/lecturer2-2.png'],
  'lecturer-2'      :['劉長灝/綠光表演學堂指導老師', 
                      '打開感官，你會發現世界很不一樣',
                      '感官可以讓你的世界變得繽紛色彩，利用感官，你可以創造你的世界，讓你的世界自由。',
                      '劉長灝',
                      '劉長灝老師，又稱大熊老師，為綠光劇團表演學堂專任講師，也是政治大學EMBA「戲劇與創意」的講師。豐富的教學經驗與親切幽默的個性，讓學習的過程活潑且輕鬆，善與學員互動，在遊戲中引導學員發現創意，並累積創意的能量。',
                      '延伸推薦', 
                      '綠光表演學堂 ', 
                      '綠光表演學堂由劉長灝（大熊老師）主持，帶領學員進行生活體驗、強化感官/情緒記憶、節奏/情境練習、聲音表情、說話呼吸等演員及表演技巧，從中培養出對生活的敏銳觀察，並發掘出每個人都有的獨特創造力。網站：http://www.greenray.org.tw/main/performance/news.html'
                     ],
  'exhibit-1'       :['美感細胞＿教科書改造計畫',
                      '【美感細胞】一場關於教科書的實驗', 
                      '十二年國教後，教科書與我們為伍的時間超過兩萬多個小時，但孩子一年平均去美術館的時間不到一次。如果有一天，這些課本就是一本本可以放進書包的美術館呢？ 我們相信美感的培養是需要長時間的薰陶在台灣的教育環境下，教科書和我們形影不離也成為了美感培養最好的媒介！',
                      
                      'https://www.flyingv.cc/projects/15219',
                      'https://www.facebook.com/aestheticell/'
                     ],
  'exhibit-2'       :['易禧創意',
                      '【易禧創意】讓教育領著設計前進', 
                      '易禧創意專注在設計專業教學，由業界專業設計師擔任授課講師，專案範例教學，整合數位工具與創意，傳授最新設計專業素養！累積培訓超過2萬名設計創意人才，並陸續與國外知名大學合作開辦碩士先修課程，開創設計留學先修新頁。',
                      
                      'http://www.ecgroup.com.tw/',
                      'https://www.facebook.com/ecdesignschools/'
                     ],
  'exhibit-3'       :['學學文化創意基金會',
                      '【學學文創】看見的不只是色彩', 
                      '長期投入文化色彩教育與研究，建置「學學台灣文化色彩」網站，為學習台灣文化色彩的互動平台，成功將數位典藏導入美感教育學習。同時推動網站與APP「XueXueColors」，以鄉土教育為起點，帶領孩子認同自然、土地、歷史與人文風貌，發現在地文化色彩，以藝術創作翻轉孩子的生命價值！',
                      
                      'http://www.xuexuecolors.com/index.php',
                      ''
                     ],
  'exhibit-4'       :['游墨之間',
                      '【游墨之間】用書法游於藝的無限可能', 
                      '「游墨之間」從書法線條與文字藝術發想，我們渴望將所學結合，在墨韻之間融入空間設計與音樂，呈現出書法的濃淡、韻味、疏密與一氣呵成等特色。使用創新的模式讓大家了解書法不只是兒時一項無聊的作業，即使是傳統文化也能有意想不到的表現方式。',
                      
                      '',
                      'https://www.facebook.com/moreinkbetween/'
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
      slidesPerView: 3,
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
          console.log("#aesthetic-education");
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
          <h3 className="f35 fw5 mb3 pr3-ns">雜學起義：聽{modalString[a][3]}聊美感</h3>
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
      if(modalString[a][4] === '') links = <div className="mb3 pl4-l pl0"><p className="w-100 mt2 tl"><span className="nowrap">官網：</span><a href={modalString[a][3]} target="_blank">{modalString[a][3]}</a></p></div>;
      else if(modalString[a][3] === '') links = <div className="mb3 pl4-l pl0"><p className="w-100 mt2 tl"><span className="nowrap">粉專：</span><a href={modalString[a][4]} target="_blank">{modalString[a][4]}</a></p></div>;
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
        <div className="video-container"><iframe title="youtube" width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a]+"?modestbranding=1&amp;rel=0&amp;controls=1"} frameBorder="0" allowFullScreen></iframe></div>
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
          <a href="#section-3">歷屆參展</a>
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
                    <h1 className={"w-100 fw5 hideme hidediv "+themeColor}>台灣的街景，你打幾分？</h1>
                    <h5 className="w-100 fw3 mt4 mb3 hideme hidediv">提到台灣街景，很多人會說：「台灣的街景不好看！ 」<br/><br/>為什麼我們的街景不好看？
					<br className="dn-s"/>因為台灣從小不重視美感教育，普遍缺乏對美的鑑賞力，導致整體環境缺乏「美學」。
					<br className="dn-s"/>這也是為什麼，我們需要美感教育來「美化」台灣。</h5>
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
            <h3 className="white">台灣並不缺乏美學，而是不重視美感教育。</h3>
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
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>美是什麼？美感怎麼學？</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">美是一種抽象的愉悅感受，正因沒有標準答案，所以令人著迷。該怎麼培養美感？才能帶領孩子看見美，貼近美？有一個最簡單的方式：「先感受美，再創造美」。</p>
                </div>
              </div>
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-2.png"} alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                  <h2 className={"w-100 fw5 lh-copy hideme hidediv "+themeColor}>先練習「感受」美</h2>
                  <h4 className={"w-100 fw5 lh-copy hideme hidediv "+themeColor}>培養能發現美的眼睛</h4>
                  <p className="w-100 fw3 mt3 hideme hidediv">法國雕塑家羅丹說：「生活中不缺少美，缺少的是發現美的眼睛。」美感的培養來自於生活中的廣泛體驗，無論是所見所聽所聞所觸，都可以啟發美的感受。讓孩子學會欣賞，就能從中汲取養分，也能慢慢發展、變化出屬於自己的美學風格。</p>
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
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>再試著「創造」美</h2>
                  <h4 className={"w-100 fw5 lh-copy hideme hidediv "+themeColor}>發展擁有自我風格的美</h4>
                  <p className="w-100 fw3 mt3 hideme hidediv">美追求的不是單一標準，而是培養「風格」、找到屬於自己對美的定義。學習的過程中，可能會先模仿練習，接著慢慢培養出變化與創造的能力，找到屬於自己的風格！當孩子學會不追求標準答案，並能欣賞其他人獨具風格的美學，台灣就再也不會是個缺乏美感的社會了。</p>
                  <div className={"mt4 button-round pr2 pl3 cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc hideme hidediv"} data-id="video-2" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-near-white pv5-ns pv4 df">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">嘿，這些人想跟你聊聊夢想！</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2">聽聽他們怎麼談「夢想」，再勇敢的夢一次吧！</h4>
            <div className="swiper-pagination mt4"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="ph3">
              <div className="swiper-container mt5-l mt4 mh2 mw6 mw-none-l center pb3">
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
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-4" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src={"images/"+pageURL+"/lecturer4-3.png"} alt=""/>
                    </figure>
                    <h4 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-4'][1]}</h4>
                    <h5 className="center ph3 tl mt3 pn fw4"><span className="fw7">{modalString['lecturer-4'][0].split('/')[0]}</span><span className="o-50">/{modalString['lecturer-4'][0].split('/')[1]}</span></h5>
                  </div>
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-3" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src={"images/"+pageURL+"/lecturer3-3.png"} alt=""/>
                    </figure>
                    <h4 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-3'][1]}</h4>
                    <h5 className="center ph3 tl mt3 pn fw5"><span className="fw7">{modalString['lecturer-3'][0].split('/')[0]}</span><span className="o-50">/{modalString['lecturer-3'][0].split('/')[1]}</span></h5>
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
            <h3 className="white">用教育，助美感一臂之力。</h3>
          </div>
        </section>
        {/*--- Section 3 ---*/}
        <section id="section-3" className="bg-near-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">偷看其他人的夢想</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2 mb-1">關於教育，一直都有一群踏實的逐夢人。<br className="dn-s" />歡迎你來隨時加入，跟這群最聰明的傻瓜一起作夢。</h4>
            <div className="mw9 center mt5-l mt4">
              <div className="cf mw6 mw-none-l center">
                {this.exhibitComponent(1)}
                {this.exhibitComponent(2)}
                {this.exhibitComponent(3)}
                {this.exhibitComponent(4)}
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 4 ---*/}
        <section id="section-4" className="bg-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h4 className="center fw4 mw7-l hideme hidediv mw6 ph2">關於如何實現夢，以及怎麼教會孩子們做夢<br className="dn-s" />相信你一定還有話想說<br/><br/>雜學起義，一場以非典型教育為名的夢想，現正起義中<br/><br/>如果你對自我實現、創新教育有興趣，<br className="dn-s" />想加入這場雜學起義，實踐更多創新可能<br className="dn-s" />現在就留下行動，成為我們的一份子！</h4>
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
                    <p className="center pl4-ns pr3-ns ph0 mt2 tl">除了夢想，我還想要瞭解更多！</p>
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
              <FontAwesome name='facebook-official' className="mr2 blue" alt="Share to Facebook" title="Share to Facebook" />立即分享</div>
          </div>
        </section>
      </div>
    );
  }
}

export default Topic2;
