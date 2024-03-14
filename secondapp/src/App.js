import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import AdminLogin from './Components/AdminLogin';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UserLogin from './Components/UserLogin';
import UserHome from './Components/UserHome';
import AdminHome from './Components/AdminHome';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
            <Route path='/admin' element={<AdminLogin defaultUserName="abcd"/>}/>
            <Route path='/user' element={<UserLogin/>}/>
            <Route path='/UserHome/*' element={<UserHome/>}/>
            <Route path='/adminhome/*' element={<AdminHome/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
