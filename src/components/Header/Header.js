import { useEffect, useState,useRef, useMemo } from "react";
const Header = () => {
//usememo - helps react remember the result of a calculation so its 
//doesn't have to redo it every time your component re-renders

const [count, setcount]=useState(0);
const [text, settext]=useState("");

const slowFunction=(c)=>{
console.log("slow function is called starting");
for(let i=0;i<1000000000;i++){
}
console.log("slow function is called ending");
return c*c;
}
//normal value
// const result=slowFunction(count);

//usememo
const result= useMemo(()=>{
  console.log("from useMemo");
return slowFunction(count);
}, [count]);

// //achieving through useEffect
// const [double, setdouble]=useState(0);

// useEffect(()=>{
//     console.log("from UseEffect");
// setdouble(count*count);
// }, [count]);

console.log("result = "+result);
console.log("component re- rendered");

  return (
    <>
    <h1>
        Count :{count}
    </h1>
    <h2>Doubbled from usememo : {result}</h2>
   {/* <h2>Doubbled from useEffect: {double}</h2> */}
<button
onClick={()=>{
  setcount(count+1);
}}
>Click me</button>
<br/>
<br/>
<br/>
    <input 
    placeholder="enter...."
    value={text}
    onChange={(e)=>settext(e.target.value)}
    >
    </input>

    <h1>Entered text is = {text}</h1>
    </>

  );
};

export default Header;