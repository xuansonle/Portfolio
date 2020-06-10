import React, { Component } from "react";

// Import react-intl
import { FormattedHTMLMessage } from "react-intl";

import learning from "../Images/Interest/learning.png";
import cube from "../Images/Interest/cube.png";
import travelling from "../Images/Interest/travelling.png";
import reading from "../Images/Interest/reading.png";
import keyboard from "../Images/Interest/keyboard.png";
import football from "../Images/Interest/football.png";

const interestdata = [
  {
    icon: "icon1",
    img: learning
  },
  {
    icon: "icon2",
    img: cube
  },
  {
    icon: "icon3",
    img: travelling
  },
  {
    icon: "icon4",
    img: reading
  },
  {
    icon: "icon5",
    img: keyboard
  },
  {
    icon: "icon6",
    img: football
  }
];

const Interest = props => {
  return (
    <div className="col-lg-2 col-sm-4 col-6 flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={props.values.img}
            className="factsinterest-icon"
            alt="interest-icon"
          />
          <p>
            <FormattedHTMLMessage
              id={"factsinterest.front." + props.values.icon}
            />
          </p>
        </div>
        <div className="flip-card-back">
          <FormattedHTMLMessage
            id={"factsinterest.back." + props.values.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default class FactsInterest extends Component {
  render() {
    return (
      <>
        <h4 className="facts-intro">
          <FormattedHTMLMessage id="factsinterest.intro" />{" "}
        </h4>
        <div className="row mb-3">
          {interestdata.map(interest => {
            return <Interest values={interest} key={interest.icon} />;
          })}
        </div>
      </>
    );
  }
}
