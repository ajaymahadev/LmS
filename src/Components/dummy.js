// // // let Location=useLocation()

// // //   let navigate = useNavigate()
// // //   let read = (id) => {
// // //     navigate(`/admin/BookList/${id}`)
// // //     if(Location.pathname=='/admin/BookList'){
// // //       navigate(`/admin/BookList/${id}`)
// // //     }else{
// // //       navigate(`/user/BookList/${id}`)
// // //     }
// // //   }


// // //   let handleremove = (id, title) => {
// // //     fetch(`http://localhost:4001/books/${id}`, {
// // //       method: 'DELETE'
// // //     });
// // //     alert(`${title} will be deleted permanentely`)
// // //   }



// // //   useEffect(() => {
// // //     let fetchdata = async () => {
// // //       let response = await fetch('http://localhost:4001/books')
// // //       let data = await response.json();
// // //       setbooks(data)
// // //     }
// // //     fetchdata()
// // //   }, [])
// // //   return (
// // //     <div className="booklist">
// // //       <h1>Book List{books.length}</h1>
// // //       <div className="books">
// // //         {books.map(b => (
// // //           <div className="head">
// // //             <div className="booktit">
// // //             <div className="empty"></div>
// // //             <div className="tit"><h1>Title:{b.title}</h1></div>
// // //             </div>
// // //             <div className="body2">
// // //               <div className="img">
// // //                 <img src={b.thumbnailUrl} alt="" />
// // //               </div>
// // //               <div className="body">
// // //                 <h4>Author:{b.authors.toString()}</h4>
// // //                 <h4>PageCount:{b.pageCount}</h4>
// // //                 <button onClick={() => read(b.id)}>Read more</button>
// // //                 { Location.pathname=='/admin/BookList' && <button onClick={() => handleremove(b.id, b.title)} >Delete</button> }
// // //               </div>
// // //             </div>


// // //           </div>

// // //         ))}
// // //       </div>


// // //     </div>
// // //   );
// // // }

// // // export default BookList;



// //  <br />
// //               <br />
// //                      <br />
// //              <br />
// //            <br />
// //             


// let [firstname, setfirstname] = useState("")
//     let [lastname, setlastname] = useState("")
//     let [email, setemail] = useState("")
//     let [contact, setcontact] = useState("")
    
//     let navigate = useNavigate() 
//     let handleSubmit = (e) => {

//         e.preventDefault() 
//         let data = { firstname,lastname,email,contact }
//         fetch("http://localhost:4000/books", {
//             method: 'POST',
//             headers: { 'content-Type': 'application/json' },
//             body: JSON.stringify(data) 
//         })
//         alert("data added successfully")

//         navigate('/adduser')




// <div className="addMovies">

// <div className="add d-flex justify content center">


//     <div className="forms">


//         <div className="imm">
//             <h1>Add you book to Database</h1>
//         </div>

//         <form action="" onSubmit={handleSubmit}>
            
//             <h1>Fill your Form</h1>

//             <div className="ttle">
//                 <label   style={{margin:"0px" , padding:"29px"}}  htmlFor="">Title:</label>
//                <input className="add1"  type="text" value={firstname} onChange={(e) => setfirstname(e.target.value)} placeholder="Enter Title" /> 
//             </div>

//             <br />


//             <div className="genre">
//                 <label  style={{margin:"0px" , padding:"6px"}}  htmlFor="">PageCount:</label>
//                 <input className="add1"  type="text" value={lastname} onChange={(f) => setlastname(f.target.value)} placeholder="Enter pageCount" />
//             </div>

//             <br />
//             <div className="rating">
//                 <label  style={{margin:"0px" , padding:"16px"}}  htmlFor="">Authors:</label>
//                 <input  className="add1" type="text" value={email} onChange={(g) => setemail(g.target.value)} placeholder="Enter authors" />
//             </div>

//             <br />
//             <div className="lang">
//                 <label  style={{margin:"0px" , padding:"6px"}}  htmlFor="">Categories:</label>
//                 <input className="add1"  type="text" value={contact} onChange={(e) => setcontact(e.target.value)} placeholder="Enter categories" />
//             </div>
//             <br />

            



//             <br />
//             <div className="buttonn">
//                 <button type="submit">Submit:</button>
//             </div>



//         </form>



//     </div>


// </div>

// </div>


<div className="addBook">
            <Navbar />
            <div className="addMovies">
                <div className="forms">
                    <div className="imm">
                        <h1>Add you book to Database</h1>
                    </div>

                    <form action="" onSubmit={handleSubmit}>

                        <h1>Fill your Form</h1>

                        <div className="ttle">
                            <label style={{ margin: "0px", padding: "29px" }} htmlFor="">Title:</label>
                            <input className="add1" type="text" value={title} onChange={(p) => setTitle(p.target.value)} placeholder="Enter Title" />
                        </div>

                        <br />
                        <div className="genre">
                            <label style={{ margin: "0px", padding: "6px" }} htmlFor="">PageCount:</label>
                            <input className="add1" type="text" value={pageCount} onChange={(p) => setpageCount(p.target.value)} placeholder="Enter pageCount" />
                        </div>
                        <br />
                        <div className="rating">
                            <label style={{ margin: "0px", padding: "16px" }} htmlFor="">Authors:</label>
                            <input className="add1" type="text" value={authors} onChange={(p) => setauthors(p.target.value)} placeholder="Enter authors" />
                        </div>
                        <br />
                        <div className="lang">
                            <label style={{ margin: "0px", padding: "6px" }} htmlFor="">Categories:</label>
                            <input className="add1" type="text" value={categories} onChange={(p) => setcategories(p.target.value)} placeholder="Enter categories" />
                        </div>
                        <br />
                        <div className="lang">
                            <label style={{ margin: "0px", padding: "6px" }} htmlFor="">Descrption:</label>
                            <textarea value={description} onChange={(p)=>setdescriptionn(p.target.value)} className="add1" placeholder="description"></textarea>
                        </div>
                        <br />
                        <div className="lang">
                            <label style={{ margin: "0px", padding: "9px" }} htmlFor="">Image Url:</label>
                            <input className="add1" type="text" value={thumbnailUrl} onChange={(p) => setthumbnailUrl(p.target.value)} placeholder="Enter images" />
                        </div>
                        <br />
                        <div className="buttonn">
                            <button type="submit">Submit:</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>




        // let [FirstName, setFirstName] = useState("")
    // let [LastName, setLastName] = useState("")
    // let [Email, setEmail] = useState("")
    // let [Contact, setContact] = useState("")
    //
    // let handleSubmit = (e) => {

    //     e.preventDefault()
    //     
