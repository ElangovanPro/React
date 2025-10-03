
import { URL1, URL2 } from "../constants/constants";
import { useState } from "react";
import _ from "lodash";

const Header=()=>{
//JS functions---- Lodash utility functions - part 1..Array, object, collections, strings

//primitive values---Numbers, true, false, string
   const [count,setcount]=useState(0);
   
   const [user,setuser]=useState({name:"Elango"});

   const obj1={
    id:1,
    name:"elango",
    address:{
        city:"erode",
        pincode:"638003"
    }
   };
   const obj2={
    id:1,
    name:"elango",
    address:{
        city:"chennai",
    }
   };

const merged=_.merge({},obj1,obj2);
console.log("merged"+JSON.stringify(merged));//overwrites with keep original

const assign=_.assign({},obj1,obj2);
console.log("merged"+JSON.stringify(assign));//overwrites without keep original



//    console.log("App rendereding"+count);
    return (
    <>
     {count}
     {user.name}
     <button
onClick={()=>{
    setcount(pre=>pre+1);
}}
     >Click me for count</button>
     {/* {    console.log(user)} */}
          <button
onClick={()=>{
    user.name="jagadish"
    // setuser({...user});//creating new object one of way
    setuser(_.assign({},user,{name:"jagadish"}));//creating new object other one of way
    console.log(user)
}}
     >Click me for user</button>
    </>
    );
}

export default Header;