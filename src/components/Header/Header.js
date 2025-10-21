import { useEffect, useState,useRef, useMemo } from "react";
const Header = () => {
//usememo - helps react remember the result of a calculation so its 
//doesn't have to redo it every time your component re-renders

const [user,setuser]=useState([]);
const [search,setsearch]=useState("");


useEffect(()=>{
async function fetchusers() {
  const res=await fetch("https://dummyjson.com/users");
  const data=await res.json();
  setuser(data.users);
  // console.log(data.users);
   console.log("useEffect running...");
}
fetchusers();
},[])

const filterUsers = useMemo(()=>{
return user.filter((user)=>{
  console.log("filter logic running...");
  return user.firstName.toLowerCase().includes(search.toLocaleLowerCase());
})
},[search])

// console.log("filterUsers"+JSON.stringify(filterUsers));
console.log("component rendered");

  return (
    <>
<div>

  <input
type="text"
placeholder="search..."
value={search}
onChange={(e)=>setsearch(e.target.value)}
/>

<ul>
  {filterUsers.map((user)=> (<li key={user.id}>{user.firstName}</li>))}
</ul>

</div>
    </>
    
  );
};

export default Header;