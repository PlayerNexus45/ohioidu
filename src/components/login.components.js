import React from "react";
import { useState } from 'react';
import axios from 'axios'
import PropTypes from 'prop-types'
export default function Login({ setToken }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
  
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
  
      axios.post(`https://s35.idu.edu.pl/api/v2/auth/login`, {login: `${email}`, password: `${password}`})
        .then((response) =>{
          setToken(response.data.token)
        }
        )
    };
    return (
        <div className='App'>
          <div className='auth-wrapper'>
            <div className='auth-inner'>
          <form onSubmit={handleSubmit}>
            <h3>Welcome to OhioIDU</h3>
            <div className="mb-3">
              <label>Login</label>
              <input
                type="text"
                className="form-control"
                value={email}
                placeholder=""
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                placeholder=""
                onChange={handlePasswordChange}
              />
            </div>
            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Glory to Ohio
              </button>        
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="https://www.youtube.com/watch?v=Zt-Ql9ZE2XI">password?</a>
            </p>
          </form>
          </div>
          </div>
    
        </div>
      );
      Login.propTypes = {
        setToken: PropTypes.func.isRequired
      }
}