   /* primitive values vs objects 
    primitive- string, number, boolean, undefined,null (immutable, stored directly, lightweight)--storing by value...call stack--quick access
   non-primitive- arrays,objects----storing by reference...heap memory--slower access
    */
export const JsPrototypeExample=()=>{

//every javascript value (except null and undefined) is connected to a
//prototype object a hidden internal link that gives it access to built in methods.
  
  
//   null
  
// object                  ----parent (ancestor)


// Array String Number Boolean     ---- children 


// []    "text"  123     true      -----grand children


// object.prototype

// Array.prototype String.prototype Number.prototype Boolean.prototype    
  
  // let name="elango";
  //  let newName=name.toUpperCase();
  //  console.log(newName)

  //  let name1="jagadish";
  //  let newName1=name1.toUpperCase();
  //  console.log(newName1)

//   let name3="jagadish"; 
//     // let newName3=name3.toUpperCase();
//     //__proto__. to uppercase
//   // console.log(name3.__proto__);// String.prototype

//    let num=98;//Number.prototype

//    let boo=true// Boolean.prototype
  
//    let arr= [1,23]//Array.prototype


//   console.log(Object.getPrototypeOf(num)===Number.prototype);
//   console.log(Object.getPrototypeOf(name3)===String.prototype);
//   console.log(Object.getPrototypeOf(boo)===Boolean.prototype);
//   console.log(Object.getPrototypeOf(arr)===Array.prototype);


//  const obj1={name:"elango"};
//  console.log(Object.getPrototypeOf(obj1));
//  console.log(Object.getPrototypeOf(obj1)===Object.prototype);
  

//   console.log(Number.prototype.__proto__);
//   console.log(Object.prototype.__proto__);



//arr - >  Array.prototype ---> object.prototype --->null
const arr=[1,2,3];
const arr1=[4,5,6];
const arr2=[7,8,9];

Array.prototype.first1= function (){
  return this[0];
}

// Object.prototype.first1= function (){
//   return this[0];
// }

console.log(arr.first1())
console.log(arr1.first1())
console.log(arr2.first1())



const name="elango";

const name1="elango1";

String.prototype.random = function (){
  return "jjj";
}

console.log(name.random())
console.log(name1.random())

    return (
        <>
    <h1>Javascript Prototype Concepts</h1>
    </>
    );
}