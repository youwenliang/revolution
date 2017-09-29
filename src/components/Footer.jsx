'use strict';

const React = require('react');
const { getPage, getSiblingPages} = require('./utilities.js');
const { connect } = require('react-redux');

const Footer = connect(state => {
  var {path} = state.routing;
  var {pages} = state.data;
  var page = getPage(path, pages);
  var {previous_page, next_page} = getSiblingPages(page, pages);

  return {previous_page, next_page};
})(React.createClass({
  displayName: 'Footer',
  propTypes: {
    next_page: React.PropTypes.shape(),
    previous_page: React.PropTypes.shape()
  },

  render: function() {
    /* eslint-disable react/jsx-no-literals */
    return(
      <footer>
        <div className="center mw7 ph3 pb3-l cf">
          <p className="fl w-50 tl mt0">
            This is a footer
          </p>
        </div>
      </footer>)
    /* eslint-enable react/jsx-no-literals */
  }
}));

module.exports = Footer;
