import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import {GiHospitalCross} from 'react-icons/gi';


export default function Header() {
  const logout=()=>{
    localStorage.clear();
    window.location.replace('/')
  }
  var log;
  if(
    localStorage.getItem('t')
  ){

    log=(
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">Healthcare <GiHospitalCross></GiHospitalCross></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div>
              <li className="nav-item">
                <Link  to="/" className="nav-link active">Home</Link>
              </li></div>


                <div>
              <li className="nav-item  ">
                <Link to='/bookappoint'className="nav-link active ">Book Appointment</Link>
              </li></div>

              <div>
              <li className="nav-item  ">
                <a href='/myappointment'className="nav-link active "> View Appointment</a>
              </li></div>

              {/* <div>
              <li className="nav-item  ">
                <Link to='/dashboard'className="nav-link active">Dashboard</Link>
              </li></div> */}
              
              <div className='reg'>
              <li className="nav-item">
              

              <Link to='/register' ><button type="button" class="btn btn-primary">Register</button></Link>
              </li></div>


              <div className='log'>
              <li className="nav-item">
              <Link to='#' ><button type="button" class="btn btn-success" onClick={logout}>Logout</button></Link>
              </li></div>
              
            </ul>
          </div>
        </div>
      </nav>






    )




  }

  else{
    var log = (

      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">Healthcare <GiHospitalCross></GiHospitalCross></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {/* <div>
              <li className="nav-item">
                <Link  to="/" className="nav-link active">Home</Link>
              </li></div> */}


                {/* <div>
              <li className="nav-item  ">
                <Link to='/bookappoint'className="nav-link active ">Book Appointment</Link>
              </li></div> */}

              {/* <div>
              <li className="nav-item  ">
                <Link to='/myappointment'className="nav-link active "> View Appointment</Link>
              </li></div> */}

             
              
              <div className='reg1'>
              <li className="nav-item">
              

              <Link to='/register' ><button type="button" class="btn btn-primary">Register</button></Link>
              </li></div>


              <div className='log1'>
              <li className="nav-item">
              <Link to='/login' ><button type="button" class="btn btn-success">Login</button></Link>
              </li></div>
              
            </ul>
          </div>
        </div>
      </nav>



    )


  }
  




    return (

      <div>
        {log}

      </div>
      
        
        
    )
}
