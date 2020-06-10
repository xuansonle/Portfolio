import React, { Component } from "react";

import github from "../Images/Info/github.png";
import linkedin from "../Images/Info/linkedin.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="copyright">
        <div id="icons-div">
          <a className="myiconslink" href="https://github.com/lexuanson">
            <img className="myicons" src={github} alt="git" />
          </a>
          <a
            className="myiconslink"
            href="https://www.linkedin.com/in/xuansonle"
          >
            <img className="myicons" src={linkedin} alt="linkedin" />
          </a>
        </div>
        <p className="copyright-text">Copyright © 2020 Xuan Son Le</p>
      </div>
    );
  }
}
