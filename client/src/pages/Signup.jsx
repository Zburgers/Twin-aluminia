import React, { useState } from 'react';
import '../pages/Signup.css'; // Make sure this path is correct */}
import {Link} from 'react-router-dom'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {  FaGooglePlusG, FaFacebookF, FaGithub,   FaLinkedinIn } from 'react-icons/fa';



export const Signup = () => {

  const[name,setname] = useState("");
  const[email,setemail] = useState("");
  const[password,setpassword] = useState("");

  const navigate = useNavigate();

  const signup = (e)=>{
    e.preventDefault();
    Axios.post("http://localhost:4500/api/v1/register",{
      name:name,
      email:email,
      password:password
    }).then((response)=>{
      if(response.data === "success"){
        alert("Register Successfully")
        navigate("/login")
      }
    })
  }



  return (
    <>
    <div className='bodys'>
    <div className="containers" id="container">
      {/* Sign Up Form */}
      <div className="form-containers sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
          <input type="email" placeholder="Email"  onChange={(e)=>{setemail(e.target.value)}}/>
          <input type="password" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}}/>
          <button onClick={signup} type='submit'>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-containers sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icon"><FaGooglePlusG /></a>
            <a href="#" className="icon"><FaFacebookF /></a>
            <a href="#" className="icon"><FaGithub /></a>
            <a href="#" className="icon"><FaLinkedinIn /></a>
          </div>
          <span>or use your email password</span>
          <input type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
          <input type="email" placeholder="Email"  onChange={(e)=>{setemail(e.target.value)}}/>
          <input type="password" placeholder="Password"  onChange={(e)=>{setpassword(e.target.value)}}/>
          <Link to={"/login"} className='links'>Already Have An Account Login Now</Link>
           <Link to={"/home"} className='links'>Let's Have A Demo</Link>
          <button  onClick={signup} type='submit'>Sign In</button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div className="toggle-containers">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" id="login">Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all of site features</p>
            <button className="hidden" id="register">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

