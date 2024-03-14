import '../styles/AdminLogin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AdminLogin=({defaultUserName})=>{
    console.log(defaultUserName, "defaultUserName");
    const [email,setemail]=useState(defaultUserName)
    const[password,setpassword]=useState("")
    const [type,settype]=useState('password')
    console.log(password);
    let navigate=useNavigate()
// ---------------------------------------------------------------------------------

    let validate=()=>{
        if(email=="abcd"&&password=="1234"){
            // alert("Login sucessful username is: "+ email + " password is:  " + password)
            navigate('/adminhome')
        }
        else{
            alert("Invalid Username or Password")
        }
    }
    // ---------------------------------------------------------------------------------

    const validateEachItem = e => {
        console.log(e, "ValidateEachItem");
        if(e.key==="Enter") {
            validate()
        }
    }
    // -------------------------------------------------------------------------
    const typef= ()=>{
       settype((prevType)=>('password'?'text':'password'))
       settype((prevType)=>('text'?'password':'text'))

    }
    // ---------------------------------------------------------------------------------
    return(
        <div className="adminlogin">
            <div className="image">
        <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=996&t=st=1702613437~exp=1702614037~hmac=822c1f2f9e758baf30c5a05d5dbe9e3e210317afa01446ee57985d6a1949087c" alt="" />
            </div>
            <div className="container">
            <form action="">
                <div className="email">
                <label htmlFor="userName">
                    <h1>EMAIL</h1>
                    </label>
                    <input onKeyDown={validateEachItem} id="userName" value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" /></div>
               
                    <div className="password">
                <label htmlFor="password">
                     <h1>PASSWORD</h1>
                </label>
                    <input type={type} onKeyDown={validateEachItem} id="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    {/* <button type="button" onClick={typef}>btn</button> */}
                    {/* <span onClick={typef}></span> */}
                    </div>
                    <div className="signin">
                <button type="button" onClick={validate}>SIGN IN</button></div>
            </form>
            </div>
        </div>
    )

}
export default AdminLogin

