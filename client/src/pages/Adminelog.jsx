import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import '../pages/Signup.css'; // Adjust path if needed

import {
  FaGooglePlusG,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';

export const Adminelog = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const loginAdmin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:4500/api/v1/adminelogin", {
      email: email,
      password: password
    })
      .then((response) => {
        if (response.data === "success") {
          alert("Admin Login Successful");
          navigate("/admine");
        } else {
          alert("Invalid admin credentials");
        }
      })
      .catch((error) => {
        console.error("Admin login error:", error);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className='bodys'>
      <div className="containers">
        <div className="form-containers sign-in">
          <form onSubmit={loginAdmin}>
            <h1>Admin Login</h1>
            <div className="social-icons">
              <a href="#" className="icon"><FaGooglePlusG /></a>
              <a href="#" className="icon"><FaFacebookF /></a>
              <a href="#" className="icon"><FaGithub /></a>
              <a href="#" className="icon"><FaLinkedinIn /></a>
            </div>
            <span>Use your admin credentials</span>
            <input
              type="email"
              placeholder="Admin Email"
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
            <Link to="/">Return to User Login</Link>
            <button type="submit">Login as Admin</button>
          </form>
        </div>

        <div className="toggle-containers">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Admin!</h1>
              <p>Access your dashboard and manage the system</p>
              <button className="hidden" id="admin-login">Login</button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>System Access</h1>
              <p>Only authorized personnel can log in here</p>
              <button className="hidden" id="admin-register">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};