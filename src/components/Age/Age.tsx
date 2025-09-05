import { useState } from 'react';
import './Age.css';

// let count=0;

//we can delcare normal variable in global scope also
//but we can't declare use state varibale in global, we
//can only declare within the component or block


//js - way..
// let age=18;
// let weight=66.7;
// let gender="male";
// let above18= true;
// let height;
// let parent=null;

// let numbers=[1,2,3,4];

// weight="school";

//typescript way

let age:number=18;
let weight:any=66.7;
let rollNumber:number | string =1;


let gender:string="male";
let above18:boolean= true;
let height:undefined;
let marriage:unknown;
let parent:null=null;


// let numbers:number[]=[1,2,3,4];
//or
let numbers:Array<number>=[1,2,3,4];

// height=99;
marriage="oo";
rollNumber="one";

weight="school";



export const Age=()=>{
// Direct State Mutation:
// count++ directly modifies the count variable in place. In React, state should be treated as immutable. When you want to update state, you should create a new state object or value and then use the appropriate state setter function (e.g., setCount for functional components using useState, or this.setState for class components). Direct mutation bypasses React's internal mechanisms for tracking state changes, which can lead to unexpected behavior and components not re-rendering when they should.
// Asynchronous Nature of State Updates:
// When using setCount or this.setState, React batches state updates for performance. If you were to directly mutate count and then call setCount(count), you might be using an outdated count value if other state updates are pending.
   const [count, setcount]=useState(0);//initial value
//   const [count, setcount]=useState<number>(0);//typescript
    return (<>
    <h1>Age</h1>
    <h3>{count}</h3>
    <h5>{"age = "+ age+" weight = "+weight}</h5>
    <button
    onClick={
        ()=>{
            console.log("Before = "+ count);
            setcount(count+1);
            console.log("After = "+count);
        }
    }
    
    >Click me</button>
    </>);
}


