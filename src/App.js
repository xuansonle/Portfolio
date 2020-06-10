// Import React
import React, { Component } from "react";

// Import Components
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

// Import Pages
import Home from "./Pages/Home";
import Work from "./Pages/Work";
import Skills from "./Pages/Skills";
import Facts from "./Pages/Facts";
import ErrorPage from "./Pages/ErrorPage";

// Import react-router for multiple pages
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// Import react-intl for multiple languages
import { addLocaleData } from "react-intl";
import { IntlProvider } from "react-intl";

import locale_en from "react-intl/locale-data/en";
import locale_de from "react-intl/locale-data/de";
import messages_de from "./translations/de.json";
import messages_en from "./translations/en.json";

// Add local data
addLocaleData([...locale_en, ...locale_de]);
const messages = {
  de: messages_de,
  en: messages_en,
};
// Get Browser Language
const defaultLanguage =
  navigator.language.split(/[-_]/)[0] === null
    ? "en"
    : navigator.language.split(/[-_]/)[0];

// Define the App
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      language:
        localStorage.getItem("language") === null
          ? defaultLanguage
          : localStorage.getItem("language"),
    };
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  changeLanguage(language) {
    this.setState({ language: language });
    localStorage.setItem("language", language);
  }

  render() {
    const savedLanguage = this.state.language;

    return (
      <BrowserRouter>
        <IntlProvider locale={savedLanguage} messages={messages[savedLanguage]}>
          <div className="page-div">
            <NavBar
              changeLanguage={this.changeLanguage}
            />
            <Switch>
              <Route
                exact={true}
                path="/"
                render={() => <Redirect to="/home" />}
              />

              <Route
                exact={true}
                path="/home"
                render={() => <Home language={savedLanguage} />}
              />

              <Route exact={true} path="/aboutme" component={Facts} />

              <Route exact={true} path="/work" component={Work} />

              <Route exact={true} path="/skills" component={Skills} />

              <Route
                exact={true}
                path="/facts"
                render={() => <Facts language={savedLanguage} />}
              />

              <Route component={ErrorPage} />
            </Switch>
            <Footer />
          </div>
        </IntlProvider>
      </BrowserRouter>
    );
  }
}
