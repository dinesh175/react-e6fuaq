import React from "react";
import React, { useState } from 'react';
import axios from 'axios';
export default function Login(props)
{
  const [loading, setLoading] = useState(false);
  const username = ('');
  const password = ('');
  const [error, setError] = useState(null);
  
   const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:3001/login', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
     
      props.history.push('/Signup');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }
 
  return (
     <div className="Form">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
          <br />
        </div>
        <button type="button" class="btn btn-primary" onClick={handleLogin}>
          login
        </button>
      </div>
  )
}