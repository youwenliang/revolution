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
  });

  $(window).on('load',function(){
    $('.hideme').each( function(i){
      var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_object ){
        $(this).removeClass('hideme');
      }  
    }); 
  });
});