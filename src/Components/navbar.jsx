import { Link } from "react-router-dom";
import '../Style/navbar.css'
const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                {/* <h1 >Logo</h1> */}
                <img src="https://www.royalchallengers.com/themes/custom/rcbbase/images/rcb-logo-new.png" alt="" />
            </div>
            <div className="links">
                <ul>
                    <li><Link to="/admin">Home</Link></li>
                    <li><Link to="/booklist"> Book List</Link></li>
                    <li><Link to="/userlist">User List</Link></li>
                    <li><Link to="/addbooks">Add Books</Link></li>
                    <li><Link to="/adduser">Add User</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;
