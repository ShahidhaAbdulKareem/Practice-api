import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const Expanded = () => {
const [data,setdata] = useState({});
const params=useParams();
const id = params.id;
useEffect(()=>{
    const token= localStorage.getItem("token");
 axios({
   method:"get",
   url:`https://api-nodejs-todolist.herokuapp.com/task${id}`,
   headers: { Authorization: "Bearer "+ token},
}).then((response)=>{
    console.log(response.data);
    setdata(response.data)
})
},[]);

  return (
    <div>
        <h1>{data.description}</h1>
      
    </div>
  )
}

export default Expanded
