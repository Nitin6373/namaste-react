import React from "react";
import ReactDOM from "react-dom/client"
import { jsx } from "react/jsx-runtime";

const heading = React.createElement("h1",{},"JUst a heading")

console.log(heading);

const root = ReactDOM.createRoot(document.querySelector(".root"))

root.render(heading)


// Create The Above shown same element with jSx

const jsxheading = <h1>It's jsx?</h1>

console.log(jsxheading);

const root2 = ReactDOM.createRoot(document.querySelector(".rootJSX"))

root2.render(jsxheading)