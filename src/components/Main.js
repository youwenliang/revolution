import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Topic1 from './topic/Topic1';
import Topic2 from './topic/Topic2';
import Topic3 from './topic/Topic3';
import Topic4 from './topic/Topic4';
import Topic5 from './topic/Topic5';

class Main extends Component {
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
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
