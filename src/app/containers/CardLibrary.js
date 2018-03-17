import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

import {Book} from 'app/components/Book';
import {Loading} from 'app/components/Loading';
import {FamilyFilter} from 'app/components/FamilyFilter';
import 'app/css/CardLibrary.css';

export class CardLibrary extends Component {
  render() {
    let cards = [];
    if (this.props.app.cardDatabase) {
      cards = this.props.app.cardDatabase;
    }

    return (
      <div className="card-library">
        <div className="title">Card Library</div>
        <div className="book-container">
          {this.props.app.isLoading ? (
            <Loading />
          ) : (
            <Book cards={cards}/>
          )}
        </div>
        <div className="card-family-filters">
          <FamilyFilter filters={[
            {
              id: 1,
              name: "Red"
            },
            {
              id: 2,
              name: "Green"
            },
            {
              id: 3,
              name: "Colorless"
            },
            {
              id: 4,
              name: "Curse"
            },
            {
              id: 5,
              name: "Status"
            },
          ]} />
        </div>
        <div className="tag-cloud"></div>
        <div className="nav-footer"></div>
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
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardLibrary));
