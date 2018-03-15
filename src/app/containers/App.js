import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import 'app/css/App.css';

import Book from "app/containers/Book";
import HomeScreen from "app/containers/HomeScreen";
import {ReturnButton} from "app/components/ReturnButton";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/cards" component={Book}/>
        </Switch>
      </div>
    );
  }
}

export default App;
