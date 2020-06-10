// Import React
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

// Import CSS
import "./styles/mystyle.css";
import "./styles/bootstrap4.css";
import "./styles/timeline.css";
import "./styles/facts.css";

// Import JS
import "../node_modules/bootstrap/dist/js/bootstrap.js";

// Import App
import App from "./App";

// Render App
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();