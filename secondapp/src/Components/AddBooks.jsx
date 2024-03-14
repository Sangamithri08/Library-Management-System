import axios from 'axios';
import '../styles/AddBooks.css'

import { useState } from "react";

const AddBooks = () => {
    const[title,settitle]=useState("")
    const[pageCount,setpageCount]=useState("")
    const[shortDescription,setshortDescription]=useState("")
    const[longDescription,setlongDescription]=useState("")
    const[thumbnailUrl,setthumbnailUrl]=useState("")
    let data={title,pageCount,shortDescription,longDescription,thumbnailUrl}
    let addbook=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1000/books',data)
        // fetch("http://localhost:1000/books",{
        //     method:"POST",
        //     headers:{"Content-type":"application/json"},
        //     body:JSON.stringify(data)
        // })
        
        .then((res)=>{
            console.log(res);
            alert("Data added successfully")
        })
        .catch((res)=>{
            console.log(res);
            alert("Error")
        })
      
    }
    return ( <div className="addbooks">
        <div className="add">
        <form action="">
                <div className='title'>
                <label htmlFor="">
               title :  <input id='title' value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" />
                </label></div>
                <div className='page'>
                <label htmlFor="">
                pageCount :<input id='page' value={pageCount} onChange={(e)=>{setpageCount(e.target.value)}} type="text" />
                </label></div>
                <div className='short'>
                <label htmlFor="">
                shortDescription :<input id='short' value={shortDescription} onChange={(e)=>{setshortDescription(e.target.value)}} type="text" />
                </label></div>
                <div className='long'>
                <label htmlFor="">
                longDescription :<textarea id='long' value={longDescription} onChange={(e)=>{setlongDescription(e.target.value)}} type="text" />
                </label></div>
                <div className='url'>
                <label htmlFor="">
                thumbnailUrl :<input id='url' value={thumbnailUrl} onChange={(e)=>{setthumbnailUrl(e.target.value)}} type="text" />
                </label></div>
                <div className='submit'>
                <button id='submit' type="button" onClick={addbook}>SUBMIT</button></div>

            </form>
            </div>
    </div> );
}
 
export default AddBooks;