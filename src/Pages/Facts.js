import React, { Component } from "react";

import FactsLanguage from "../Components/FactsLanguage";
import FactsInterest from "../Components/FactsInterest";
import FactsTravel from "../Components/FactsTravel";

export default class Facts extends Component {
  render() {
    return (
      <section className="facts-content section-div">
        <div id="facts-language-interest">
            <FactsLanguage />
            <FactsInterest />
            <FactsTravel />
            <div id="bottom" />
        </div>
      </section>
    );
  }
}
