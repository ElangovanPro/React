import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  {id:"parent"},
  React.createElement("h1",{id:"first child"},"Hello world"),
  React.createElement("h3",{id:"second child"},"Welcome to the React World")
);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//its converts the js object or react element to the html format which browser understands(browser doesn't understand react direclty)
console.log(heading);//object