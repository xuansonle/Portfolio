import React from "react";

import { FormattedHTMLMessage } from "react-intl";

const NavBarItem = props => {
  return (
    <li className="nav-item">
      <a
        className={`navLink ${
          window.location.pathname === "/" + props.name ? "navLinkActive" : ""
        }`}
        href={"/" + props.name}
      >
        <FormattedHTMLMessage id={"menu." + props.name} />
      </a>
    </li>
  );
};

export default NavBarItem;