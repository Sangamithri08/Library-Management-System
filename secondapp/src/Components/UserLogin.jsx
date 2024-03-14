import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    let navigate = useNavigate()
    // -------------------------------------------------
    let validate = () => {
        if (email == "abcd" && password == "1234") {
            navigate('/userhome')
        }
        else {
            alert("Invalid Username or Password")
        }
    }
    // ---------------------------------------------------------------------------------
    return (
        <div className="adminlogin">
            <div className="image">
                <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?w=996&t=st=1702613437~exp=1702614037~hmac=822c1f2f9e758baf30c5a05d5dbe9e3e210317afa01446ee57985d6a1949087c" alt="" />
            </div>
            <form action="">
                <div><label htmlFor="userName">
                    EMAIL
                </label>
                    <input value={email} onChange={(e) => { setemail(e.target.value) }} type="text" /></div>
                <div><label htmlFor="password">
                    PASSWORD
                </label>
                    <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} />
                </div>
                <button type="button" onClick={validate}>SIGN IN</button>
            </form>
        </div>
    )

}
export default UserLogin

