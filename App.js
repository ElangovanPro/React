
import React from "react";
import ReactDOM from "react-dom/client";


// const headingReactWay=React.createElement("h1",{id:"parent"},"Hello from react element way");
const heading=(
<div id="parent">
<h1 id="text">hello world</h1>
<h3>Welcome to the React World</h3>
{100+200}
<button onClick={()=>document.getElementById("text").innerHTML="Hello react"}>Clicking</button>
</div>);


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);//its converts the js object or react element to the html format which browser understands(browser doesn't understand react direclty)
console.log(heading);//object
// console.log(headingReactWay);//object