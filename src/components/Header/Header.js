import { useEffect, useState,useRef } from "react";
const Header = () => {
//useRef -keeps a mutable value that doesn't not cause re-render
//when changed also used to direclty access DOM elemens

const [color,setcolor]=useState("blue");
const boxRef=useRef(null);
const firstRender=useRef(true);

useEffect(()=>{

console.log("firstRender "+firstRender.current);


if(firstRender.current){
firstRender.current = false;
return;
}

console.log("useEfect rendering");

boxRef.current.style.transition = "transform 2s";
boxRef.current.style.transform = "scale(5)";
boxRef.current.style.background = color;

const timer=setTimeout(()=>{
boxRef.current.style.transform = "scale(1)";
},500)


return ()=>clearTimeout(timer);
},[color]);

console.log("compoennt rendering");

  return (
    <>
    <div>
      <div ref={boxRef} style={{background:color}}>
   Box
      </div>
  <br/>
  <hr/>
      <button onClick={()=>{
        setcolor("red");
      }}>
        click me to change color
      </button>
    </div>

    </>
    
  );
};

export default Header;