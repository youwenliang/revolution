/*global FB*/
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';

var pageName = "追求夢想";
var pageURL = "self-realization";
var exhibitNum = 12;

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'video-1'         :'aqz-KE-bpKQ',
  'video-2'         :'aqz-KE-bpKQ',
  'lecturer-1-image':['aqz-KE-bpKQ', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-1'      :['葉丙成 / 台大教授', 
                      '講師的一段話，講師的兩段，兩行兩行兩行．',
                      '在得果高雖單子形多北在得果高雖\n單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '延伸推薦', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'lecturer-2-image':['aqz-KE-bpKQ', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-2'      :['葉乙成 / 台大教授', 
                      '講師的一段話，講師的兩段，兩行兩行兩行．',
                      '在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '延伸推薦', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'lecturer-3-image':['aqz-KE-bpKQ', 'images/400x400.png', 'images/400x400.png'],
  'lecturer-3'      :['葉甲成 / 台大教授', 
                      '講師的一段話，講師的兩段，兩行兩行兩行．',
                      '在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北在得果高雖單子形多北',
                      '名字',
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹',
                      '延伸推薦', 
                      '字幕字幕', 
                      '介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹'
                     ],
  'exhibit-1'       :['臺灣吧',
                      '【臺灣吧】用動畫說故事，新媒體的教育革命', 
                      '臺灣吧是自產內容的新媒體公司，目標是『讓臺灣成為全球數位內容的燈塔』。我們試著以優質的數位內容，替臺灣找到下一個不可取代的理由， 並努力解決教育、傳播與娛樂等產業正在面臨的困境。',
                      
                      'http://www.taiwanbar.cc/',
                      'https://www.facebook.com/taiwanbarstudio/'
                     ],
  'exhibit-2'       :['宜蘭人文國中小士林行動教室',
                      '【宜蘭人文中小】適性教育，一起無框架學習', 
                      '以開展天賦為教育核心，實踐「生活即教育、社會即學校」，運用行動學習模式，並以經驗知識取代套裝知識，搭配多元智能理論，再配合每個孩子的發展階段與興趣，彈性調整課程內容與進行方式。以達到適性化、個別化，充分開展學生天賦的理想。',
                      
                      'http://www.explorationalclassroom.com/',
                      'https://www.facebook.com/jwpsnews/'
                     ],
  'exhibit-3'       :['青醒',
                      '【青醒】青年覺醒，點燃一場學習的革命', 
                      '《Awakening青醒》是一個以行動為導向的國際草根媒體平台，以「青年探索與行動的攻略」自許，取名自「青年覺醒」。青年覺醒，過程即是目的：從改變自己的學習歷程開始，Awakening試圖點燃一場學習革命，啟動華人教育的典範轉移。',
                      
                      'http://www.awakeningedu.org/',
                      'https://www.facebook.com/Awakening.edu/'
                     ],
  'exhibit-4'       :['接棒啟蒙計畫',
                      '【接棒】與未來接棒，讓求學選擇不再迷茫', 
                      '我們都知道我們身處在一個不完美的教育體制下，但一切都有解了！接棒是非營利的教育組織，是一個可以將社會善意轉化成高中生探索自我價值的平台。我們相信，天賦、熱情、態度與機會是一個學生活出卓越人生的關鍵！',
                      
                      'http://thebatonproject.org/',
                      'https://www.facebook.com/BatonEnlightenmentProject/'
                     ],
  'exhibit-5'       :['可能性',
                      '【可能性】用副本，發掘你的無限可能', 
                      '可能性 Possibility，透過自媒體和資訊設計的力量，讓更多關於生涯選擇的可能性得以被看見，同時也藉我們的倡議，幫助更多人去思考、挖掘並去實踐潛藏在自己身上的可能性。我們相信，教育環境唯有連年輕人都願意開始主動捲起袖子，才有可能推得動真正的改革。',
                      
                      '',
                      'https://www.facebook.com/Possibility.tw/'
                     ],
  'exhibit-6'       :['N次坊',
                      '【N次坊】是學生，也是講師！', 
                      'Ｎ次坊的工作坊定位是從 0 到 1 的「入門工作坊」。學生講者透過Ｎ次坊將技能系統化設計成工作坊、分享而深化自身技能，並將熱情感染給更多人去體驗；透過多方學習，不斷疊加，養成分享的態度，達到學習Ｎ次方。',
                      
                      '',
                      'https://www.facebook.com/npower.workshop/'
                     ],
  'exhibit-7'       :['他群',
                      '【他群】運用天賦，讓世界變得更好吧 ！', 
                      '他群，一個協助他人「自我探索」且促進「社會意識」的教育設計團隊。我們利用「概念遊戲化」將許多的概念轉譯成實體的原創遊戲（議想世界＆夢想之道）。將遊戲融入到課程與活動當中，讓參與者能在遊戲的體驗中探索自我且深刻地認識社會議題，進而找到人生其他的可能性。',
                      
                      'https://taqun.club/',
                      'https://www.facebook.com/taqun.taipei/'
                     ],
  'exhibit-8'       :['交點文化股份有限公司',
                      '【交點】創造交點，打開對自己的另一種想像', 
                      '交點相信，分享，是夢想啟程的起點，分享讓善的漣漪持續下去。每個月交點固定舉辦聚會，讓人與人相遇、交流。並透過活動舉辦、顧問諮詢、課程服務，希望未來可以打造一個資源共享的環境，提供給社會上的年輕人們，讓他們在追尋夢想的道路上，不再孤單。',
                      
                      'http://crosspoint.tw/',
                      'https://www.facebook.com/crosspoint0505/'
                     ],
  'exhibit-9'       :['YOTTA 線上教育平台',
                      '【YOTTA】學習無限大，技能學習最佳平台', 
                      'YOTTA是來自臺灣，全中文的跨領域教育平台。我們致力於數位教學內容規劃，並結合實體課程資源、虛實整合，創造嶄新學習體驗。平台上的課程分成三大主題：生活、專業技能，以及語言。眾多實務導向的課程，幫助你快速習得實用技能，轉化成實體收入。',
                      
                      'http://www.yottau.com.tw/',
                      'https://www.facebook.com/yottau/'
                     ],
  'exhibit-10'       :['技職3.0',
                      '【技職3.0】為技職，深築一條從根本改善的路', 
                      '獨立媒體《技職3.0》長期關注「技職教育」與「職業訓練」議題，以監督政府施政、凝聚技職圈並傳承技職技藝工匠精神為使命。2016年起辦理系列實體活動《技職研討會》、《技職講堂》以及《技職咖啡館》，深度耕耘技職教育與職業訓練圈。',
                      
                      'http://www.tvet3.info/',
                      'https://www.facebook.com/Craftsmanship.Insights/'
                     ],
  'exhibit-11'       :['Yourator 新創職涯資訊平台',
                      '【Yourator】尋找夢想工作，開拓職涯新視野', 
                      'Yourator 是新世代專屬的新創求職與職涯資訊平台，Yourator 的使命在於發掘有核心價值並擴張成長的新創公司，以策展式的招募介面，協助新世代取得完整清楚的新創團隊經營內容、創業理念、社會價值及團隊文化。',
                      
                      'https://www.yourator.co/',
                      'https://www.facebook.com/yourator.co/'
                     ],
  'exhibit-12'       :['SHOKUZiNE 職人',
                      '【職人】建立夢想的方式還有多少可能？', 
                      '一個重拾專業、尊重專業的時代 一份翻轉臺灣職業認識的原創社會企業內容 透過書寫職人故事、記錄教育及業界現場，《職人》SHOKUZiNE自許成為傳遞夢想的媒體，替孩子點亮未來的閃閃火光。',
                      
                      'https://www.shokuzine.com/',
                      'https://www.facebook.com/SHOKUZiNE/'
                     ]
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
    for ( var i = 1; i <= 6; i++) {
      images.push('images/'+pageURL+'/雜ＸTONE_icon-0'+i+'.png');
    }
    for ( var j = 1; j <= exhibitNum; j++) {
      images.push('images/'+pageURL+'/exhibit_'+j+'_cover.jpg');
      images.push('images/'+pageURL+'/exhibit_'+j+'_logo.jpg');
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
          <h3 className="f35 fw5 mb3 pr3-ns">{modalString['lecturer-1'][1]}</h3>
          <div className="video-container mh0 mb3"><iframe title="youtube" width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a+'-image'][0]+"?rel=0&amp;controls=1&amp;showinfo=0"} frameBorder="0" allowFullScreen></iframe></div>
          <p className="mb5">{modalString[a][2]}</p>
          <div className="bg-white df dfc-s center pa3 pa4-m pa0-l pr4-l mb4">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw200">
                <img src={modalString[a+'-image'][1]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc">
              <h3 className="w-100 fw5 tc tl-l mt3 mt0-l"><span className="fw7">{modalString[a][0].split('/')[0]}</span><span className="o-50">/{modalString[a][0].split('/')[1]}</span></h3>
              <p className="w-100 mt2 tl">{modalString[a][4]}</p>
            </div>
          </div>
          <hr/>
          <h3 className="w-100 fw5 mt1 mb4">{modalString[a][5]}</h3>
          <div className="bg-near-white df dfc-s center pa3 pa4-m pa0-l pr4-l mb3">
            <div className="o1 w-100 w-30-l">
              <figure className="db center ma0 mw5">
                <img src={modalString[a+'-image'][2]} alt=""/>
              </figure>
            </div>
            <div className="o2 w-100 w-70-l pl4-l tl-l tc df dfc">
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
        <div className="video-container"><iframe title="youtube" width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a]+"?rel=0&amp;controls=1&amp;showinfo=0"} frameBorder="0" allowFullScreen></iframe></div>
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
          <a href="#section-1">主題引言</a>
          <a href="#section-2">講師介紹</a>
          <a href="#section-3">參展單位</a>
          <a href="#section-4">額外資訊</a>
        </div>
        <p>目錄</p>
        {/* Modal */}
        <Modal open={open} onClose={this.onCloseModal} little>
          {this.modalContent(modalId)}
        </Modal>
        <header id="section-0" className="min-vh-100 pv5-l pt2 pb6 df dfjc">
          <div className="w-100 df dfc t30 relative">
            <div className="center w-100 mw8 ph5-l ph3">
              <div className="center mw9 ph2">
                <div className="center cf df mw6 mw-none-l dfc-s intro">
                  <div className="o1 w-100 w-50-l tc">
  	                <video id="cover-video" className="cover-video mh0 ml0-l center mb3 mb0-l hideme hidediv" width="100%" autoPlay muted loop poster={"images/"+pageURL+"/cover_video_poster.png"}>
                      <source src={"images/"+pageURL+"/cover_video.mp4"} type="video/mp4" />
                    </video>
                    <figure className="mh0 ml0-l center mb3 mb0-1 hideme hidediv">
                      <img src={"images/"+pageURL+"/cover_video_poster_small.png"} alt=""/>
                    </figure>
                  </div>
                  <div className="o2 w-100 w-50-l pl5-l tl df dfc afs">
                    <h1 className="w-100 fw5 blue hideme hidediv">作文題目：我的夢想</h1>
                    <p className="w-100 fw3 mt4 mb3 hideme hidediv">小時候的你，寫過這個作文題目吧！你還記得自己寫下什麼嗎？<br/><br/>時間過得很快，曾為這個題目苦惱的你，也不知不覺的長大了。身為大人的你，已經知道「夢想」是什麼了嗎？</p>
                    <div id="fb-like" className="fb-like w-100 mt3 hideme hidediv mw6" data-href={"http://revolution.toneskill.co/"+pageURL} data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center w-100 df dfjc fadein" id="scrolling">
              <img src="images/scroll.gif" className="center o-50" width="90" height="90" alt="scroll" />
            </div>
          </div>
        </header>
        {/* Banner */}
        <section className="banner bg-blue">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">夢想，總帶點浪漫、彷彿不切實際，<br className="dn-s"/>不小心說出來，還會有點難為情…</h3>
          </div>
        </section>
        {/*--- Section 1 ---*/}
        <section id="section-1" className="bg-white pv5-ns pv4 df">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <div className="center mw9 ph2">
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-01.png"} alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc afs">
                  <h2 className="w-100 fw5 hideme hidediv lh-copy blue">從小到大，沒有一堂課，教我們如何實現夢想</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">星爺說，做人如果沒夢想，那跟鹹魚有什麼分別？
                  <br/><br/>夢想，可以很簡單，但也可以很難實現夢想的過程，必須先經歷「尋夢」和「圓夢」兩階段。
                  <br/><br/>尋夢過程，「多方體驗」、「自我認識」和「獨立思考」會是三大重點。在這個階段，我們會更加瞭解自己，並且理解現實，最後終將內化出一個適合自己的夢想。
                  <br/><br/>而圓夢階段，我們又將學會尋找資源、夥伴、機會，並且培養出足夠的抗壓力，面對各式各樣的挫敗與挑戰。</p>
                </div>
              </div>
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-02.png"} alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                  <h2 className="w-100 fw5 lh-copy blue hideme hidediv">尋夢：夢想，藏在哪裡？</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">人們的夢想都來自哪裡？關於夢想，充滿不同的契機，可能是一個靈感，一種嚮往，一次獨一無二的生命經驗，啟發了心中的什麼，讓人看見自己的與眾不同。但隨著社會框架和標準規範，尋找夢想也會變得越來越困難。<br/><br/>你的夢想呢，它藏在哪裡？</p>
                  <div className="mt4 button-round pr2 pl3 cp fw5 pa2 bg-light-blue bg-animate hover-bg-blue white tc hideme hidediv" data-id="video-1" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
              <div className="center cf df dfc-s intro mw6 mw-none-l">
                <div className="o2-l w-100 w-50-l pl4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-03.png"} alt=""/>
                  </figure>
                </div>
                <div className="o1-l w-100 w-50-l pr4-l tl df dfc afs">
                  <h2 className="w-100 fw5 hideme hidediv lh-copy blue">尋夢：夢想，藏在哪裡？</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">人們的夢想都來自哪裡？關於夢想，充滿不同的契機，可能是一個靈感，一種嚮往，一次獨一無二的生命經驗，啟發了心中的什麼，讓人看見自己的與眾不同。但隨著社會框架和標準規範，尋找夢想也會變得越來越困難。<br/><br/>你的夢想呢，它藏在哪裡？</p>
                  <div className="mt4 button-round pr2 pl3 cp fw5 pa2 bg-light-blue bg-animate hover-bg-blue white tc hideme hidediv" data-id="video-2" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-near-white pv5-ns pv4 df">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">嘿，這些人想跟你聊聊夢想！</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="swiper-pagination mt4 dn-l"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="ph3">
              <div className="swiper-container mt5-l mt4 mh2 mw6 mw-none-l center pb3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-1" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h4 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-1'][1]}</h4>
                    <h5 className="center ph3 tl mt3 pn fw5"><span className="fw7">{modalString['lecturer-1'][0].split('/')[0]}</span><span className="o-50">/{modalString['lecturer-1'][0].split('/')[1]}</span></h5>
                  </div>
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-2" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
                    </figure>
                    <h4 className="center ph3 tl mt3 pn fw5">{modalString['lecturer-2'][1]}</h4>
                    <h5 className="center ph3 tl mt3 pn fw5"><span className="fw7">{modalString['lecturer-2'][0].split('/')[0]}</span><span className="o-50">/{modalString['lecturer-2'][0].split('/')[1]}</span></h5>
                  </div>
                  <div className="swiper-slide bg-white cp pb4 content-block ba b--moon-gray br1" data-id="lecturer-3" onClick={this.onOpenModal}>
                    <figure className="db center w-100 pn topImg">
                      <img src="images/1920x1080.png" alt=""/>
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
        <section className="banner bg-blue">
          <div className="center w-100 mw6 mw-none-l ph3 pv5 tc hideme hidediv">
            <h3 className="white">夢想，總帶點浪漫、彷彿不切實際，<br className="dn-s"/>不小心說出來，還會有點難為情…</h3>
          </div>
        </section>
        {/*--- Section 3 ---*/}
        <section id="section-3" className="bg-near-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">影人一指然</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2 mb-1">無血氣國意中須素，照一現快府半頭小細</h4>
            <div className="mw9 center mt5-l mt4">
              <div className="cf mw6 mw-none-l center">
                {this.exhibitComponent(1)}
                {this.exhibitComponent(2)}
                {this.exhibitComponent(3)}
                <div className="hide" id="more_2">
                {this.exhibitComponent(4)}
                {this.exhibitComponent(5)}
                {this.exhibitComponent(6)}
                <div className="hide" id="more_1">
                {this.exhibitComponent(7)}
                {this.exhibitComponent(8)}
                {this.exhibitComponent(9)}
                {this.exhibitComponent(10)}
                {this.exhibitComponent(11)}
                {this.exhibitComponent(12)}
                </div>
                </div>
              </div>
              <div className="center button mt4-l mt2 cp fw5 bg-light-blue bg-animate hover-bg-blue white hideme hidediv tc" onClick={this.showMore}>閱讀更多</div>
            </div>
          </div>
        </section>
        {/*--- Section 4 ---*/}
        <section id="section-4" className="bg-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc">
            <h4 className="center fw4 mw7-l hideme hidediv mw6">無血氣國意素，照一現快府半頭小半頭血氣國意中須半頭血氣國意中須細無血氣國意中須素，照一現快府半頭小細無血氣國意中須素，照一現快府半頭血氣國意中須素細．</h4>
            <div className="mw9 center mt5-l mt4 mb4-l">
              <div className="center cf df dfc-s mw6 mw-none-l">
                <div className="o1-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba bw2 b--moon-gray pa3 pl1-l df dfc br3">
                    <figure className="db center mw160 mt2">
                      <img src={"images/"+pageURL+"/雜ＸTONE_icon-05.png"} alt=""/>
                    </figure>
                    <h3 className="center mt0 fw5">次要次要</h3>
                    <p className="center pr4-ns pl3-ns ph0 mt2 tl">在較城是功不持天只政差是時：刻會是用會我．</p>
                    <a href="" target="_blank">
                      <div className="center mv4-l mt4 mb3 button cp fw5 pa2 bg-light-blue bg-animate hover-bg-blue white">分享</div>
                    </a>
                  </div>
                </div>
                <div className="o2-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba bw2 b--moon-gray pa3 df dfc br3">
                    <figure className="db center mw200 mt3">
                      <img src={"images/"+pageURL+"/雜ＸTONE_icon-04.png"} alt=""/>
                    </figure>
                    <h3 className="center mt2 fw5">主要主要</h3>
                    <p className="center ph2-ns ph0 mt2 tl">在較城是功不持天只政差是時：刻會是用所了不陽會我．</p>
                    <a href="" target="_blank">
                      <div className="center mb3 mt4 button cp fw5 pa2 bg-light-blue bg-animate hover-bg-blue white">分享</div>
                    </a>
                  </div>
                </div>
                <div className="o3-l fl w-100 w-third-l w-100 pa2 hideme hidediv mw6">
                  <div className="bg-white ba bw2 b--moon-gray pa3 pr1-l df dfc br3">
                    <figure className="db center mw160 mt2">
                      <img src={"images/"+pageURL+"/雜ＸTONE_icon-06.png"} alt=""/>
                    </figure>
                    <h3 className="center mt0 fw5">次要次要</h3>
                    <p className="center pl4-ns pr3-ns ph0 mt2 tl">在較城是功不持天只政差是時：刻會是用會我．</p>
                    <a href="" target="_blank">
                      <div className="center mv4-l mt4 mb3 button cp fw5 pa2 bg-light-blue bg-animate hover-bg-blue white">分享</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Banner */}
        <section className="banner bg-blue">
          <div className="center w-100 mw6 mw-none-l ph3 pv3 tc">
            <h4 className="center fw5 mt4 mw7-l hideme hidediv mw6 white">無血氣國意素，照一現快府半頭小半頭血氣國意中須半頭</h4>

            <div className="center mv4 button cp hideme hidediv fw5 bg-white bg-animate hover-bg-near-white blue" onClick={this.socialShare}>
              <FontAwesome name='facebook-official' className="blue mr2" alt="Share to Facebook" title="Share to Facebook" />分享</div>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicD;
