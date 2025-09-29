
import { URL1, URL2 } from "../constants/constants";
import { useState } from "react";
import _ from "lodash";
//on the fly destructing
const Header=()=>{
//JS functions---- Lodash utility functions - part 1..Array, object, collections, strings

//syntax
//1. get(object, path ("") ,defaultValue)

// const user={
//   profile:{
//     name:"divya",
//     address:{
//       city:"tirupur",
//       state:"tamilnadu",
//       district:"new yrok",
//       country:"India"
//     }
//   }
// };

// const city=_.get(user,"profile.address", "there is no city");

// console.log(user);
// console.log(user.profile);
// console.log(user.profile.name);



//2. set(object, path ("") ,defaultValue)

// const [user, setuser]=useState({
//   profile:{
//     name:"divya"
//   }
// });

// // console.log("user objec"+JSON.stringify(user));
// const updateName=()=>{
//   const updatedUser={...user};
//   // console.log("updated user objec"+JSON.stringify(updatedUser));
//   _.set(updatedUser,"profile.name","Elango");
//   setuser(updatedUser);
// }
// console.log("user objec"+JSON.stringify(user));

//3. has(object, path)

// const user={
//   profile:{
//    premium:true
//   }
// }

    return (
    <>
    {/* {
    _.has(user, "profile.premium") ? (<p>
      premium user
    </p>):(<p> Not a premium user </p>)
  } */}
    </>
    );

}

export default Header;