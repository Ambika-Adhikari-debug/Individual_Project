import React from "react";

import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './login.css';
import { BsPeopleFill } from 'react-icons/bs';
import { ImKey } from 'react-icons/im';
import Header from "./Header";
import Footer from "./Footer";


export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  let navigate = useNavigate();

  

  const loginPatient = (e) => {
    e.preventDefault();
    const patientData={
      username, password

    }


    axios.post("http://localhost:90/patient/login", patientData)
            .then(result => {
                if (result.data.token) {
                    //success
                    localStorage.setItem('t', result.data.token);
                    console.log(result.data)
                    if( patientData.username ==='admin'){
                      navigate('/dashboard')
                    }
                    else{
                        navigate('/')
                    }
                }
                else {
                    //invalid
                    setMessage("Invalid Login, Please try again!!");
                }
            })
            .catch(e => {
                console.log(e)
            })
    //console.log(patientData)

 
  }
  
  return (
  <div>
     <Header />
    
    <div className="container-fluid ps-md-0">
  <div className="row g-0 p-5">
    <div className="design d-flex  ">
    <div className=" d-flex col-md-4 col-lg-6 bg-image "></div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5 ">
        <div className="container ">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
             
              <h4 className="text-center mb-4">Welcome back!</h4>
              {message}
              

            
              <form>
                <div className="form-floating mb-3">
                  <input type="username" className="form-control" 
                  value={username}
                  onChange={(e)=>setUsername(e.target.value)}
                  id="floatingInput" />
                  <label for="floatingInput"><BsPeopleFill></BsPeopleFill> Username</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  id="floatingPassword"/>
                  <label for="floatingPassword">< ImKey></ImKey> Password</label>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label className="form-check-label" for="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-lg btn-success btn-login text-uppercase fw-bold mb-2" type="submit" onClick={loginPatient}>Sign in</button>
                  <div className="text-center">
                  <Link className="small" to="/register">Create new account</Link>
                    <br/>
                    <a className="small" href="#">Forgot password?</a>
                    
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
<Footer/>
</div>  
    
    
  );
}