import React from 'react';
 import './dashboard.css'
 import { Link, useNavigate } from 'react-router-dom';
 import {AiFillDelete} from 'react-icons/ai'
 import { useEffect, useState } from 'react';
 import axios from 'axios';
 import {RiDeleteBinFill} from 'react-icons/ri'
 import {GrMail} from 'react-icons/gr'
 import {MdSpaceDashboard} from 'react-icons/md'
 import {BiShowAlt} from 'react-icons/bi'
 import {AiTwotoneCalendar} from 'react-icons/ai'
 import {HiOutlineLogout} from 'react-icons/hi'
 import {CgProfile} from 'react-icons/cg'
 
 

 

export default function Dashboard() {
  const logout=()=>{
    localStorage.clear();
    window.location.replace('/')
  }
  const config= {
    headers :{
        Authorization : 'Bearer '+localStorage.getItem('t')
    }
}

let navigate=useNavigate();

	const [viewdata, setViewdata] = useState([]);

    


    
    useEffect(()=>{
        axios.get("http://localhost:90/patient/details")
        .then(result=>{
            console.log(result.data)
            setViewdata(result.data);
        })
        

        .catch(e=>{
            console.log("something went wrong")
        })

     }, [viewdata])

     const deleteAppointment = (vid) => {
      
      axios.delete('http://localhost:90/appointment/delete/' + vid, config)
          .then(result => {
              console.log(result.data)
              if (result.data) {
                  alert('delete successfully')
                   navigate('/dashboard')
              }
              else {
                  alert('something went wrong')
              }
          })
          .catch(() => {
              alert('something went wrong')
          })

  }


	//  const deleteAppointment=(vid)=>{
	// 	//console.log(vid)

	// 	axios.delete("http://localhost:90/appointment/delete/" +vid)
		
	// 	.then()
	// 	.catch()

	// }


  return <div>
	  <div id="viewport">
  
  <div id="sidebar">
    <header>
      <a href="#">Hospital Management </a>
    </header>
    <ul className="nav">
      <li className='space'>
        <Link to="/dashboard">
			
          <i className="zmdi zmdi-view-dashboard spacetext"><MdSpaceDashboard></MdSpaceDashboard> Dashboard</i>
		  
        </Link>
      </li>

	  <li className='space2'>
        <Link to="/dashboard">
			
          <i className="zmdi zmdi-view-dashboard spacetext"><BiShowAlt></BiShowAlt> View patient</i>
		 
        </Link>
      </li>

	  <li className='space3'>
        <Link to="/dashview">
		
          <i className="zmdi zmdi-view-dashboard spacetext "><AiTwotoneCalendar></AiTwotoneCalendar> View Appointment </i>
	
        </Link>
      </li>

      <li className='space4'>
        <Link to="#" onClick={logout}>
		
          <i className="zmdi zmdi-view-dashboard spacetext "><HiOutlineLogout></HiOutlineLogout> logout </i>
	
        </Link>
      </li>


	  
      
      
      
    </ul>
  </div>
 
  <div id="content">
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#"><i className="zmdi zmdi-notifications text-danger"></i>
            </a>
          </li>
         
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
	<div class=" p-5">
    <p className='icon-right'>
    <h1 className='text-center'>Admin Dashboard</h1>
    <div className='float-right'>
    <CgProfile size={40}></CgProfile>
    </div>
    </p>
    
    <div class="container pt-5">

      <div class="table-responsive">

        <table class="table custom-table">
          <thead>
            <tr>
             
              {/* <th scope="col">ID</th> */}
              <th scope="col">Username</th>
              
              <th scope="col">Email</th>
			  <th scope="col">Address</th>
             
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>






            <tr/>
            {viewdata.map(singleData=>{
            console.log(singleData);
            
            return (
        
                
        <tr>

            
           
          <td>{singleData.username}</td>
          <td>{singleData.email}</td>
          <td>{singleData.address}</td>
		  {/* <td><img src={'http://localhost:90/'+singleData.pimage} className="img-fluid"/></td> */}
		  <td> <div className='d-flex '><div ><RiDeleteBinFill size={20} onClick={()=>deleteAppointment(singleData._id)}></RiDeleteBinFill></div>
		  <div  className='ml-4'><GrMail size={20}></GrMail></div></div>
		  </td>



		   
         
        </tr>
        
            )
    
        })}
        
            
            
          </tbody>
        </table>
      </div>


    </div>

  </div>
    
    

    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/main.js"></script>
    </div>
  </div>
</div>


  </div>;
}
