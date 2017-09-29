'use strict';

/* eslint "react/no-danger":[0] */
/* global process:false */

require('../../node_modules/highlight.js/styles/color-brewer.css');

const React = require('react');
const { connect } = require('react-redux');
const ReactDOM = require('react-dom');
const { getPage } = require('./utilities.js');

const Content = React.createClass({
  displayName: 'Content',
  propTypes: {
    dispatch: React.PropTypes.func,
    page: React.PropTypes.shape(),
    text: React.PropTypes.string,
    url: React.PropTypes.string
  },

  componentDidMount: function() {
    window.addEventListener('message', (e) => {
      var data = JSON.parse( e.data );
      // check data object
      if ( data['type'] == 'editor-height' && data['docHeight'] ) {
        var ifrm = document.getElementById('editor-iframe');
        if (ifrm) {
          ifrm.style.visibility = 'hidden';
          // some IE versions need a bit added or scrollbar appears
          ifrm.style.height = data['docHeight'] + 4 + "px";
          ifrm.style.visibility = 'visible';
        }
      }
    }, false);
  },

  //Meta Tags
  componentDidUpdate: function(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.addIds();
      const page = this.props.page;
      let title = `${page.title} | Za-Tone`;
      document.title = title;
    }
  },

  addIds: function () {
    let node = ReactDOM.findDOMNode(this);
    let headings = Array.from(node.querySelectorAll('h1,h2,h3,h4'));
    let ids = new Set();
    let header_links = [];
    headings.forEach(e => {
      if (!e.id) {
        let newId = e.textContent.trim().toLowerCase().replace(/ /g, '-');
        let counter = 1;
        while (ids.has(newId)) {
          counter++;
          newId = `${e.textContent.trim().toLowerCase().replace(/ /g, '-')}-${counter}`;
        }
        e.id = newId;
        if (e.tagName != 'H1') {
          let linkTo = document.createElement('a');
          linkTo.innerHTML = `<div class="link-image"></div>`;
          linkTo.href = `#${e.id}`;
          e.appendChild(linkTo);
        }
      }
      if (ids.has(e.id)) {
        console.error(`Duplicate id found: ${e.id}`); // eslint-disable-line no-console
      }
      ids.add(e.id);
      if (e.tagName === 'H2') {
        header_links.push(`<li><a href="#${e.id}">${e.textContent.trim()}</a></li>`);
      }
    });
  },


  render: function() {
    let {text, url} = this.props;
    if (url) {
      if (process.env.NODE_ENV === 'development') {
        url = `https://youwenliang.github.io${url}`;
      }
      text = `<iframe src=${url} id="editor-iframe" frameborder="0"></iframe>`;
    }
    return (<div className={'center mw7 ph3 mt3 mt4-l' + (url ? ' url' : ' ')}
        dangerouslySetInnerHTML={{__html: text}}
            ></div>);
  }

});

function makeProps(state) {
  var {path} = state.routing;
  var {pages, text, url} = state.data;
  var page = getPage(path, pages);

  return {
    page: page,
    text: text,
    url: url
  }
}

module.exports = connect(makeProps)(Content);
