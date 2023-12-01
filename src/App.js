import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import axios from 'axios'
import React from 'react';
import Login from './components/login.components';

const baseURL = "https://api.chucknorris.io/jokes/random"


function App() {
const [token, setToken] = useState('')
  if(token == ''){
    return <Login setToken={setToken}/>
  }
  
  return(
    <div className='IDU'>
      {token}
    </div>
 )
  


}

export default App;
