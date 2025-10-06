import { useEffect, useState } from "react";
import axios from "axios";
const Header = () => {
 
  const [user,setuser]=useState([]);
  const [loading, setloading]=useState(true);
  const [error, seterror]=useState(null);


  // useEffect(()=>{
  //   fetch("https://dummyjson.com/users")
  //   .then((res)=>{
  //     if(!res.ok){
  //       throw new Error("network error");
  //     }
  //     return res.json();
  //   })
  //   .then(data=>{
  //     setuser(data.users);
  //     setInterval(()=>{
  //       setloading(false);
  //     }, 5000);
  
  //   })
  //   .catch((err)=>{
  //     seterror(err.message);
  //     setloading(false);
  //   })
  // },[]);
  
  // useEffect(()=>{
  //   const fetchUsers= async()=>{
  //      try{
  //       const res= await fetch("https://dummyjson.com/users");
               
  //      console.log(res);
  //        if(!res.ok){
  //       throw new Error("network error");
  //     }
  //       const data= await res.json();
  //       setuser(data.users);
  //     }
  //      catch(err){
  //     seterror(err.message);
  //     setloading(false);
  //      }
  //      finally{
  //             setInterval(()=>{
  //       setloading(false);
  //     }, 5000);
  //      }
  //   }
  //   fetchUsers();
  // },[]);


    useEffect(()=>{
    const fetchUsers= async()=>{
       try{
        const res= await axios.get("https://dummyjson.com/users");
console.log(res);
        setuser(res.data.users);
      }
       catch(err){
      seterror(err.message);
      setloading(false);
       }
       finally{
        setInterval(()=>{
        setloading(false);
      }, 5000);
       }
    }
    fetchUsers();
  },[]);

 if(loading)
 {
return (<p>Loading......</p>);
 }
 if(error)
 {
  return (<p>Error : {error}</p>);
 }

  return (
    <>
    <h1>User List</h1>
    <ul>
      {user.map((user)=>(
        <li key={user.id}>
           {user.firstName}
            {user.lastName}
            ---{user.email}
        </li>
      ))}
    </ul>
    </>
  );
};

export default Header;