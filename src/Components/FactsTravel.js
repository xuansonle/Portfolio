import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
} from "react-simple-maps";
// import ReactTooltip from "react-tooltip";
import { FormattedHTMLMessage } from "react-intl";
import { Motion, spring } from "react-motion";

import jsonFileEN from "../static/world-50m-tooltip-en.json";
import jsonFileDE from "../static/world-50m-tooltip-de.json";

import amsterdam from "../Images/Travel/amsterdam.jpg";
import berlin from "../Images/Travel/berlin.jpg";
import budapest from "../Images/Travel/budapest.jpg";
import hanoi from "../Images/Travel/hanoi.jpg";
import hatinh from "../Images/Travel/hatinh.jpg";
import kjerag from "../Images/Travel/kjerag.jpg";
import lanzarote from "../Images/Travel/lanzarote.jpg";
import nghean from "../Images/Travel/nghean.jpg";
import oslo from "../Images/Travel/oslo.jpg";
import paris from "../Images/Travel/paris.jpg";
import stockholm from "../Images/Travel/stockholm.jpg";

export default class FactsWorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: window.innerWidth >= 768 ? [0, 25] : [40, 25],
      zoom: window.innerWidth >= 768 ? 1.26 : 2,
      tooltipImg: null,
      clickCity: null,
      hoverCity: null,
    };
    // this.handleZoomIn = this.handleZoomIn.bind(this);
    // this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleCityClick = this.handleCityClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.resetCityClick = this.resetCityClick.bind(this);
    this.handleCitySelection = this.handleCitySelection.bind(this);
  }

  handleReset() {
    this.setState({
      center: window.innerWidth >= 768 ? [0, 25] : [40, 25],
      zoom: window.innerWidth >= 768 ? 1.26 : 2,
      clickCity: null,
    });
  }
  handleCityClick(city) {
    this.setState({
      zoom: 4,
      center:
        window.innerWidth >= 768
          ? [city.coordinates[0] + 20, city.coordinates[1] - 15]
          : [city.coordinates[0] + 40, city.coordinates[1] - 30],
      tooltipImg: city.img,
      clickCity: city.name,
      hoverCity: city.name,
    });
  }
  handleCitySelection(evt) {
    const cityId = evt.target.getAttribute("data-city");
    const city = cities[cityId];
    this.setState({
      zoom: 4,
      center:
        window.innerWidth >= 768
          ? [city.coordinates[0] + 20, city.coordinates[1] - 15]
          : [city.coordinates[0] + 40, city.coordinates[1] - 30],
      tooltipImg: city.img,
      clickCity: city.name,
    });
  }
  handleClickOutside = () => {
    console.log("onClickOutside() method called");
  };
  resetCityClick() {
    this.setState({
      clickCity: null,
    });
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     ReactTooltip.rebuild();
  //   }, 100);
  // }
  render() {
    return (
      <div>
        <h4 className="facts-intro">
          <FormattedHTMLMessage id="factsworldmap.intro" />
        </h4>
        <div className="row">
          <div className="cityButtons col-md-2 list-unstyled">
            {cities.map((city, i) => (
              <li className="cityButtonItem" key={i}>
                <button
                  className="cityButton"
                  data-city={i}
                  onClick={this.handleCitySelection}
                  style={
                    city.name === this.state.clickCity
                      ? { backgroundColor: "#343a40", color: "white" }
                      : { backgroundColor: "#E0D8C3" }
                  }
                >
                  {city.name}
                </button>
              </li>
            ))}
            {/* <button className="zoomButton" onClick={this.handleReset}>
                {this.props.language === "de" ? "Reset" : "Reset"}
              </button> */}
          </div>

          
        </div>
      </div>
    );
  }
}

const cities = [
  {
    name: "Amsterdam",
    coordinates: [4.9036, 52.368],
    img: amsterdam,
  },
  {
    name: "Berlin",
    coordinates: [13.404954, 52.520007],
    img: berlin,
    textDE: "Mein aktueller Wohnort",
    textEN: "My current residence",
  },
  {
    name: "Budapest",
    coordinates: [19.040235, 47.497912],
    img: budapest,
  },
  {
    name: "Hanoi",
    coordinates: [105.83416, 21.027764],
    img: hanoi,
    textDE: "Meine Heimmatstadt",
    textEN: "My lovely hometown",
  },
  {
    name: "Hatinh",
    coordinates: [105.887749, 18.355954],
    img: hatinh,
  },
  {
    name: "Kjerag",
    coordinates: [6.577522, 59.034671],
    img: kjerag,
  },
  {
    name: "Lanzarote",
    coordinates: [-13.631287, 29.018574],
    img: lanzarote,
  },
  {
    name: "Nghean",
    coordinates: [104.920036, 19.234249],
    img: nghean,
  },
  {
    name: "Oslo",
    coordinates: [10.7522454, 59.9138688],
    img: oslo,
  },
  {
    name: "Paris",
    coordinates: [2.3522, 48.8566],
    img: paris,
  },
  {
    name: "Stockholm",
    coordinates: [18.068581, 59.329324],
    img: stockholm,
  },
];
