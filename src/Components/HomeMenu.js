import React, { Component } from "react";

import { FormattedHTMLMessage } from "react-intl";

import aboutme from "../Images/Menu/menu-aboutme.png";
import work from "../Images/Menu/menu-work.png";
import skills from "../Images/Menu/menu-skills.png";

const MenuItem = props => {
  return (
    <a
      className={"col-md-4 menu-children menu-" + props.name}
      href={"/" + props.name}
    >
      <div className="menu-content">
        <img
          className="menu-logo"
          type="image"
          alt="menu-logo"
          src={props.logo}
        />
        <p className="menu-text">
          <FormattedHTMLMessage id={"menu." + props.name} />
        </p>
      </div>
    </a>
  );
};

export default class HomeMenu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="row justify-content-center">
          <MenuItem name="skills" logo={skills} />
          <MenuItem name="work" logo={work} />
          <MenuItem name="aboutme" logo={aboutme} />
        </div>
      </div>
    );
  }
}
