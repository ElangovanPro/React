
import { URL1, URL2 } from "../constants/constants";
import { useEffect, useState } from "react";
import _ from "lodash";

const Header=()=>{
//useEffect - lets you to run the side effects,
//side Effects-> anything outside rendering - API calls, event listeners,subscriptions, timers etc
//    let count=0;
const [count, setCount]=useState(0);

const [user, setUser]=useState([]);

   const handleCount=()=>{
     setCount(pre=>pre+1);
    //   console.log(count);
   }

//       useEffect(()=>{ - it will run whenever the component re rendering
//    })

//    useEffect(()=>{  - it will run only once when first time component rendering
    
//    },[]),
//    useEffect(()=>{
//     console.log("useEffect rendering = "+count);
//    },[count])// it will run based on the dependency, if dependecny chnages it will run

// useEffect(()=>{

//     fetch("https://dummyjson.com/users")
//     .then(res=>res.json())
//     .then(data=>console.log(data.users))
//     .then(data=>setUser(data.users))
//     .catch((err)=>console.log(err))
// },[])


useEffect(()=>{

    fetch("https://dummyjson.com/users")
    .then(res=>res.json())
    .then(data=>{
        console.log(data.users)
        return data;
    })
    .then(data=>setUser(data.users))
    .catch((err)=>console.log(err))
},[])

// useEffect(()=>{
//     fetch("https://dummyjson.com/users")
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(console.log(data.users));
//         // console.log(data.users);
//     setUser(data.users);
//     })
//     .catch((err)=>console.log(err))
// },[])

//    console.log("component rendering");
    return (
    <>
    <h1>Hello world = {count}</h1>
    {/* <h1>Hello world = {JSON.stringify(user)}</h1> */}
     <h1>Hello world = 
    {
     user
     .map((e)=>{
      console.log(e.username)
     })}</h1>
    <button
    onClick={handleCount}
    >Click me to increase count</button>
    </>
    );
}

export default Header;