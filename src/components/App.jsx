'use strict';

const React = require('react');
const Content = React.createFactory(require('./Content.jsx'));
const Footer = React.createFactory(require('./Footer.jsx'));

const { connect } = require('react-redux');
const { getPage } = require('./utilities.js');

const App = React.createClass({
  displayName: 'App',
  propTypes: {
    dispatch: React.PropTypes.func,
    page: React.PropTypes.shape()
  },

  render: function() {
    return (
      <div>
        <main>
          <Content/>
          <Footer/>
        </main>
      </div>
    );
  }
});

function makeProps(state) {
  var {path} = state.routing;
  var {pages} = state.data;

  var page = getPage(path, pages);
  return {page};
}

module.exports = connect(makeProps)(App);
