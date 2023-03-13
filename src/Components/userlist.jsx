import Navbar from "./navbar";
// import { Link } from "react-router-dom";
import '../Style/userlist.css';
import { useEffect, useState } from "react";
const UserList = () => {
    let [user, setuser] = useState([])
      
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(" http://localhost:4000/users")
            let data = await response.json()
            setuser(data)

        }
        fetchdata()
    })
    let remove=(id)=>{
        fetch( `http://localhost:4000/users/${id}`,{
            method:'DELETE'
        })
        alert(`${id} has been removed`)

    }

    return (
        <div className="UsersList">
            <Navbar />
            <div className="Userslist">
                {user.map(data => (
                    <div className="lists">
                       
                        <div className="li">
                            <div className="hellos">
                            <h1>{(data.FirstName[0])}</h1>
                            <h2> Name: {data.FirstName}</h2>
                            <h2>LastName: {data.LastName}</h2>
                            <h2>Email: {data.Email}</h2>
                            <h2>Contact: {data.Contact}</h2>
                            <button onClick={() => remove(data.id,data.title)}>Delete</button>
                            
                            </div>
                            
                           
                            <br />
                            {/* <Link to={`/userlist/${data.id}`} className="btn-btn-dark mx-3">Readmore</Link> */}
                        </div>
                        
                    </div>


                ))}
            </div>
        </div>
    );
}

export default UserList;