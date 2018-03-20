import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

import 'app/css/App.css';

import HomeScreen from 'app/containers/HomeScreen';
import CardLibrary from 'app/containers/CardLibrary';

import {loadCardDatabase, loadFamilyFilters} from 'app/actions/appActions';

class App extends Component {

  componentDidMount() {
    this.props.loadCardDatabase();
    this.props.loadFamilyFilters();
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
    app: state.app,
    cardLibrary: state.cardLibrary
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadCardDatabase: () => {
      dispatch(loadCardDatabase());
    },
    loadFamilyFilters: () => {
      dispatch(loadFamilyFilters());
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
