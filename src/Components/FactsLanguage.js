import React, { Component } from "react";

import { FormattedHTMLMessage } from "react-intl";

const languagedata = [
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
      <p className="factslanguage-name">
        <FormattedHTMLMessage id={"factslanguage." + props.values.item} />
      </p>
      <p className="factslanguage-info">
        <FormattedHTMLMessage
          id={"factslanguage." + props.values.item + ".info"}
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
          <FormattedHTMLMessage id="factslanguage.intro" />{" "}
        </h4>
        <div className="facts-language row justify-content-center">
          {languagedata.map((language) => {
            return <Language values={language} key={language.item} />;
          })}
        </div>
      </>
    );
  }
}
