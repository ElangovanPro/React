
import { URL1, URL2 } from "../constants/constants";

//on the fly destructing
const Header=({arg1, arg2})=>{
//inline css
    return (
    <header>
    <h1 style={
        {
            backgroundColor:"violet",
            color:"red"
        }
    }>Header</h1>
    {arg1+" "}
    {arg2+" "}
    {URL1+" "}
    {URL2+" "}
    </header>
    );
}

export default Header;