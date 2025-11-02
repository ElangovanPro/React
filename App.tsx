import Body from "./src/components/Body/Body";
import Footer from "./src/components/Footer/Footer";
import { Age } from "./src/components/Age/Age";
import { Employee } from "./src/components/Employee/Employee";
import { EmployeeProps } from "./src/components/Employee/types";
import Card from "./src/components/cards/Card";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import React from "react";
import Header from "./src/components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink } from "react-router";
import { NavBar } from "./src/components/Navigation/NavBar";

const AppLayout =()=>{
   
    return (
   <BrowserRouter>
   <NavBar/>
     <Routes>
    <Route path="/" element ={<Header/>}/>
    <Route path="/Footer" element ={<Footer/>}/>
    <Route path="/Employee" element ={<Employee name={"Jaga"} age={25} city={"lisbun"} country={"Swiz"}/>}/>
   </Routes>
   </BrowserRouter>
);
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
   <AppLayout/>
);