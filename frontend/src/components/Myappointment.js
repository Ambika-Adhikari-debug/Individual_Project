import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {FaEdit} from 'react-icons/fa';
import "./myappoint.css";
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Myappointment() {

    const [viewdata, setViewdata] = useState([{test:"test"}]);

    


//to show the appointment details in frontend
    useEffect(()=>{
        axios.get("http://localhost:90/appointment/myappoint")
        .then(result=>{
            console.log(result.data)
            setViewdata(result.data);

        })

        

     }, [viewdata])

    return(
        <div >
             <Header />
        <div className='design p-5 '>
            <Table >
                     <thead>
                  <tr>
                    
                    <th>Image</th>
                    <th>FullName </th>
                    <th>E-mail</th>
                    <th>Address</th>                    
                    <th>Action</th>
                  </tr>
                </thead>
                
                <tbody>
        {viewdata?.map(singleData=>{
            console.log(singleData);
            
            return (
        
                
        <tr>
            <td><img src={'http://localhost:90/'+singleData.pimage} className="img-fluid"/></td>
           
          <td>{singleData?.fullname}</td>
          <td>{singleData?.email}</td>
          <td>{singleData?.address}</td>
         
          <td>
              <div className='d-flex'>
              <Link to={"/updateinfo/" + singleData?._id}>
                <div ><FaEdit size={20} ></FaEdit> </div></Link>
          

           <div className='ml-4'>
           <Link to={'/single/'+singleData?._id} ><button type="button" class="btn btn-success " >View Details</button></Link>
           </div>
          
          
        

           
           </div> 
           </td>
         
        </tr>
        
            )
    
        })}
        </tbody>
                </Table>
        </div>
        <Footer/>
        </div>

      
     
        
    


        
    )
  
}

