import React, { Component } from 'react';

import {Banner} from 'app/components/Banner';
import 'app/css/HomeScreen.css';

export class HomeScreen extends Component {
  render() {
    return (
      <div className="home-screen">
        <Banner key={"Card Library"} route={"/cards"} alt={"Card Library"} src={"../misc-assets/CardLibrary.png"}/>
        <Banner key={"Beastiary"} route={"/"} alt={"Beastiary"} src={"../misc-assets/Beastiary.png"}/>
      </div>
    );
  }
}

export default HomeScreen;
