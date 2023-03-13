import Navbar from "./navbar";
import { Link } from "react-router-dom";
import '../Style/booklists.css';
import { useEffect, useState } from "react";
const BookList = () => {
    let [books, setbooks] = useState([])
    // let remove = (id,title) => {
    //     let result = books.filter((x) => x.id !== id)
    //     setbooks(result)
    //     alert(`${id,title} has been removed from favourite`)
    //   }    
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(" http://localhost:4000/books")
            let data = await response.json()
            setbooks(data)

        }
        fetchdata()
    })
    let remove=(id,title)=>{
        fetch( `http://localhost:4000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} has been removed`)

    }

    return (
        <div className="BookList">
            <Navbar />
            <div className="books_list">
                {books.map(data => (
                    <div className="books">
                        <img height={280} width={200} src={data.thumbnailUrl} alt="" />
                        <div className="details">
                            <h2> Title: {data.title}</h2>
                            <h3>PageCount: {data.pageCount}</h3>
                            <h5>Authors: {data.authors}</h5>
                            <h5>Category: {data.categories}</h5>
                            <button onClick={() => remove(data.id,data.title)}>Delete</button>
                            <br />
                            <Link to={`/booklist/${data.id}`} className="btn-btn-dark mx-3">Readmore</Link>
                        </div>
                        
                    </div>


                ))}
            </div>
        </div>
    );
}

export default BookList;