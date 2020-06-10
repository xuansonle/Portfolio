import React, { Component } from "react";

import { FormattedHTMLMessage } from "react-intl";

const language_data = [
  {
    item: "vn",
    level: 100,
  },
  {
    item: "de",
    level: 90,
  },
  {
    item: "en",
    level: 85,
  },
];

const Language = (props) => {
  return (
    <div className="col-sm-4">
      <p className="fact-language-name">
        <FormattedHTMLMessage id={"fact-language." + props.values.item} />
      </p>
      <p className="fact-language-info">
        <FormattedHTMLMessage
          id={"fact-language." + props.values.item + ".info"}
        />
      </p>
    </div>
  );
};

export default class FactsLanguage extends Component {
  render() {
    return (
      <>
        <h4 className="facts-intro">
          <FormattedHTMLMessage id="fact-language.intro" />{" "}
        </h4>
        <div className="facts-language row justify-content-center">
          {language_data.map((language) => {
            return <Language values={language} key={language.item} />;
          })}
        </div>
      </>
    );
  }
}
