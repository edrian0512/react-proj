// import React and ReactDOM  libraries
import React from "react"; // manage components
import ReactDOM from "react-dom"; // renderer, para ma-display
import "./css/index.css";
import App from "./App";

// import {createRoot} from "react-dom/client"; //React18

// const container = document.getElementById("root")
// const root = createRoot(container)



<App /> 



// take the react component and show on screen
// (,san gusto i-output)
// close yung jsx <jsx/>
ReactDOM.render(<App />, document.getElementById("root"))

// root.render(<App/>); // React18