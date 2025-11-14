import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../pages/Signup.css'; // Ensure this path is correct

import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault(); // Prevent page reload
    Axios.post("http://localhost:4500/api/v1/login", {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.data === "success") {
          alert("Login Successfully");
          navigate("/home");
        } else {
          alert("Invalid credentials. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert("Something went wrong. Please try again later.");
      });
  };

  return (
    <div className='bodys'>
      <div className="containers">
        <div className="form-containers sign-in">
          <form onSubmit={login}>
            <h1>Login</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGooglePlusG /></a>
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGithub /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
            </div>
            <a href="/adminelog">Login As An Admine</a>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
            <Link to="/">Don't Have An Account Yet? Register Now</Link>
            <button type="submit">Login</button>
          </form>
        </div>

        <div className="toggle-containers">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" id="login">Login</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Login now and revisit all the cool features of the site</p>
              <button className="hidden" id="register">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};