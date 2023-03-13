import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Style/login.css'

const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setpassword] = useState("")
    let navigate = useNavigate()
    let submit = (e) => {
        e.preventDefault()
        if (email == "admin@gmail.com" && password == 12345) {
            navigate('/admin')

        } else {
            alert('invalid credentials')

        }
    }
    return (
        <div className="login">
            
            <div className="imgg">
            <img  src="/images/one.jpg" alt="" />
            </div>
            <div className="login_form">
                <h1 >Login</h1>
                <form action="" onSubmit={submit}>

                    <input type="email" placeholder="Enter Email Adress" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" placeholder="Enter password" value={password} onChange={(e) => setpassword(e.target.value)} /> <br />
                    <button>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;