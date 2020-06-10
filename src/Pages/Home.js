import React, { Component } from "react";

import HomeTypeWriter from "../Components/HomeTypeWriter";
import HomeMenu from "../Components/HomeMenu";

export default class Home extends Component {
  render() {
    return (
      <section id="home-div" className="section-div">
        <div id="home-body-div">
          <HomeTypeWriter language={this.props.language} />
          <HomeMenu />
        </div>
      </section>
    );
  }
}
