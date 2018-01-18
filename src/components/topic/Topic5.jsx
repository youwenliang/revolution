/*global FB*/
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import Swiper from 'swiper';
import Modal from 'react-responsive-modal';
import loadImage from 'image-promise';
import $ from 'jquery';
import {Helmet} from "react-helmet";

var pageName = "尊重生命";
var pageURL = "respect-life";
var themeColor = "green";
var exhibitNum = 2;

/* Lightbox Contents */
var modalId = "";
var modalString = {
  'video-1'         :'azWAceBZJdI',
  'video-2'         :'Gmm5vRyLtr4',
  'lecturer-1-image':['azWAceBZJdI', 'images/self-realization/lecturer1-1.png', 'images/self-realization/lecturer1-2.png'],
  'lecturer-1'      :['葉丙成/台大電機系教授', 
                      '夢想這件事，是試出來的！',
                      '夢想這件事，是試出來的！只要勇敢試了，就穩贏的！',
                      '葉丙成',
                      '葉丙成，號丙紳，現任台大電機系教授、台大 MOOC 計畫執⾏⻑、無界塾創辦人、PaGamO 團隊創辦人。⾃幼觀父葉勝年教授對生徒之關懷，⽽立後受台大電機許博文⽼師「教授稱謂實不如師，多未傳道、解惑故」之啟發，輔以天⽣生雞婆性格，漸步上熱血教師一途。',
                      '延伸推薦', 
                      '我的成功，我決定', 
                      '一本為臺灣孩子量身打造，讀了最「有感」、最「有FU」的人物故事集，帶領孩子重新思考「成功」的定義，積極面對生命中的挫折與失敗， 在人生的舞臺上，創造出屬於自己的價值，讓自己的名字真正發光發亮！'
                     ],
  'lecturer-2-image':['Gmm5vRyLtr4', 'images/self-realization/lecturer2-1.png', 'images/self-realization/lecturer2-2.png'],
  'lecturer-2'      :['蘇仰志/雜學校創辦人', 
                      '大家在乎的是你做了什麼，而不是你知道什麼',
                      '勇敢去實踐，你就有機會接近實現夢想的那一刻。',
                      '蘇仰志',
                      '奧茲藝術負責人、不太乖教育節＆雜學校創辦人與主辦人。主張透過「展覽」與大眾溝通，提供對未來不確定的年輕朋友、家長與老師新指引，介紹教育的各種樣貌。',
                      '延伸推薦', 
                      '雜學校', 
                      '雜學校一個由下而上勇敢的社會創新運動，一個亞洲最具影響力的教育創新IP, 以台灣為基地集結台世界各地多元多樣的『非典型教育創新』的國際型博覽會與平台。寄望透過各種新世代的串連與實驗，對未來教育提出更多的可能與實踐。'
                     ],
  'lecturer-3-image':['uJECld1Yq48', 'images/self-realization/lecturer3-1.png', 'images/self-realization/lecturer3-2.png'],
  'lecturer-3'      :['楊逸帆/《學習的理由》導演', 
                      '用熱情、專長和關懷去實現夢想',
                      '用熱情、專長和關懷去實現夢想。',
                      '楊逸帆',
                      '楊逸帆1995年出生於教職家庭，從小接受體制外教育。學校沒有圍牆、鐘聲與課本，學習方向由好奇心引領。曾經拍攝紀錄片《學習的理由》、同時也是《Awakening青醒》青年教改團隊創辦人。目前正在國際Alternative Education Resource Organization 擔任台灣負責人。',
                      '延伸推薦', 
                      '學習的理由', 
                      '《學習的理由》是由楊逸帆執導的一部教育紀錄片。拍攝自己在人文國中小的朋友們面對基測的過程，並追蹤他們一路到大學的改變歷程，探討升學與分流體系對青少年的影響，更觸及人們為何「換了位子就換了腦袋」此一大哉問。https://www.zeczec.com/projects/reasontostudy'
                     ],
  'lecturer-4-image':['Sy_q0Q8b5z8', 'images/self-realization/lecturer4-1.png', 'images/self-realization/lecturer4-2.png'],
  'lecturer-4'      :['鄭國威/泛科學總編輯', 
                      '不要太在乎結果，先去做你可以做的事情吧！',
                      '不要太在乎結果，先去做你可以做的事情吧！',
                      '鄭國威',
                      '小時候是那種很喜歡看科學讀物，以為自己會成為科學家，但是長大之後因為數理太爛所以早早放棄科學夢的無數人其中之一。關心台灣的傳播環境跟媒體品質，現在是PanSci 泛科學網的總編輯。',
                      '延伸推薦', 
                      '泛科學', 
                      'PanSci泛科學是台灣最大科學網站，邀請台灣科學研究者、教育者、愛好者、以及所有受科學影響的人們，共同暢談科學、將高深龐雜的科學發展重新放置回台灣公共論壇中，並且用理性思考社會議題中的科學面向。'
                     ],
  'exhibit-1'       :['綿羊犬百寶箱',
                      '【綿羊犬百寶箱】遊戲學習開啟孩子的無限潛能', 
                      '綿羊犬百寶箱全國首創的「動手學習」教育玩具品牌，以臺灣原創．臺灣製造的高品質產品，提供孩子全新的遊戲與學習體驗！',
                      
                      'http://www.shepherdkit.com.tw/',
                      'https://www.facebook.com/Shepherdkit/'
                     ],
  'exhibit-2'       :['果陀劇場',
                      '【果陀劇場】果陀劇場，用生命活化歷史', 
                      '「活化歷史」在學校可以是生命教育課程、在家庭能影響彼此的關係、到了社區則能發展獲得多元的回饋，傳遞源源不絕的能量。期待藉由多面向的推廣，讓更多爺奶認知每一個當下的美好，讓更多孩子學習互重而珍惜，讓更多人有面對「老」的勇氣。',
                      
                      'http://godot.org.tw/',
                      'https://www.facebook.com/godotfans/'
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
          <h3 className="f35 fw5 mb3 pr3-ns">雜學起義：聽{modalString[a][3]}聊夢想</h3>
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
                    <h1 className={"w-100 fw5 hideme hidediv "+themeColor}>向生命學習</h1>
                    <h5 className="w-100 fw3 mt4 mb3 hideme hidediv">尊重生命的本質，
					<br className="dn-s"/>在於學習關懷不同形式的生命，
					<br className="dn-s"/>從中體會生命的寶貴價值，打造一個多樣而溫柔的世界。</h5>
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
            <h3 className="white">「唯有了解，才有關心；唯有關心，才有行動；唯有行動，生命才有希望」—— 珍古德 Jane Goodall</h3>
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
                  <h4 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>生命教育第一步：尊重他人</h4>
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>尊重每個獨一無二的個體</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">尊重生命其實並不難，就從同理身邊的人開始。每個人，包含自己，都是獨一無二的生命個體，需要被理解與尊重。學會欣賞自己的價值，也去尊重他人的獨特，在人與人的相處中用同理心去看待並接納與自己不同的存在，就是一種尊重。</p>
                </div>
              </div>
              <div className="center cf df dfc-s intro mb5 mw6 mw-none-l">
                <div className="o1 w-100 w-50-l pr4-l">
                  <figure className="mh0 ml0-l center mb3 hideme hidediv">
                    <img src={"images/"+pageURL+"/雜ＸTONE_icon-2.png"} alt=""/>
                  </figure>
                </div>
                <div className="o2 w-100 w-50-l pl4-l tl df dfc afs">
                  <h4 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>生命教育第二步：尊重動物</h4>
                  <h2 className={"w-100 fw5 lh-copy hideme hidediv "+themeColor}>尊重陪伴身邊的同伴動物</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">陪伴在我們身邊的貓狗雖然可愛，卻不是可以丟棄的玩具，飼養之前要有完整的準備去迎接一個「生命」，而非只是一時興起。過程中，除了餵養牠們，更要理解牠們同樣需要照顧，需要陪伴，學習用正確的方式善待牠們，尊重並體會不同生命的獨特性。</p>
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
                  <h4 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>生命教育第三步：尊重自然</h4>
                  <h2 className={"w-100 fw5 hideme hidediv lh-copy "+themeColor}>尊重互相依存的自然萬物</h2>
                  <p className="w-100 fw3 mt3 hideme hidediv">除了朝夕相處的同伴動物，還有一群與我們共享同一座家園的野生動物，就在不遠的周遭，只是我們很少留心發現。從關懷動物生命，擴大至關懷整體環境的生命，讓尊重生命的範圍不斷擴大，才能為下一代打造出一個多樣而美麗的世界。</p>
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
            <h3 className="white">「尊重各種生命的生存權，世界將­會多樣而美麗。」—— 珍古德 Jane Goodall</h3>
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

