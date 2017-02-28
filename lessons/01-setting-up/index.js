import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Home from './modules/Home';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

render(<App/>, document.getElementById('app'));

render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/about' component={About} />
      <Route path='/repos' component={Repos}>
        <Route path='/repos/:userName/:repoName' component={Repos} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'));
