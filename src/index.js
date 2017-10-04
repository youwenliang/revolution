import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import $ from 'jquery';

ReactDOM.render((
  <BrowserRouter basename="za-tone">
    <App />
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();

$(document).ready(function() {
  $(window).scroll( function(){
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).removeClass('hideme');
      }  
    });
    if(window.location.href.indexOf('topic') !== -1) {
      for (var i = 1; i < 5; i++) {
        if($(window).scrollTop() >= $('#section-'+i).offset().top - $(window).height()/2) {
          $('.active').removeClass('active');
          $('a[href="#section-'+i+'"]').addClass('active');
        }
      }
    }
  });

  $(window).on('load',function(){
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).removeClass('hideme');
      }  
    });
    if(window.location.href.indexOf('topic') !== -1) {
      for (var i = 1; i < 5; i++) {
        if($(window).scrollTop() >= $('#section-'+i).offset().top - $(window).height()/2) {
          $('.active').removeClass('active');
          $('a[href="#section-'+i+'"]').addClass('active');
        }
      }
    }
  });

  $('#section-nav a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
  });
});