import Navbar from "./navbar";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Style/reasdbook.css'

const ReadBook = () => {
    let params=useParams()     // to fetch id from url or route
    
    let [book,setbook]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let response= await fetch(`http://localhost:4000/books/${params.id}`)
            let data=await response.json()
            setbook(data)
        }
        fetchData()
    })
    return ( 
        <div className="readbook">
            <Navbar/>
           <div className="imggg">
               <img height={200} width={230} src={book.thumbnailUrl} alt="" />
               
               <div className="read">
                <h1>Title:-{book.title}</h1>
                <h2>Author:-{book.authors}</h2>
             <p><b>long-Desc</b>{book.longDescription}</p>
             <p><b>Short-Desc</b>{book.shortDescription}</p>
            
            </div>
           
            </div> 
            

        </div>
     );
}
 
export default ReadBook;