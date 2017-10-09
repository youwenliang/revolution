import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import './index.css';
import $ from 'jquery';

ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));
registerServiceWorker();

$(document).ready(function() {
  console.log('load');
  if(isFacebookApp()) $('body').css('font-size', '12px');
  $(window).scroll( function(){
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).removeClass('hideme');
      }  
    });
    if($('#section-1').length) {
      for (var i = 1; i < 5; i++) {
        if($(window).scrollTop() >= $('#section-'+i).offset().top - $(window).height()/2) {
          $('.active').removeClass('active');
          $('a[href="#section-'+i+'"]').addClass('active');
        }
      }
    }
  });
});

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}