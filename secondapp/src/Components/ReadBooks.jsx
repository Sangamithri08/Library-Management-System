import axios from 'axios';
// import'../styles/readbook.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState} from "react";
const ReadBooks = () => {
    let param=useParams()
    let [data, setdata] = useState("")
    useEffect(()=>{
        axios.get(`http://localhost:1000/books/${param.id}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data)
        },[]) 
    })
    return ( 
        <div className="ReadBooks">
            <div className="image">
            <img src={data.thumbnailUrl} alt="" />
            </div>
          <div className="desc">
            <h1>{data.title}</h1>
            <b>pagecount:</b><span>{data.pageCount}</span>
            {/* <h1>{data.publishedDate.date}</h1> */}
          </div>
        </div>
     );
}
 
export default ReadBooks;