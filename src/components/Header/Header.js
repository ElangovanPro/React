
import { URL1, URL2 } from "../constants/constants";

//on the fly destructing
const Header=({arg1, arg2})=>{

  // map, filter, reduce, forEach
  //includes,sort,find,some


  
// function add(n)
// {
// return n*2;
// }


// const nums1=add(5);
// console.log(nums1);

//   const nums=[1,2,3,4,5,6,"8"];//2,4,6,8,10

  //when we need to use map==> when we need to transform
//   const numsCopy=[nums.length];
//   for(let i=0;i<nums.length;i++){
//     numsCopy[i]=nums[i]*2;
//   }
//   console.log(numsCopy);
// const numsCopy=nums.map(n=>n*2);//[2,4,6,8,10]
// console.log(numsCopy);

// const numsCopy2=nums.map(e=>e/100);
// console.log(numsCopy2);

// const numsCopy3=nums.filter(n=>typeof n==="number" && n%2===0);
// console.log(numsCopy3);

// const numsCopy4=nums.filter(n=> typeof n==="string");
// console.log(numsCopy4);

const users=[{
    name:"Elango"
},{
    name:"sanjay"
}];

//n=>()

console.log(users.map(n=>(n.name)));

const newUsers=users.map(n=>({
    ...n,
    active:true
}));

console.log(newUsers);
console.log(users.map(n=>({
    ...n,
    active:true
})));
console.log(users.map(n=>({
    ...users,
    active:true
})));

//loose equality
// console.log(8==8);//true
// console.log(8=='8');//true
// console.log(0==false);//true
// console.log(null==undefined);//true

// //strict equality
// console.log(8===8);//true..number===number
// console.log(8==='8');//false...number===string
// console.log(0===false);//false...number===boolean
// console.log(null===undefined);//false....null===undefined

// console.log(typeof 5);
// console.log(typeof "string");
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);

//inline css
    return (
    <header>
    <h1 style={
        {
            backgroundColor:"violet",
            color:"red"
        }
    }>Header</h1>
    {arg1+" "}
    {arg2+" "}
    {URL1+" "}
    {URL2+" "}
    </header>
    );
}

export default Header;