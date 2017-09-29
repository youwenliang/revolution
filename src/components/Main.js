import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import TopicA from './pages/TopicA';
import TopicB from './pages/TopicB';
import TopicC from './pages/TopicC';
import TopicD from './pages/TopicD';
import Page404 from './pages/404';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/topicA' component={TopicA} />
          <Route exact path='/topicB' component={TopicB} />
          <Route exact path='/topicC' component={TopicC} />
          <Route exact path='/topicD' component={TopicD} />
          <Route path='*' exact={true} component={Page404} />
        </Switch>
      </main>
    );
  }
}

export default Main;
