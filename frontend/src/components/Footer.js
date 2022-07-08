import React from 'react'
import "./home.css";
import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { HiMailOpen} from 'react-icons/hi';
import { AiTwotonePhone} from 'react-icons/ai';
import { FiFacebook} from 'react-icons/fi';
import {AiOutlineTwitter} from 'react-icons/ai';
import { FiLinkedin} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';

export default function Footer() {
    return (
      <footer class="footer_section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 footer_col">
          <div class="footer_contact">
            <h4>
              Reach at..
            </h4>
            <div class="contact_link_box">
              <a href="">
                <MdLocationOn></MdLocationOn>
                <span>
                  Location
                </span>
              </a>
              <a href="">
                <AiTwotonePhone></AiTwotonePhone>

                <span>
                  Call +01 1234567890
                </span>
              </a>
              <a href="">
                <HiMailOpen></HiMailOpen>
                <span>
                  demo@gmail.com
                </span>
              </a>
            </div>
          </div>
          <div class="footer_social">
            <a href="">
              <FiFacebook></FiFacebook>
            </a>
            <a href="">
              <AiOutlineTwitter></AiOutlineTwitter>
            </a>
            <a href="">
              <FiLinkedin></FiLinkedin>
            </a>
            <a href="">
              <AiOutlineInstagram></AiOutlineInstagram>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 footer_col">
          <div class="footer_detail">
            <h4>
              About
            </h4>
            <p>
            The foundation stone of CSH was laid by  Prime Minister Sher Bahadur Deuba .The 132-bedded and fully equipped Hospital was handed over to the Government of Nepal by the PRC on November 14, 2008. Out-patient services were started on March 29, 2009. 
            </p>
          </div>
        </div>
        <div class="col-md-6 col-lg-2 mx-auto footer_col">
          <div class="footer_link_box">
            <h4>
              Links
            </h4>
            <div class="footer_links">
              <Link class="active" to="/">
                Home
              </Link>
              <Link class="" to="/register">
                Register
              </Link>
              
              
              <Link class="" to="/login">
                Login
              </Link>
              <Link class="" to="/bookappoint">
                Appointment
              </Link>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 footer_col ">
          <h4>
            Newsletter
          </h4>
          <form action="#">
            <input type="email" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
     
      </div> 
      <div class="footer-info">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <a href="https://html.design/">Civil Service Hospital<br/></a>
            &copy; <span id="displayYear"></span> Distributed By
            <a href="https://themewagon.com/">ThemeWagon</a>
        </p>
       
      </div>  
  
  </footer>
    
    )
}
