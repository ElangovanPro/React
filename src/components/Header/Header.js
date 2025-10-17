import { useEffect, useState,useRef } from "react";
const Header = () => {
//useRef -keeps a mutable value that doesn't not cause re-render
//when changed also used to direclty access DOM elemens

const [count,setcount]=useState(0);
const refcount=useRef(0);

let normalcount=0;

console.log("component re- rendering ");

  return (
    <>
<h1>Count : {count}</h1>
<button
onClick={()=>{
  setcount(pre=>pre+1);
}}
>Click me </button>


<br/>
<hr/>
<h1>Count : { refcount.current}</h1>
<button
onClick={()=>{
  refcount.current++;
  console.log("ref count"+refcount.current);
}}
>Click me for ref count </button>
    </>
    
  );
};

export default Header;
