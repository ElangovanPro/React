
import { URL1, URL2 } from "../constants/constants";
import { useState } from "react";
import _ from "lodash";

const Header=()=>{
//JS functions---- Lodash utility functions - part 1..Array, object, collections, strings

//syntax
//4. pick(object, [path])

// const user={
//   id:1,
//   name:"sanjay",
//   age:24,
//   role:"tester"
// };

// const payload=_.pick(user, ["id", "name"]);


//5. omit(object, [path])

// const user={
//   id:1,
//   name:"sanjay",
//   age:24,
//   role:"tester",
//   password:"sangavi"
// };

// const payload=_.omit(user, ["password"]);

//6.keys

// const user={
//   id:1,
//   name:"sanjay",
//   age:24,
//   role:"tester",
//   password:"sangavi"
// };

// const payload=_.keys(user);


// 7. values


// const user={
//   id:1,
//   name:"sanjay",
//   age:24,
//   role:"tester",
//   password:"sangavi"
// };

// const payload=_.values(user);

// map function

// const numbers=[1,2,3,4,5];
// const doubleNumbers= numbers.map((n)=>n/2);
// console.log(doubleNumbers);


//8.mapkeys(object, iteratee)

// const user={
//   id:1,
//   name:"sanjay",
// };

// const payload=_.mapKeys(user, (value, key)=>`user_${key}`);


//9. mapvalues(object, iteratee)

// const user={
//   science:"50",
//   social:"100",
// };

// const payload=_.mapValues(user, (n)=>`user = ${n*2}`);


//10 merge(object,sources)
// const user1={
//   id:1,
//   name:"sanjay",
//   age:44,
//   salary:4000,
// };

// const user2={
//   id:2,
//   name:"jagadish",
//   age:34,
// };

// const payload=_.merge({},user1,user2);

    return (
    <>
     {/* <h1>{JSON.stringify(user)}</h1> */}
     <p>{JSON.stringify(payload)}</p>
    </>
    );
}

export default Header;