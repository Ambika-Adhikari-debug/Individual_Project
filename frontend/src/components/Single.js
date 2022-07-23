import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './myappoint.css';
import Header from './Header';

export default function Single() {
  const [singledata, setSingledata] = useState([]);


  const {vid}= useParams();

  const config= {
    headers :{
        Authorization : 'Bearer '+localStorage.getItem('t')
    }
}

  useEffect (()=>{
    axios.get("http://localhost:90/appointment/single/" +vid,config)
    .then(result=>{
      // console.log(result.data)
      setSingledata(result.data);
    })

  },[])
  return (
    <div>
      <Header/>
      <div className='container '>
        <div className='row p-5 '>
          <div className='design text-center'>
          <h1> Patients Details</h1>
          <p><img src={'http://localhost:90/'+singledata.pimage} className="myimg"/></p>
          <p>FullName: {singledata.fullname}</p>
          <p>Email: {singledata.email}</p>
          <p>Address: {singledata.address}</p>
          <p>Phone : {singledata.phone}</p>
          <p>Gender : {singledata.gender}</p>
          <p>Date: {singledata.date}</p>
          <p>Problem: {singledata.problem}</p>
          </div>


        </div>
        
      </div>
      </div>

  )
}
 
