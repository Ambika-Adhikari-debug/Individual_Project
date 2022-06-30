import React from 'react'
import {Route, Routes}from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Bookappoint from './Bookappoint';
import Myappointment from './Myappointment';
import Single from './Single';
import Update from './Update';
import Dashboard from './Dashboard';
import Dashviewappoint from './Dashviewappoint';





export default function Container() {
    return (
        <Routes>
            <Route path = '/' element = {<Home/>} />
            <Route path ='/register' element = {<Register/>}/>
            <Route path ='/login' element = {<Login/>}/>
            <Route path ='/bookappoint' element = {<Bookappoint/>}/>
            <Route path ='/myappointment' element = {<Myappointment/>}/>
            <Route path ='/single/:vid' element = {<Single/>}/>
            <Route path ='/updateinfo/:vid' element = {<Update/>}/>
            <Route path = '/dashboard' element= {<Dashboard/>}/>
            <Route path = '/dashview' element= {<Dashviewappoint/>}/>
            
           
        </Routes>

        
    )
}
