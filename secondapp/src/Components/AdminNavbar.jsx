import { Link } from "react-router-dom";
import '../styles/AdminNavbar.css'
const AdminNavbar = () => {
    return ( <div className="adminnavbar">
           <div className="navlinnks">
            <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxh63RcYLYb9KzvtwYKEH7HJX-GoHPO0j4zA&usqp=CAU" alt="img" />
            </div>
            <div className="viewlist">
            <Link id="viewlist" to="/adminhome/viewlist">View list</Link></div>
            <div className="addbooks">
            <Link id="addbooks" to="/adminhome/addbooks">Add Books</Link></div>
            {/* <div className="updatebooks">
            <Link id="updatebooks" to="/adminhome/updatebooks">Update Books</Link></div> */}
            <div className="logout">
            <Link id="logout" to="/">Logout</Link></div>
           </div>
    </div> 
    );
}
 
export default AdminNavbar;