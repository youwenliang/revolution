/*global FB*/
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Topic1 from './topic/Topic1';
import Topic2 from './topic/Topic2';
import Topic3 from './topic/Topic3';
import Topic4 from './topic/Topic4';
import Topic5 from './topic/Topic5';

import $ from 'jquery';

class Main extends Component {
  updateActions = () => {
    window.scrollTo(0, 0);
    $(window).on('resize', function(){
      if($('.topic-image').length) {
        var original = $('.topic-image img').attr('src').replace('images/', '');
        if($(window).width() < 960) {
          if(original.indexOf('small') < 0) $('.topic-image img').attr('src', 'images/small_' + original);
        } else {
          if(original.indexOf('small') >= 0) $('.topic-image img').attr('src', 'images/' + original.replace('small_', ''));
        }
      }
    });

    $(window).scroll( function(){
      if($(window).scrollTop() > 0) {
        $('.hidediv').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
            $(this).removeClass('hideme');
            $(this).removeClass('hideme-left');
            $(this).removeClass('hideme-right');
          }  
        });
      }
      if($('#section-1').length) {
        for (var i = 1; i < 5; i++) {
          if($(window).scrollTop() >= $('#section-'+i).offset().top - $(window).height()/2) {
            $('.active').removeClass('active');
            $('a[href="#section-'+i+'"]').addClass('active');
          }
        }
      }
    });

    /* Switch Topic Images */
    if($('.topic-image').length) {
      var original_src = $('.topic-image img').attr('src').replace('images/', '');
      if($(window).width() < 960) {
        $('.topic-image img').attr('src', 'images/small_' + original_src);
      } else {
        $('.topic-image img').attr('src', 'images/' + original_src);
      }
    }
    if($('.topic').length) {
      $('.topic').hover(function(){
        var src = $(this).find('img').attr('src');
        if(src.indexOf('move') < 0) $(this).find('img').attr('src', src.split('/')[0]+"/move_"+src.split('/')[1]);
      }, function(){
        var src = $(this).find('img').attr('src');
        if(src.indexOf('move') >= 0) $(this).find('img').attr('src', src.split('/')[0]+"/"+src.split('/')[1].replace('move_',''));
      });
    }

    if($('#section-1').length) {
      for (var i = 1; i < 5; i++) {
        if($(window).scrollTop() >= $('#section-'+i).offset().top - $(window).height()/2) {
          $('.active').removeClass('active');
          $('a[href="#section-'+i+'"]').addClass('active');
        }
      }
    };
    $('#section-nav a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    });
  }
  componentDidMount(prevProps, prevState) {
    this.updateActions();
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '360075034440109',
        xfbml      : true,
        version    : 'v2.1'
      });
    };

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateActions();
    if (typeof FB !== 'undefined') FB.XFBML.parse();
  }

  render() {
    return (
      <main>
        <div id="fb-root"></div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/respect-life' component={Topic1} />
          <Route exact path='/gender-equality' component={Topic2} />
          <Route exact path='/aesthetic-education' component={Topic3} />
          <Route exact path='/self-realization' component={Topic4} />
          <Route exact path='/critical-thinking' component={Topic5} />
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
