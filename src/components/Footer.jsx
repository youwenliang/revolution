import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="center w-100">
        <div className="center mw8 bg-white pv4 ph5-l ph3">
          <h3 className="center fw5 mt3 mw7-l hideme hidediv mw6 tc mb4 ph2 tracked-l">關於我們</h3>
          <hr className="ph2" />
          <div className="center df dfc-s mv4 space-around ph2 align-start">
            <div className="mw350 hideme hidediv">
              <figure className="mw200 center pb3">
                <a href="http://zashare.org" target="_blank" rel="noopener noreferrer">
                  <img id="zashare" src="images/雜ＸTONE_icon-04.png" alt="zashare" />
                </a>
              </figure>
              <p>一個由下而上勇敢的社會創新運動，一個亞洲最具影響力的教育創新IP, 以台灣為基地集結台世界各地多元多樣的『非典型教育創新』的國際型博覽會與平台。寄望透過各種新世代的串連與實驗，對未來教育提出更多的可能與實踐。</p>
            </div>
            <div className="hideme hidediv">
              <figure className="mw4 pv3">
                <img src="images/雜ＸTONE_icon-03.png" alt="" />
              </figure>
            </div>
            <div className="mw350 hideme hidediv">
              <figure className="mw200 center pb3">
                {/*<a href="http://toneskill.co" target="_blank" rel="noopener noreferrer">*/}
                  <img id="toneskill" src="images/雜ＸTONE_icon-05.png" alt="toneskill" />
                {/*</a>*/}
              </figure>
              <p>TONE識是一間新創設計顧問公司，擅長協助合作單位共同釐清議題、轉化概念，創造打動人心的設計專案與溝通體驗。我們專精於品牌研究、策略設計、使用者研究、資訊設計專案。此外，更串連UX領域專家共同開設UX溝通課程，在真實世界中不斷實踐更多可能。</p>
            </div>
          </div>
        </div>
        <div className="w-100 bg-dark-gray pv4">
          <div className="center ph5-l ph3 df tr-l tc">
            <p className="w-100 white ph2 o-30">© 2017 雜学校ＸTONE識  Za Share X TONESkill All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
