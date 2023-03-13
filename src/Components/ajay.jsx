
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { useRef } from "react";
import '../Style/addusers.css'






const Adduser = () => {
    let FirstName=useRef(null)
    let LastName=useRef(null)
    let Email=useRef(null)
    let Contact=useRef(null)
    let navigate = useNavigate()

    let adduser=(e)=>{
        e.preventDefault()
        let data = { 
            FirstName:FirstName.current.value ,
            LastName:LastName.current.value ,
            Email:Email.current.value ,
            Contact:Contact.current.value 
        }
        fetch("http://localhost:4000/users", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert("user added successfully")

        navigate('/adduser')
    
    }

    
    return (
        <div className="adds">
            <Navbar />
            <div className="good">
                <form action="" onSubmit={adduser}>
                    <div className="formmmm">
                        <h1>Enter Your Details</h1>
                        <div className="ttle">
                            <label style={{ margin: "0px", padding: "29px" }} htmlFor="">FirstName:</label>
                            <input className="add1"  ref={FirstName} type="text"  placeholder="FirstName" />
                            <input style={{ margin: "8px", padding: "0px" }} className="add1" ref={LastName} type="text"   placeholder="LastName" />
                        </div>
                        <br />

                        <div className="rating">
                            <label style={{ margin: "0px", padding: "29px" }} htmlFor="">Email:</label>
                            <input className="add1" ref={Email} type="text"   placeholder="Enter Your Email" />
                        </div>

                        <br />
                        <div className="lang">
                            <label style={{ margin: "0px", padding: "29px" }} htmlFor="">Contact:</label>
                            <input className="add1" ref={Contact} type="text"  placeholder="Enter Your Number" />
                        </div>
                        <br />
                        <div className="buttonn">
                            <button type="submit">Submit:</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default Adduser;