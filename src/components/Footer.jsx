import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer className="center w-100">
        <div className="center mw8 bg-white pv4 ph5-l ph3">
          <h3 className="center fw5 mt3 mw7-l hideme hidediv mw6 tc mb4 ph2">無血氣國意素，照一現快府半頭國．</h3>
          <hr className="ph2" />
          <div className="center df dfc-s mv4 space-around ph2">
            <div className="mw350">
              <figure className="mw200 center pb3">
                <a href="http://zashare.org" target="_blank">
                  <img id="zashare" src="images/雜ＸTONE_icon-04.png" alt="zashare" />
                </a>
              </figure>
              <p>無血氣國意素，照一現快府半頭小半頭半頭血氣國意中須細無血氣國意中須素，照一現快府半頭小細無血氣國意中須素．</p>
            </div>
            <div>
              <figure className="mw4 pv3">
                <img src="images/雜ＸTONE_icon-03.png" />
              </figure>
            </div>
            <div className="mw350">
              <figure className="mw200 center pb3">
                <a href="http://toneskill.co" target="_blank">
                  <img id="toneskill" src="images/雜ＸTONE_icon-05.png" alt="toneskill" />
                </a>
              </figure>
              <p>無血氣國意素，照一現快府半頭小半頭半頭血氣國意中須細無血氣國意中須素，照一現快府半頭小細無血氣國意中須素．</p>
            </div>
          </div>
        </div>
        <div className="w-100 bg-dark-gray pv4">
          <div className="center ph5-l ph3 df tr-l tc">
            <p className="w-100 white ph2 o-30">© 2017 雜学校 Za Share All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
