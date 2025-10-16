import { useEffect, useState } from "react";
const Header = () => {
  const [userid,setuserid]=useState(1);
  const [userorg,setuserorg]=useState([]);
  const [user,setuser]=useState({});
  const [loading, setloading]=useState(true);
  const [error, seterror]=useState(null);
 

    useEffect(()=>{
    fetch("https://dummyjson.com/users")
    .then((res)=>{
      if(!res.ok){
        throw new Error("network error");
      }
      return res.json();
    })
    .then(data=>{
      setuserorg(data.users);
      setInterval(()=>{
        setloading(false);
      }, 5000);
  
    })
    .catch((err)=>{
      seterror(err.message);
      setloading(false);
    })
  },[]);


  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${userid}`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("network error");
      }
      return res.json();
    })
    .then(data=>{
      setuser(data);
      setInterval(()=>{
        setloading(false);
      }, 5000);
  
    })
    .catch((err)=>{
      seterror(err.message);
      setloading(false);
    })
  },[userid]);


  return (
    <>
    <ul>
        <li key={user.id}>
           {user.firstName}
            {user.lastName}
            ---{user.email}
        </li>
    </ul>
    <select onChange={(e)=>setuserid(e.target.value)}>
      {
        userorg.map((user)=>(
           <option key={user.id} value={user.id}>
 user {user.id}
      </option>
        ))
      }
    </select>
    </>
  );
};

export default Header;