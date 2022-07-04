import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Example = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
   
    axios({
      method: "get",
      url: `https://fakestoreapi.com/products`,
      
    }).then((e) => {
      console.log(e.data.description);
      setdata(e.data.description);
    }).catch((error) => {
        console.log(error);
        alert("Something gone wrong");
      });
  },[]);
    
  
  
  return (
    <div>
      <table className="table-data">
       
       
      </table>
    </div>
  );
};

export default Example;
