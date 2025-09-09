import { EmployeeProps } from "./types";

// export const Employee=({name,age})=>{
//     return (
//     <>
//     <h1>{name}</h1>
//     <h1>{age}</h1>
//     </>
//     );
// }

// export const Employee=(props)=>{
//     return (
//     <>
//     <h1>{props.name}</h1>
//     </>
//     );
// }


// export const Employee=(props)=>{
//     return (
//     <>
//     <h1>{props.name}</h1>
//     <h1>{props.age}</h1>
//     <h1>{props.city}</h1>
//     <h1>{props.country}</h1>
//     </>
//     );
// }

// let num:number=10;
// num="efef";

// export const Employee=({...rest})=>{
//     return (
//     <>
//     <h1>{rest.name}</h1>
//     {rest.name=333}
//     <h1>{rest.name}</h1>
//     <h1>{JSON.stringify(rest)}</h1>
//     <h1>{rest.age}</h1>
//     <h1>{rest.city}</h1>
//     </>
//     );
// }




export const Employee=({...rest}:EmployeeProps)=>{
    return (
    <>
    <h1>{rest.name}</h1>
    {/* {rest.name=333} */}
    <h1>{rest.name}</h1>
    <h1>{JSON.stringify(rest)}</h1>
    <h1>{rest.age}</h1>
    <h1>{rest.city}</h1>
    </>
    );
}