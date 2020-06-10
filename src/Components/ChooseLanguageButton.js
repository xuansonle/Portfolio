import React, { Component } from "react";

// import en from "../Images/Others/en.png";
// import de from "../Images/Others/de.png";

export default class ChooseLanguageButton extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <input
        type="image"
        src={this.props.src}
        alt="ChooseLanguageButton"
        className={`chooseLanguageButton chooseLanguageButton${
          this.props.clicked ? "Select" : "Default"
        }`}
        onClick={this.props.onClick}
      />
    );
  }
}
