import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './HomePage';
import DetailPage from './DetailPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(routerProps) => <HomePage {...routerProps} />} 
            />
            <Route 
              path="/:myCharacterId" 
              render={(routerProps) => <DetailPage {...routerProps} />} 
            />
          </Switch>
        </Router>
      </div>
    );
  }
}