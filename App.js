import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header/Header";
import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";

const AppLayout =()=>{

const value1="Hello";
const value2="World";

    return (
    <>
    <Header arg1={value1} arg2={value2}  />
    <Body arg1={value1} arg2={value2}/>
    <Footer/>
    </>
);
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);