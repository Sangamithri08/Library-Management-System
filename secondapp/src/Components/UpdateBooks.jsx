import { useEffect, useState } from 'react'
import '../styles/AddBooks.css'

import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateBooks = () => {
    // const[data,setdata]=useState("")
    const param=useParams()
    const [title,settitle]=useState("") 
    const[pageCount,setpageCount]=useState("")
    const[shortDescription,setshortDescription]=useState("")
    const[longDescription,setlongDescription]=useState("")
    const[thumbnailUrl,setthumbnailUrl]=useState("")

    useEffect(()=>{
        axios.get(`http://localhost:1000/books/${param.id}`)
        .then((res)=>{
            settitle(res.data.title)
            setpageCount(res.data.pageCount)
            setshortDescription(res.data.shortDescription)
            setlongDescription(res.data.longDescription)
            setthumbnailUrl(res.data.thumbnailUrl)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    let update=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:1000/books/${param.id}`,data)
        .then((res)=>{
            console.log(res);
            alert('Data updates Successfully')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
   let data={title,pageCount,shortDescription,longDescription,thumbnailUrl}
    return ( <div className="updatebooks">
        <div className="up">
        <form action="">
                <div className='title'>
                <label htmlFor="">
               title :  <input value={title} onChange={(e)=>{settitle(e.target.value)}} id='title' type="text" />
                </label></div>
                <div className='page'>
                <label htmlFor="">
                pageCount :<input value={pageCount} onChange={(e)=>{setpageCount(e.target.value)}} id='page' type="text" />
                </label></div>
                <div className='short'>
                <label htmlFor="">
                shortDescription :<input id='short' value={shortDescription} onChange={(e)=>{setshortDescription(e.target.value)}}  type="text" />
                </label></div>
                <div className='long'>
                <label htmlFor="">
                longDescription :<textarea id='long' value={longDescription} onChange={(e)=>{setlongDescription(e.target.value)}}  type="text" />
                </label></div>
                <div className='url'>
                <label htmlFor="">
                thumbnailUrl :<input id='url' value={thumbnailUrl} onChange={(e)=>{setthumbnailUrl(e.target.value)}} type="text" />
                </label></div>
                <div className='submit'>
                <button onClick={update} id='btn' type="button">SUBMIT</button></div>

            </form>
            </div>
    </div> );
}
 
export default UpdateBooks;