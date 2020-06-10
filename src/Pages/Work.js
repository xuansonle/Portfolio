import React, { Component } from "react";

import WorkTimeline from "../Components/WorkTimeline"

export default class Work extends Component {
  render() {
    return (
      <section id="work-div" className="section-div">
        <WorkTimeline />
      </section>
    );
  }
}
