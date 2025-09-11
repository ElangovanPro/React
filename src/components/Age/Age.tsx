import { useState } from 'react';
import './Age.css';

export const Age=()=>{

//state variable
//const [statevariable, statevariableChange]=useState(initial value)
const [count1, setCount1]=useState(0);
const [count2, setCount2]=useState(0);

const [todo, setTodo]=useState(["jagadish","sanjay"]);

const [todo2, setTodo2]=useState({
    name:["elango"],
    age:24,
});

const incrementCount1=()=>{
        // setcount(count+1);//not recommended
        //when you call Setstate like setcount, react doesn't update the state immediately. Instead , it schedule it, so if you rely on the current value, you might get an outdated value
         setCount1(count1+1);// it always returns the latest state
         setCount1(count1+1);
         setCount1(count1+1);
   }

const incrementCount2=()=>{
         setCount2(prev=>prev+1);// it always returns the latest state
         setCount2(prev=>prev+1);
         setCount2(prev=>prev+1);
        }

const addTodo=()=>{
 setTodo([...todo,"elango"]);
    }

    const addTod2=()=>{
        setTodo2(prev=>
            ({
            ...todo2,
            name:[prev.name+"jagadish"],
            age:prev.age+1,        
        }))
            
    }

return (
    <>
    <h1>Count 1 : {count1}</h1>
    <button onClick={incrementCount1}>   
        Click me to increase the count
    </button>
    <hr />
     <h1>Count 2 : {count2}</h1>
    <button onClick={incrementCount2}>   
        Click me to increase the count
    </button>
        <hr />
     <h1>Add Todo : {todo}</h1>
    <button onClick={addTodo}>   
        Click me to add todo
    </button>
            <hr />
     <h1>Add Todo2 : {todo2.name}-  {todo2.age}</h1>
    <button onClick={addTod2}>   
        Click me to add todo
    </button>
    </>);
}


