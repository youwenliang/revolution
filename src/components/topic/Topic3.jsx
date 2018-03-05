/*global FB*/
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';
import {Helmet} from "react-helmet";

var pageName = "思辨能力";
var pageURL = "critical-thinking";
var themeColor = "purple";
var exhibitNum = 5;

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'video-1'         :'OCd4PpxoSdY',
  'video-2'         :'h-MDtCZCOZc',
  'lecturer-1-image':['OCd4PpxoSdY', 'images/critical-thinking/lecturer1-1.png', 'images/critical-thinking/lecturer1-2.png'],
  'lecturer-1'      :['黃益中/大直高中公民老師', 
                      '理性思辨，是公民社會的第一步',
                      '每個人都應該用理性的角度進行思辨，如果做不到，就無法公眾討論，公民社會也無從開始。',
                      '黃益中',
                      '一九七九年生，新竹高中、師大公民訓育系畢，政大東亞所碩士，海軍陸戰隊預官。曾任國中教師，現為台北市大直高中公民與社會科教師、十二年國教高級中等以下學校課程審議大會委員。課堂外的身分是台灣居住正義協會理事長，「巢運」發起人之一，並擔任公民教師行動聯盟發言人。著有《思辨：熱血教師的十堂公民課》以及《向高牆說不》（寶瓶文化）。',
                      '延伸推薦', 
                      '思辨：熱血教師的十堂公民課', 
                      '透過師生討論、激辯、對話的過程，轉化我們日日面對爆炸資訊下的「理性思辨」能力，讓近年來台灣社會最重大的人權議題、被忽略的弱勢族群，在學生的辯論中發酵，重獲關注。公民老師教什麼？黃益中以《思辨──熱血教師的十堂公民課》這本書，做扎根的工作。因為，當社會資源分配嚴重傾斜，階級不再流動，教育，是最後的希望！'
                     ],
  'lecturer-2-image':['h-MDtCZCOZc', 'images/critical-thinking/lecturer2-1.png', 'images/critical-thinking/lecturer2-2.png'],
  'lecturer-2'      :['朱家安/哲學雞蛋糕腦闆', 
                      '思辨能力是一種綜合性的溝通能力',
                      '思辨能力不只是內在的思考能力，而且是一種從外而內理解，以及從內而外的表達的能力。',
                      '朱家安',
                      '多年來面無表情地致力於哲學教育，雖然人稱「雞蛋糕腦闆」但其實不受兒童喜愛。著有簡單易懂的哲學書《哲學哲學雞蛋糕》以及同性婚姻爭論的論點分析書《護家盟不萌？》。',
                      '延伸推薦', 
                      '哲學雞蛋糕', 
                      '哲學哲學雞蛋糕是朱家安在2007年開始撰寫的哲學部落格，部分內容於2013年集結出版同名書籍、2015年與台灣吧合作推出系列哲學短片。'
                     ],
  'exhibit-1'       :['時習教育工作室',
                      '【時習教育工作室】將學科運用於生活', 
                      '你問過「學這有什麼用」嗎？學生常因認為學科知識在生活中沒用、與己無關，而提不起興趣。其實各種學科，都來自生活。時習教育工作室，將學科還原回生活，重新發掘學科與生活的連結。',
                      
                      'http://www.lifeeducationstudio.com/',
                      'https://www.facebook.com/LIFEeducationstudio/'
                     ],
  'exhibit-2'       :['上尚文化',
                      '【上尚】趣味科學實驗激發探索世界的熱情', 
                      '現今基礎教育之潮流必趨使社會、學校及家庭三方共參、共思與共同討論。為了在創新教育中注入新的元素與規範，上尚文化以多年兒童科普教育推廣經驗，讓孩子們透過有趣的科學實驗與深入淺出的創意教學，啟發孩子的觀察解析以及分析辯證的能力，了解「生活即是科學」的真諦。',
                      
                      'http://www.sun324.com/index.php',
                      'https://www.facebook.com/ntut324/'
                     ],
  'exhibit-3'       :['玩轉學校',
                      '【玩轉學校】翻轉教育，玩出思辨能力', 
                      '玩轉學校，一間沒有校舍與固定老師的學校，我們想要用遊戲，點燃孩子自主學習的熱情，讓孩子知道如何開創未來、並且面對各種挑戰，喚醒他們的天賦與熱情，成為未來的領航員。',
                      
                      'http://www.worldpeacegame.tw/',
                      'https://www.facebook.com/PleySchool/'
                     ],
  'exhibit-4'       :['學思達',
                      '【學思達】改變填鴨式教育的動力', 
                      '有感於求學過程中「填鴨教育」對學習的扼殺，張輝誠老師自創「學思達」教學法，真正訓練學生自「學」、「思」考、討論、分析、歸納、表「達」、寫作等一生受用的能力。',
                      
                      'http://lte-taiwan.weebly.com/',
                      'https://www.facebook.com/groups/780188175346334/'
                     ],
  'exhibit-5'       :['清水小校',
                      '【清水小校】將學習決定權交回給學生', 
                      '清水小校，位於宜蘭三星的共學團體，但我們更覺得自己是一所學校，一所另類教育的完全中學。由一群在體制外發展多年的學科老師，帶著各自交疊的教育理念及想法，創立了清水小校，一個期待各位來一起創造可能性的地方。',
                      
                      'http://www.qsteens-edu.com/index.php',
                      'https://www.facebook.com/qsnotbook/'
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
          console.log("#critical-thinking");
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
          <h3 className="f35 fw5 mb3 pr3-ns">雜學起義：聽{modalString[a][3]}聊思辨</h3>
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
        <div className="video-container">
          <iframe title="youtube" width="853" height="480" src={"https://www.youtube.com/embed/"+modalString[a]+"?modestbranding=1&amp;rel=0&amp;controls=1"} frameBorder="0" allowFullScreen></iframe>
          <div className="close-video cp">關閉影片</div>
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
                    <h1 className={"w-100 fw5 hideme hidediv "+themeColor}>快「思」慢「辨」</h1>
                    <h3 className={"w-100 fw5 hideme hidediv "+themeColor}>先思考再判斷，以邏輯做辯證！</h3>
                    <h5 className="w-100 fw3 mt4 mb3 hideme hidediv">網路超載的時代，
					<br className="dn-s"/>面對越來越多的資訊、資料與資源，
					<br className="dn-s"/>越應該正視思辨能力的養成，
					<br className="dn-s"/>懂得辨別思考，不被神邏輯給蒙蔽。</h5>
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
            <h3 className="white">資訊越超載，思辨能力越重要！</h3>
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
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>培養思辨能力，就是學會「思考」與「辯證」！</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">思辨能力，就是「思考」與「辯證」，影響一個人面對事物時思考、判斷和行動的能力。培養孩子的思辨能力，可以從以下兩點開始著手：</p>
                </div>
              </div>
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-2.png"} alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                  <h4 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>思辨能力第一步</h4>
                  <h2 className={"w-100 fw5 lh-copy hideme hidediv "+themeColor}>中立的心態＋懷疑的精神</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">養成思辨能力的內在條件，在於擁有中立的心態與懷疑的精神。擁有中立的心態，讓孩子可以跳脫偏見，不以人廢言，從他人的論述中看出好的或是不好的觀點。保持懷疑的精神，讓孩子不會輕信資訊，培養出資料蒐集及判讀的重要能力。</p>
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
                  <h4 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>思辨能力第二步</h4>
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>具備「剖析議題」的能力</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">除了正確的內在心態，還要有適當的能力與方法做到議題剖析。要能正確理解議題，除了需要「邏輯能力」以及「語文能力」外，還要有基本知識、科學素養、資訊判讀、找資料的能力等等，才能讓孩子從似是而非的資訊中，找到正確的方向。</p>
                  <div className={"mt4 button-round pr2 pl3 cp fw5 pa2 bg-light-"+themeColor+" bg-animate hover-bg-"+themeColor+" white tc hideme hidediv"} data-id="video-2" onClick={this.onOpenModal}>聽聽其他人的經驗 ＞</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 2 ---*/}
        <section id="section-2" className="bg-near-white pv5-ns pv4 df">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">嘿，這些人想跟你聊聊思辨！</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2">對他們來說，思辨是 ＿＿？</h4>
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
            <h3 className="white">我思，故我在。</h3>
          </div>
        </section>
        {/*--- Section 3 ---*/}
        <section id="section-3" className="bg-near-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h2 className="fw5 hideme hidediv ph2">看非典型教育怎麼教思辨</h2>
            <h4 className="fw4 mt3 hideme hidediv ph2 mb-1">跟著他們一起跳脫框架，啟發觀點。<br className="dn-s" />體會非典型教育創造的思辨之力。</h4>
            <div className="mw9 center mt5-l mt4">
              <div className="cf mw6 mw-none-l center">
                {this.exhibitComponent(1)}
                {this.exhibitComponent(2)}
                {this.exhibitComponent(3)}
                {this.exhibitComponent(4)}
                {this.exhibitComponent(5)}
              </div>
            </div>
          </div>
        </section>
        {/*--- Section 4 ---*/}
        <section id="section-4" className="bg-white pv5-ns pv4">
          <div className="center w-100 mw8 ph5-l ph3 tc-ns tl">
            <h4 className="center fw4 mw7-l hideme hidediv mw6 ph2">關於思考方式，以及辯證能力的培養，<br className="dn-s" />我們也想聽聽你的脈絡。<br/><br/>雜學起義，一場以非典型教育的思辨之旅，現正起義中<br/><br/>如果你對自我實現、創新教育有興趣，<br className="dn-s" />想加入這場雜學起義，實踐更多創新可能<br className="dn-s" />現在就留下行動，成為我們的一份子！</h4>
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
                    <p className="center pl4-ns pr3-ns ph0 mt2 tl">除了思辨，我還想要瞭解更多！</p>
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
