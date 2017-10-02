import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Topic1 from './pages/Topic1';
import Topic2 from './pages/Topic2';
import Topic3 from './pages/Topic3';
import Topic4 from './pages/Topic4';
import Topic5 from './pages/Topic5';

class Main extends Component {
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/self-exploration' component={Topic1} />
          <Route exact path='/gender-equality' component={Topic2} />
          <Route exact path='/aesthetic-education' component={Topic3} />
          <Route exact path='/pursue-your-dreams' component={Topic4} />
          <Route exact path='/independent-thinking' component={Topic5} />
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
