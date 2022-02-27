import {Link} from "react-router-dom"
const Header = () =>{
    return(
        <nav>
        <div className="container">
        <h2 className="TaskHeader"> TASK </h2>
        <div className="navBar">
            <Link to="/">Home</Link>           
            <Link to="/about">About</Link>            
            <Link to="/contact">Contact</Link>
        </div>
        </div>
        </nav>
    );
}

export default Header