import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Quote from './components/home_page/Intro/Quote'
import VideoList from './components/home_page/Videos/VideoList';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const routing = (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/videos" component={VideoList} />
          <Route path="/contact" component={App} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(
    <App/>, document.querySelector('#root')
)