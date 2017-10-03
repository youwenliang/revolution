import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Topic1 from './topics/Topic1';
import Topic2 from './topics/Topic2';
import Topic3 from './topics/Topic3';
import Topic4 from './topics/Topic4';
import Topic5 from './topics/Topic5';

class Main extends Component {
  componentDidUpdate(prevProps, prevState) {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/topics/self-exploration' component={Topic1} />
          <Route exact path='/topics/gender-equality' component={Topic2} />
          <Route exact path='/topics/aesthetic-education' component={Topic3} />
          <Route exact path='/topics/pursue-your-dreams' component={Topic4} />
          <Route exact path='/topics/independent-thinking' component={Topic5} />
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
