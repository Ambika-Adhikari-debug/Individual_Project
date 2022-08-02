import React from 'react';
import { useState } from "react";
import axios from "axios";
import './appoint.css';
import { Dropdown } from 'bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { FaHome } from 'react-icons/fa';
import { BsPhoneVibrateFill } from 'react-icons/bs';
import Header from './Header';




export default function Bookappoint() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");
  const [problem, setProblem] = useState("");
  const [message, setMessage] = useState('');
  const [pimage, setPimage] = useState('');

  const appbook=(e)=>{
    e.preventDefault();
    const config= {
        headers :{
            Authorization : 'Bearer '+localStorage.getItem('t')
        }
    }
    // const adata = {
    //     fullname, email, address, phone, gender, date, problem
    // }
    const adata = new FormData();

    adata.append('fullname', fullname);
    adata.append('email', email);
    adata.append('address', address); 
    adata.append('phone', phone);
    adata.append('gender', gender);
    adata.append('date', date);
    adata.append('profile_pic', pimage);
    adata.append('problem', problem);



//axios to send appointment data
    axios.post("http://localhost:90/appointment/insert", adata, config)
    .then(result12=>{
        console.log(result12.data.success)
        if(result12.data.success){
          // registered success
          setMessage('Booked Successfully!');
    
        }
        else{
          //not registered
          // setMessage('something went wrong! ');
          alert('booked successfully')
          
        }
      })
      .catch(e=>{
        setMessage('something went wrong! Please try again!');
      });
    
    }
  
  return (
    <div>
      <Header />
    <div className="container-fluid ps-md-0 ">
    <div className="row g-0 p-5">
    <div className="design d-flex  ">
      <div className="d-none d-md-flex col-md-4 col-lg-6 appoint-image"></div>
      <div className="col-md-8 col-lg-6">
        <div className="login d-flex align-items-center py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-9 col-lg-8 mx-auto">
               
                <h4 className="text-center mb-4">BOOK NEW APPOINTMENT!</h4>
                {message}
                
  
              
                <form>
                  <div className="form-floating mb-3">
                    <input type="fullname" className="form-control" 
                    value={fullname}
                    onChange={(e)=>setFullname(e.target.value)}
                    id="floatingInput" />
                    <label for="floatingInput"> <BsPeopleFill></BsPeopleFill> Fullname</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    id="floatingemail"/>
                    <label for="floatingemail"><MdEmail></MdEmail> E-mail</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="address" className="form-control" 
                    value={address}
                    onChange={(e)=>setAddress(e.target.value)}
                    id="floatingaddress"/>
                    <label for="floatingaddress"><FaHome></FaHome> Address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input type="phone" className="form-control" 
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    id="floatingphone"/>
                    <label for="floatingphone"><BsPhoneVibrateFill></BsPhoneVibrateFill> Phone</label>
                  </div>


                 

                  

                  <div className="form-floating mb-3">
                  <label for="floatingender" class="gender1">Select Gender</label>  
                    <select type="gender"  className="form-control" 
                    value={gender} 
                    onChange={(e)=>setGender(e.target.value)}
                    id="floatinggender" >
                    
                    <option selected> </option>
                                  <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                      <option value="Others">Others</option>
                    </select>
                  </div>


                  <div className="form-floating mb-3">
                    <input type="date" className="form-control" 
                    value={date}
                    onChange={(e)=>setDate(e.target.value)}
                    id="floatingdate"/>
                    <label for="floatingdate">Date</label>
                  </div>

                  <div className='form-floating mb-3'>
                    <input type='file' className="form-control"
                     onChange={(e)=>setPimage(e.target.files[0])}
                     id='floatingimage'/>
                      <label for="floatingimage" class="img1">Select image</label>  

                  </div>

                  <div className="form-floating mb-3">
                    <input type="problem" className="form-control" 
                    value={problem}
                    onChange={(e)=>setProblem(e.target.value)}
                    id="floatingproblem"/>
                    <label for="floatingproblem ">Problem</label>
                  </div>
  
  
                  
  
                  <div className="d-grid">
                    <button className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={appbook}>Apply</button>
                    <div className="text-center">
                    
                      
                    </div>
                  </div>
  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  </div>
    
);
}
      
  
  