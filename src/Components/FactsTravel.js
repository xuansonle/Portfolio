import React, { Component } from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
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
      hoverCity: null
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
      clickCity: null
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
      hoverCity: city.name
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
      clickCity: city.name
    });
  }
  handleClickOutside = () => {
    console.log("onClickOutside() method called");
  };
  resetCityClick() {
    this.setState({
      clickCity: null
    });
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     ReactTooltip.rebuild();
  //   }, 100);
  // }
  render() {
    return (
      <div id="facts-travel" className="facts-page">
        <div className="facts-content-div">
          <h4 className="facts-intro">
            <FormattedHTMLMessage id="factsworldmap.intro" />
          </h4>
          <div className="row worldmap-row">
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

            <div className="col-md-10 ">
              <Motion
                defaultStyle={{
                  zoom: 1.26,
                  x: 0,
                  y: 45
                }}
                style={{
                  zoom: spring(this.state.zoom, {
                    stiffness: 210,
                    damping: 50
                  }),
                  x: spring(this.state.center[0], {
                    stiffness: 210,
                    damping: 50
                  }),
                  y: spring(this.state.center[1], {
                    stiffness: 210,
                    damping: 50
                  })
                }}
              >
                {({ zoom, x, y }) => (
                  <div className="map-div">
                    <ComposableMap
                      projectionConfig={{ scale: 205 }}
                      width={980}
                      height={551}
                      style={{
                        width: "90%",
                        height: "auto"
                      }}
                    >
                      <ZoomableGroup
                        center={[x, y]}
                        zoom={zoom}
                        disablePanning={true}
                      >
                        <Geographies
                          geography={
                            this.props.language === "de"
                              ? jsonFileDE
                              : jsonFileEN
                          }
                          className="Geographies"
                          disableOptimization={true}
                        >
                          {(geographies, projection) =>
                            geographies.map(
                              (geography, i) =>
                                geography.id !== "010" && (
                                  <Geography
                                    key={i}
                                    geography={geography}
                                    projection={projection}
                                    className="Geography"
                                    data-tip={geography.properties.name}
                                    onClick={this.resetCityClick}
                                    tabable={false}
                                  />
                                )
                            )
                          }
                        </Geographies>
                        <Markers>
                          {cities.map((city, i) => (
                            <Marker
                              key={i}
                              marker={city}
                              onClick={this.handleCityClick}
                              style={{ cursor: "pointer" }}
                            >
                              <circle
                                cx={0}
                                cy={0}
                                r={8}
                                fill={
                                  city.name === this.state.clickCity
                                    ? "#343a40"
                                    : "#FF5722"
                                }
                                stroke={
                                  city.name === this.state.clickCity
                                    ? "#343a40"
                                    : "#DF3702"
                                }
                              />
                              {city.name === this.state.clickCity ? (
                                <svg
                                  height="800"
                                  width="800"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                  {city.textDE !== undefined ? (
                                    <rect
                                      height="26"
                                      width={
                                        this.props.language === "de"
                                          ? city.textDE.length * 14
                                          : city.textEN.length * 14
                                      }
                                      x="10"
                                      y="0"
                                      rx="10"
                                      className="tooltipDiv"
                                      preserveAspectRatio="xMinYMin meet"
                                    />
                                  ) : null}
                                  <text x="12" y="20" className="tooltipText">
                                    {this.props.language === "de"
                                      ? city.textDE
                                      : city.textEN}
                                  </text>
                                  <image
                                    xlinkHref={this.state.tooltipImg}
                                    height={
                                      window.innerWidth >= 768 ? "450" : "1000"
                                    }
                                    width={
                                      window.innerWidth >= 768 ? "600" : "1000"
                                    }
                                    x="10"
                                    y="30"
                                    className="tooltipImage"
                                    preserveAspectRatio="xMinYMin meet"
                                  />
                                </svg>
                              ) : null}
                            </Marker>
                          ))}
                        </Markers>
                      </ZoomableGroup>
                    </ComposableMap>
                    {/* <ReactTooltip className="mapToolTip" /> */}
                  </div>
                )}
              </Motion>
            </div>
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
    img: amsterdam
  },
  {
    name: "Berlin",
    coordinates: [13.404954, 52.520007],
    img: berlin,
    textDE: "Mein aktueller Wohnort",
    textEN: "My current residence"
  },
  {
    name: "Budapest",
    coordinates: [19.040235, 47.497912],
    img: budapest
  },
  {
    name: "Hanoi",
    coordinates: [105.83416, 21.027764],
    img: hanoi,
    textDE: "Meine Heimmatstadt",
    textEN: "My lovely hometown"
  },
  {
    name: "Hatinh",
    coordinates: [105.887749, 18.355954],
    img: hatinh
  },
  {
    name: "Kjerag",
    coordinates: [6.577522, 59.034671],
    img: kjerag
  },
  {
    name: "Lanzarote",
    coordinates: [-13.631287, 29.018574],
    img: lanzarote
  },
  {
    name: "Nghean",
    coordinates: [104.920036, 19.234249],
    img: nghean
  },
  {
    name: "Oslo",
    coordinates: [10.7522454, 59.9138688],
    img: oslo
  },
  {
    name: "Paris",
    coordinates: [2.3522, 48.8566],
    img: paris
  },
  {
    name: "Stockholm",
    coordinates: [18.068581, 59.329324],
    img: stockholm
  }
];