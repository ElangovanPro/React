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
const AppLayout =()=>{
   
//   //spread operator - array
//    const arr1=[1,2,3,4,5,6,7,8,8,9,9];
//    const arr2=[4,5,6];

//    const mergeArr=[arr1,arr2];
//    const mergeAr1=[1,2,3,4,5,6,7,8,8,9,9,arr2];
//    const mergeAr2=[...arr1,...arr2];

//    console.log(mergeArr);
//    console.log(mergeAr1);
//    console.log(mergeAr2);

//spread= object
// const obj1={
//     name:"sanjay",
//     age:24,
//   }
// const obj2={
//     city:"chennai",
//     country:"India",
//   }
// const mergObj={obj1,obj2};
//  const mergObj1={...obj1,...obj2};
//  console.log(mergObj);
//  console.log(mergObj1);

// let num:number=10;

// num="elango";


//datatypes---number,boolean,string,undefined,null,unknown
 const emp1:EmployeeProps={
    name:"sanjay",
    age:24,
    city:"chennai",
    country:"India",
 }

    return (
    <>
      <Header />
    {/* <Header arg1={undefined} arg2={undefined} /> */}
   {/* <Card/> */}
    {/* <Header />
    <Body/>
    <Footer/> */}
    {/* <Age/> */}
    {/* <Employee name="sanjay" age={24} city="chennai" country="India"/>
    <Employee {...emp1} /> */}
    </>
);
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
   <AppLayout/>
  </React.StrictMode>
);