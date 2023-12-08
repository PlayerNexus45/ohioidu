import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import React, { useState } from 'react';
import Login from './components/login.components';
import useToken from './components/useToken';
function Profile(token){
  axios.get('https://s35.idu.edu.pl/api/v2/user/profile', {headers: {'X-API-TOKEN': token}})
  .then((response) =>{
    sessionStorage.setItem('profile', response.data.data)
    const profile = response.data.data
    var str = JSON.stringify(response.data.data)
    const element = document.getElementById('profile')
    element.innerHTML = `Citizen ${profile.first_name} ${profile.last_name} ID: ${profile.id}, <br/> You have ${profile.unread_messages_count} unread messages, see to them at Your earliest convenience, <br/> `
  }
  )
}
function Messages(token, msg, page){
  axios.get('https://s35.idu.edu.pl/api/v2/user/messages?page='+page.toString(), {headers: {'X-API-TOKEN': token}})
  .then((response) =>{
    sessionStorage.setItem('messages', response.data.data)
    const messages = response.data.data
    var str = JSON.stringify(response.data.data)
    const element = document.getElementById('profile')
    element.innerHTML = `${messages[msg].from.name}, at  ${messages[msg].created_at.slice(0, 19)} sent you the following: \n ${messages[msg].title}${messages[msg].body}`
  }
  )
}
function App() {
  const {token, setToken} = useToken();
  const [counter, setCounter] = useState(0)
  const [msg, setmsg] = useState(1)
  const [page, setpage] = useState(1)
  function handleClick1() {
    setCounter(1)
  }
  function handleClick0() {
    setCounter(0)
  }
  function handleClickup() {
    if(msg < 9){
      setmsg(msg+1)
    }
    else if(page < 10){
      setmsg(0)
      setpage(page+1)
    }
  }
  function handleClickdown() {
    if (msg > 0){
      setmsg(msg-1)
    }
    else if(page > 1){
      setmsg(9)
      setpage(page-1)
    }
    
  }
  if(!token){
    return <Login setToken={setToken}/>
  }
  if(counter == 0){
  Profile(token)
  return(
    <div className='IDU'>
      <div className='parent-container d-flex'>
        <div className='container'>
          <div className='row'>
          <button className='col' onClick={handleClick0}>Profile</button>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
          <button className='col' onClick={handleClick1}>Messages</button>
          </div>
        </div>
      </div>

      <div className='profile'>
        <h2 id='profile'>Loading...</h2>
      </div>

    </div>
 )
}
else if(counter == 1){
  Messages(token, msg, page)
  return(
  <div className='IDU2'>
  <div className='parent-container d-flex'>
    <div className='container'>
      <div className='row'>
      <button className='col' onClick={handleClick0}>Profile</button>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
      <button className='col' onClick={handleClick1}>Messages</button>
      </div>
    </div>
  </div>
  
  <div className='d-inline-flex p-2' id='centre'>
      <h2 id='profile'className='messages'>Loading...</h2>
  </div>

  <div className='parent-container d-flex'>
    <div className='container'>
      <div className='row'>
      <button className='col' onClick={handleClickdown}>Previous</button>
      </div>
    </div>
    <div className='container'>
      <div className='row'>
      <button className='col' onClick={handleClickup}>Next</button>
      </div>
    </div>
  </div>

</div>
  )
}


}

export default App;
