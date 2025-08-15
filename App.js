import React from "react";
import ReactDOM from "react-dom/client";

const heading=(
<div>
<h1>hello world</h1>
<h3>Welcome to the React World</h3>
{100+200}
</div>);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//its converts the js object or react element to the html format which browser understands(browser doesn't understand react direclty)
console.log(heading);//object