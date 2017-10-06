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
    console.log('mount');
  }
  componentDidUpdate(prevProps, prevState) {
    this.updateActions();
    console.log('update');
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/topic/self-exploration' component={Topic1} />
          <Route exact path='/topic/gender-equality' component={Topic2} />
          <Route exact path='/topic/aesthetic-education' component={Topic3} />
          <Route exact path='/topic/pursue-your-dreams' component={Topic4} />
          <Route exact path='/topic/independent-thinking' component={Topic5} />
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
