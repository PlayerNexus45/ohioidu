import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios'
import React from 'react';

const baseURL = "https://api.chucknorris.io/jokes/random"


function App() {
  const [data, setData] = useState({data: []});
  const x = 12;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('')
  


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
  // const handleClick = async (e) => {
  //   // e.preventDefault()
  //   //    const response = await fetch(baseURL, {
  //   //      method: 'GET',
  //   //      headers: {
  //   //        Accept: 'application/json',
  //   //      },
  //   //    });

  //   //   const result = response

  //   //   setData(result);


  // };

  console.log(data);
  if(token == ''){
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
            <h3>{token}</h3>       
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="https://www.youtube.com/watch?v=Zt-Ql9ZE2XI">password?</a>
          </p>
        </form>
        </div>
        </div>
  
      </div>
    );
  }
  else{
    return(
      <div>
        zalogowano
      </div>
    )
  }


}
function Login(){

}

export default App;
