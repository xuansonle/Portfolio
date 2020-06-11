// Import React
import React, { Component } from "react";

import ChooseLanguageButton from "../Components/ChooseLanguageButton";
import NavBarItem from "../Components/NavBarItem";
import en from "../Images/Others/en.png";
import de from "../Images/Others/de.png";

// Browser Language
const defaultLanguage =
  navigator.language.split(/[-_]/)[0] === null
    ? "en"
    : navigator.language.split(/[-_]/)[0];

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowLanguage:
        localStorage.getItem("language") === null
          ? defaultLanguage
          : localStorage.getItem("language"),
    };
    this.changeWindowLanguage = this.changeWindowLanguage.bind(this);
  }

  changeWindowLanguage(language) {
    this.setState({ windowLanguage: language });
    localStorage.setItem("language", language);
  }

  render() {
    let savedLanguage = this.state.windowLanguage;

    return (
      <nav
        id="mynav"
        className="navbar navbar-expand-md navbar-dark bg-dark primary-color"
      >
        <a className="navbar-brand" href="/home">
          Xuan Son Le
        </a>

        <div className="align-middle ml-auto mr-1 order-md-last ChooseLanguageButtons">
          <ChooseLanguageButton
            src={en}
            clicked={("en" === savedLanguage) | ("de" !== defaultLanguage)}
            onClick={() => {
              this.changeWindowLanguage("en"); // when clicked, get method changeWindowLanguage
              this.props.changeLanguage("en"); // when clicked, get props changLanguage("en")
            }}
          />

          <ChooseLanguageButton
            src={de}
            clicked={"de" === savedLanguage}
            onClick={() => {
              this.changeWindowLanguage("de"); // when clicked, get method changeWindowLanguage
              this.props.changeLanguage("de"); // when clicked, get props changLanguage("de")
            }}
          />
        </div>

        {(window.location.pathname === "/home") |
        (window.location.pathname === "/") ? null : (
          <>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ml-auto">
                <NavBarItem name="skills" />
                <NavBarItem name="work" />
                <NavBarItem name="aboutme" />
              </ul>
            </div>
          </>
        )}
      </nav>
    );
  }
}
