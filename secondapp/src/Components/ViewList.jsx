import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles/ViewList.css'
import { useEffect, useState } from "react";
const ViewList = () => {
let[data,setdata]=useState([])
// -------------------------------------fetch method---------------------------------------------------
// useEffect(()=>{
//     let fetchData=async()=>{
//         let res=await fetch("http://localhost:1000/books")
//         let result=await res.json()
//         setdata(result)
//     }
//     fetchData()
// },[data])
// ----------------------------------------axios--------------------------------------------------------
useEffect(()=>{
    axios.get("http://localhost:1000/books")
    .then((res)=>{
        console.log(res.data);
        setdata(res.data)
    })
    .catch((rej)=>{
        console.log(rej);
    })
},[data])
// ---------------------------------------------------------------------------------------------------
let deleteData=(id)=>{
    fetch(`http://localhost:1000/books/${id}`,{
    method:"DELETE"
})}
let navigate=useNavigate()
let readData=((id)=>{
    navigate(`/adminhome/viewlist/${id}`)
  })
  let EditData=((id)=>{
    navigate(`/adminhome/UpdateBooks/${id}`)
  })

    return (
    <div className="viewlist">
        {data.map((x)=>{
            return(
                <div className="view">
                <div className="viewitems">
                    <h1 id='titleview'> {x.title}</h1>
                    <img src={x.thumbnailUrl} alt="" />
                    <h4><i>ISBN  : </i>  {x.isbn}</h4>
                    <p id='des'><i><b>DESCRIPTION  : </b></i> {x.longDescription}</p>
                    <p id='pge'> <i><b>TOTAL PAGES  :</b></i> {x.pageCount}</p>
                    <button id='delete' onClick={()=>{deleteData(x.id)}}>Delete</button>
                    <button id='viewmore' onClick={()=>{readData(x.id)}}>Viewmore</button>
                    <button id='editbooks' onClick={()=>{EditData(x.id)}}>Editbooks</button>
                    {/* <hr /> */}
                </div>
                </div>
            )
        })}
    </div>  );
}
 
export default ViewList;