
import { URL1, URL2 } from "../constants/constants";
import { useState } from "react";
import _ from "lodash";
//on the fly destructing
const Header=()=>{
//JS functions---- Lodash utility functions - part 1..Array, object, collections, strings



// 1- Chunk

//[[1,2],[3,4],[5,6]]- ask -- splitting data into smaller groups
// const arr=[1,2,3,4,5,6];
// const result1=_.chunk(arr, 2);

// console.log(result1);


// const products=["shirts","pant","shoes","watch","cap","tie"];

// const [page, setpage]=useState(0);

// const pages=_.chunk(products,2);
// console.log(pages);
// //pages[0]-shirts, pant
// //pages[1]-shirts, pant
// //pages[2]-shirts, pant

//2 - compact

//falsy values-> false, null, 0, "", undefined, NaN
// const rawInput=["React", null, "","Elango",undefined, false,0,NaN];
// const cleanedInput=_.compact(rawInput);
// console.log(cleanedInput);

// 3 - concat

// const rawInput1=["React","Elango"];
// const rawInput2=["sanjay","jagadish"];
// const cleanedInput=_.concat(rawInput1,rawInput2);
// console.log(cleanedInput);


// 4 - difference
// const products=["shirts","pant","shoes","watch","cap","tie"];

// const cart=["shirts","shoes"];

// const buy=_.difference(products,cart);
// console.log(buy);

//5-  drop

// const notification=["welcome","New message", "update availablr","Discount"];

// const unread=_.drop(notification,2);

// console.log(unread);

// 6 - uniq

// const notification=["welcome","New message", "update","welcome"];

// const unread=_.uniq(notification,2);

// console.log(unread);

//7 - intersection

// const user1Friend1=["Alice","Bob","charlie"];
// const user1Friend2=["david","Bob","charlie"];
// const mutualFriends=_.intersection(user1Friend1,user1Friend2);
// console.log(mutualFriends);

//8--- flattern

// const apiData=[1,[2,3],[4,[5,6,7,[8,[9]]]]];
// const flatdata=_.flatten(apiData);
// console.log(flatdata);

//9----- fill
// const emptySlots=_.fill(Array(3),"empty seats");
// console.log(emptySlots);

    return (
    <>
    {/* <h1>Page {page + 1}</h1>
      {pages[page].map((item,i)=>{
        console.log(item);
       return <h1 key={i}>{item}</h1>
      })}
    <button 
    onClick={()=>
      setpage((p)=>p+1 % pages.length)
    }
    >Click to Next Page</button> */}
{/* 
    <ul>
      {cleanedInput.map((item,i)=>{
        console.log(item);
       return <h1 key={i}>{item}</h1>
      })}
    </ul> */}
    </>
    );

}

export default Header;