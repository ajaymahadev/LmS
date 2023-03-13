import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import '../Style/addbooks.css'

const AddBook = () => {

    let [title, setTitle] = useState("")
    let [pageCount, setpageCount] = useState("")
    let [authors, setauthors] = useState("")
    let [categories, setcategories] = useState("")
    let [description, setdescriptionn] = useState("")
    let [thumbnailUrl, setthumbnailUrl] = useState("")

    let navigate = useNavigate()
    let handleSubmit = (e) => {

        e.preventDefault()
        let data = { title, pageCount, authors, categories, description, thumbnailUrl }
        fetch("http://localhost:4000/books", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        alert("Book added successfully")

        navigate('/booklist')

    }
    return (
        <div className="addBook">
            <Navbar />

            <div className="forms">
                <div className="imm">
                    <h1>Add you book to Database</h1>
                </div>

                <form action="" onSubmit={handleSubmit}>

                    <h1>Fill your Form</h1>

                    <div className="ttle">
                        <label style={{ margin: "0px", padding: "29px" }} htmlFor="">Title:</label>
                        <input className="add1" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                    </div>

                    <br />
                    <div className="page">
                        <label style={{ margin: "0px", padding: "6px" }} htmlFor="">PageCount:</label>
                        <input className="add1" type="text" value={pageCount} onChange={(f) => setpageCount(f.target.value)} placeholder="Enter pageCount" />
                    </div>
                    <br />
                    <div className="author">
                        <label style={{ margin: "0px", padding: "16px" }} htmlFor="">Authors:</label>
                        <input className="add1" type="text" value={authors} onChange={(g) => setauthors(g.target.value)} placeholder="Enter authors" />
                    </div>
                    <br />
                    <div className="cat">
                        <label style={{ margin: "0px", padding: "6px" }} htmlFor="">Categories:</label>
                        <input className="add1" type="text" value={categories} onChange={(e) => setcategories(e.target.value)} placeholder="Enter categories" />
                    </div>
                    <br />
                    <div className="desc">
                        <label style={{ margin: "0px", padding: "6px" }} htmlFor="">Descrption:</label>
                        <textarea value={description} onChange={(e) => setdescriptionn(e.target.value)} className="add1" placeholder="description"></textarea>
                    </div>
                    <br />
                    <div className="thumb">
                        <label style={{ margin: "0px", padding: "9px" }} htmlFor="">Image Url:</label>
                        <input className="add1" type="text" value={thumbnailUrl} onChange={(e) => setthumbnailUrl(e.target.value)} placeholder="Enter images" />
                    </div>
                    <br />
                    <div className="buttonn">
                        <button type="submit">Submit:</button>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default AddBook;