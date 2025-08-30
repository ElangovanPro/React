
import { URL1, URL2 } from "../constants/constants";

//on the fly destructing
const Header=({arg1, arg2})=>{
    return (
    <>
    <h1>Header</h1>
    {arg1+" "}
    {arg2+" "}
    {URL1+" "}
    {URL2+" "}
    </>
    );
}

export default Header;