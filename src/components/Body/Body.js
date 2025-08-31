import './Body.css';


//destruture using props
const Body=(props)=>{

// console.log(props);

let {arg1,arg2}=props;


//internal css
const styleBody=
{
    color:"red"
};

    return (
    <main id="main">
    <h1 style={styleBody}>Body</h1>
    {arg1}
    {arg2 +"-----------"}
    <button className='bodyButton' onClick={
        ()=>{
        console.log("Before Button clicked "+arg2);
        arg2="react";
        console.log("After Button clicked "+arg2);
    }
    }>Click me</button>
    </main>
    );
}

export default Body;