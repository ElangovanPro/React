
import React from "react";
import ReactDOM from "react-dom/client";

//component composition- component inside component
//react component == react element

const Title=()=>(<h1>Hello from title</h1>);

const number=100;

const element=<span>Welcome</span>;

const Heading =()=>{
    return (
    <>
    <Title/>
    {element}
    {100+300}
    {number}
    {console.log("hey hi")}
    <h1>Hello world</h1>
    <h2>Hello world</h2>
    <h3>Hello world  {number}</h3>
    <h4>Hello world</h4>
    <h5>Hello world</h5>
    <h6>Hello world</h6>
    {Title()}
    </>
);
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);