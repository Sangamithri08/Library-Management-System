import '../styles/AdminHome.css'
import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminDashboard from "./AdminDashboard";
import ViewList from "./ViewList";
import AddBooks from "./AddBooks";
import UpdateBooks from "./UpdateBooks";
import Logout from "./Logout";
import ReadBooks from './ReadBooks';


const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <div className="links">
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path='/viewlist' element={<ViewList/>}/>
                <Route path='/addbooks' element={<AddBooks/>}/>
                <Route path='/updatebooks/:id' element={<UpdateBooks/>}/>
                <Route path='/' element={<Logout/>}/>
                <Route path="/viewlist/:id" element={<ReadBooks/>}/>
            </Routes>
        </div>
        <div className='empty'>

        </div>
     </div>

     );
}
 
export default AdminHome;