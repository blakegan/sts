import React, { Component } from 'react';
import '../App.css';

import Book from "./Book";
import ReturnButton from "../components/ReturnButton";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Book />
        <div className="return-button">
          <ReturnButton />
        </div>
      </div>
    );
  }
}

export default App;
