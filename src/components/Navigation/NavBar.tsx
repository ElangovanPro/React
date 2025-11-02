import { Link } from "react-router";

export const NavBar=()=>{
    return (
        <>
        <nav className="nav">
            <Link to="/"> Home </Link>
             <Link to="/Employee"> Employee </Link>
            <Link to="/Footer"> Footer </Link>
        </nav>
        </>
    );
}