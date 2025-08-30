
//destruture using props
const Body=(props)=>{

console.log(props);

const {arg1,arg2}=props;

    return (
    <>
    <h1>Body</h1>
    {arg1}
    {arg2}
    </>
    );
}

export default Body;