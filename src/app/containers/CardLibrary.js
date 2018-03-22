import React, { Component } from 'react';
import { Switch, Route, withRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

import {Book} from 'app/components/Book';
import {Loading} from 'app/components/Loading';
import {FamilyFilter} from 'app/components/FamilyFilter';
import {Upgrade} from 'app/components/Upgrade';

import {filterBook} from 'app/reducers/cardLibraryReducer';
import {toggleFamilyFilter} from 'app/actions/cardLibraryActions';

import 'app/css/CardLibrary.css';

export class CardLibrary extends Component {
  render() {
    let cards = [];

    if (this.props.cardLibrary.book) {
      cards = this.props.cardLibrary.book;
    }

    let familyFilters = [];
    if (this.props.cardLibrary.filters) {
      familyFilters = this.props.cardLibrary.filters;
    }

    return (
      <div className="card-library">
        <div className="title">Card Library</div>
        <div className="book-container">
          {this.props.app.isLoading ? (
            <Loading />
          ) : (
            <Book cards={cards} upgrade={this.props.cardLibrary.upgradeCards}/>
          )}
        </div>
        <div className="card-family-filters">
          <FamilyFilter filters={familyFilters} />
        </div>
        <div className="tag-cloud"></div>
        <div className="upgrade-cards">
          <Upgrade isActive={this.props.cardLibrary.upgradeCards}/>
        </div>
        <div className="nav-footer"></div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    app: state.app,
    cardLibrary: {
      book: filterBook(state),
      filters: state.cardLibrary.filters,
      upgradeCards: state.cardLibrary.upgradeCards
    }
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFamilyFilter: (family) => {
      dispatch(toggleFamilyFilter(family));
    }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardLibrary));
