import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

import 'app/css/App.css';

import HomeScreen from 'app/containers/HomeScreen';
import CardLibrary from 'app/containers/CardLibrary';

import {loadCardDatabase} from 'app/actions/appActions';

class App extends Component {

  componentDidMount() {
    this.props.loadCardDatabase();
  }

  render() {
    return (
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/cards" component={CardLibrary}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCardDatabase: () => {
      dispatch(loadCardDatabase());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
