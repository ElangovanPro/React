
import { useState } from 'react';
import './Footer.css';


export const footerLink="https://www.google.com";

export const footerLink1="https://www.google.com";


//external css
const Footer=()=>{
//whenver the state changes it will re-render the component
const [age, setage]=useState(18);
console.log(age);

    return (
    <footer className="footer">
    <h1>Footer</h1>
    <h1>{age}</h1>
     <button className='bodyButton' onClick={
        ()=>{
        setage(20);
    }
    }>Click me</button>
    {console.log("component re-rendering")}
    </footer>
    );
}

export default Footer;