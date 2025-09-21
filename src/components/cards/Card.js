import { useEffect, useState } from "react";

const Card=()=>{

const [count,setCount]=useState(0);
//hooks
//useEffect-- > is a react Hook that lets you run side Effects in func components
//side Effects--> is anythibng that happens outside the components rendering process such as
//fetching thr data from API, update the DOM manually, listen to event


//rendering builds the UI.Effects let you connect your UI to thr outside world such as API call, database
   
//useEffect runs after the component rendered

//syntax--- two parameters-()=>{}, []depdency array

useEffect(
()=>{
},
[count]//empty means run only once
);

const [user, setUsers]=useState([]);

useEffect(()=>{
  
console.log("useEffect rendered");
  fetch("https://dummyjson.com/users")
  .then(res=>res.json())
  .then(data=>setUsers(data.users));
},[])


console.log("component rendered");

return (
    <>
    <h1>
    Hello world - {count}
    </h1>
    <ul>
      {user.map(u=>(<li key={u.id}>{u.firstName}</li>))}
    </ul>

    <button onClick={()=>{
      setCount(prev=>prev+1);
    }}>
Click me
    </button> 
    </>
    );
}

export default Card;
