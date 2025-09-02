
import { useState } from 'react';
import './Footer.css';


export const footerLink="https://www.google.com";

export const footerLink1="https://www.google.com";

// let age=18;


//external css
const Footer=()=>{

const [age, setage]=useState(18);
console.log(age);

    return (
    <footer className="footer">
    <h1>Footer</h1>
    <h1>{age}</h1>
     <button className='bodyButton' onClick={
        ()=>{
        // age=20;
        setage(20);
    }
    }>Click me</button>
    {console.log("component re-rendering")}
    </footer>
    );
}

export default Footer;