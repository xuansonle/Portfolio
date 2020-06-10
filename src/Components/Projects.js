import React, { Component } from "react";

// Import react-intl
import { FormattedHTMLMessage } from "react-intl";

import css from "../Images/Projects/css.png";
import dash from "../Images/Projects/dash.png";
import flask from "../Images/Projects/flask.png";
import ggplot from "../Images/Projects/ggplot.png";
import jinja from "../Images/Projects/jinja.png";
import html from "../Images/Projects/html.png";
import keras from "../Images/Projects/keras.png";
import javascript from "../Images/Projects/javascript.png";
import opencv from "../Images/Projects/opencv.png";
import python from "../Images/Projects/python.png";
import r from "../Images/Projects/r.png";

import blog from "../Images/Projects/blog.png";
import digit from "../Images/Projects/digit.gif";
import logReg from "../Images/Projects/logReg.png";
import motion from "../Images/Projects/motion.gif";
import objectDetec from "../Images/Projects/objectDetec.gif";
import thesis from "../Images/Projects/thesis.png";

let toolLogos = {
  css: css,
  dash: dash,
  flask: flask,
  ggplot: ggplot,
  jinja: jinja,
  html: html,
  keras: keras,
  javascript: javascript,
  opencv:opencv,
  python: python,
  r: r,
};

let demos = {
  blog: blog,
  digit: digit,
  logReg: logReg,
  motion:motion,
  objectDetec:objectDetec,
  thesis: thesis,
};

// Data
const projectDict = [
  {
    tools: ["python", "opencv"],
    text: "objectDetec",
    link: "https://github.com/xuansonle/ObjectDetectionWebcam",
  },
  {
    tools: ["keras", "flask", "python", "html", "css", "javascript"],
    text: "digit",
    link: "https://github.com/xuansonle/Python_DigitRecognizer",
  },
  {
    tools: ["python", "opencv"],
    text: "motion",
    link: "https://github.com/xuansonle/OpenCV-Application",
  },
  {
    tools: ["python", "flask", "jinja", "html", "css"],
    text: "blog",
    link: "https://github.com/xuansonle/BlogWebsite",
    demo: "https://flask-blogweb.herokuapp.com/",
  },
  {
    tools: ["r", "ggplot"],
    text: "thesis",
    link: "https://github.com/xuansonle/Masterarbeit",
  },
  {
    tools: ["r"],
    text: "logReg",
    link: "https://github.com/xuansonle/logisticRegression",
  },
];

const Project = (props) => {
  return (
    <div className="col-lg-6 p-4">
      <div className="project-div">
        <p className="project-title">
          <FormattedHTMLMessage
            id={"projects." + props.values.text + ".title"}
          />
        </p>
        <img
          className="project-video"
          src={demos[props.values.text]}
          alt="load project demo"
        />
        <div>
          <a href={props.values.link} target="_blank" rel="noopener noreferrer">
            <button className="projects-source">
              <FormattedHTMLMessage id={"projects.source"} />
            </button>
          </a>
          {props.values.demo ? (
            <a
              href={props.values.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="projects-source projects-demo">DEMO</button>
            </a>
          ) : null}
        </div>
        <div>
          {props.values.tools.map((tool) => {
            return (
              <span className="projects-tool m-2" key={tool}>
                <img
                  className="tool-image"
                  alt="tool logo"
                  src={toolLogos[tool]}
                />
              </span>
            );
          })}
        </div>
        <p className="project-info">
          <FormattedHTMLMessage
            id={"projects." + props.values.text + ".info"}
          />
        </p>
      </div>
    </div>
  );
};

export default class SkillsProjects extends Component {
  render() {
    return (
      <div className="row projects">
        {projectDict.map((item) => {
          return <Project values={item} key={item.text} />;
        })}
      </div>
    );
  }
}
