import React, { Component } from "react";
import { FormattedHTMLMessage } from "react-intl";

import en from "../Files/cv-en.pdf";
// import de from "../Files/cv-de.pdf";

export default class WorkTimeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadingButton: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loadingButton: true });
    }, 2000);
  }

  render() {
    // const currentLanguage = localStorage.getItem("language");

    return (
      <div className="timeline-div">
        <p className="download-div">
          {this.state.loadingButton ? (
            <a
              // href={currentLanguage === "de" ? de : en}
              href={en}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="download-button">
                <FormattedHTMLMessage id="worktimeline.download" />
              </button>
            </a>
          ) : null}
        </p>

        <div className="row">
          <div className="col-md-12">
            <div className="main-timeline">
              {workdata.map((item) => {
                return <TimelineWorkItem values={item} key={item.text} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const workdata = [
  {
    title: "Data Scientist & BI Developer",
    company: "K-Newmedia GmbH",
    date: "03.2019 - ...",
    icon: "icon1",
    text: ["workicon11", "workicon12", "workicon13"],
    link: "https://www.k-newmedia.de/k-new-media/klingel-gruppe/",
    place: "left",
  },
  {
    title: "Data Analyst",
    company: "Fastlane Automotive GmbH",
    date: "06.2018 - 02.2019",
    icon: "icon2",
    text: ["workicon21", "workicon22", "workicon23"],
    link: "https://www.fastlane-automotive.de/",
    place: "right",
  },
  {
    title: "Business Intelligence Analyst",
    company: "Classmarkets GmbH (ImmoScout24)",
    date: "12.2017-06.2018",
    icon: "icon3",
    text: ["workicon31", "workicon32", "workicon33"],
    link: "https://www.classmarkets.com/",
    place: "left",
  },
  {
    title: "Data Analyst",
    company: "Wissenschatliches Institut der AOK",
    date: "01.2018 - 05.2018",
    icon: "icon4",
    text: ["workicon41", "workicon42", "workicon43"],
    link: "https://www.wido.de/institut-team/wir-ueber-uns/",
    place: "right",
  },
];

const TimelineWorkItem = (props) => {
  return (
    <div className="timeline">
      <a href={props.values.link} target="_blank" rel="noopener noreferrer">
        <div
          id={"worktimeline-" + props.values.icon}
          className="worktimeline-icon"
        />
      </a>
      <div className={"timeline-content " + props.values.place}>
        <h2 className="title">{props.values.title}</h2>
        <p className="worktimeline-company">{props.values.company}</p>
        <p className="worktimeline-date">{props.values.date}</p>

        <div>
        {props.values.text.map(text => {
          return (
            <p className="description" key={text}>
              <FormattedHTMLMessage id={"worktimeline." + text} />
            </p>
          );
        })}
        </div>


        <p className="worktimeline-tools">{props.values.tools}</p>
      </div>
    </div>
  );
};
