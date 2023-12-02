import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import React from 'react';
import Login from './components/login.components';
import useToken from './components/useToken';

function Profile(token){
  axios.get('https://s35.idu.edu.pl/api/v2/user/profile', {headers: {'X-API-TOKEN': token}})
  .then((response) =>{
    sessionStorage.setItem('profile', response.data.data)

    const profile = response.data.data
    const element = document.getElementById('profile')

    element.innerHTML = `Citizen ${profile.first_name} ${profile.last_name} ID: ${profile.id}, <br/> You have ${profile.unread_messages_count} unread messages, see to them at Your earliest convenience`
  })
}

function App() {
  const {token, setToken} = useToken();

  if(!token){
    return <Login setToken={setToken}/>
  }

  Profile(token)
  
  return(
    <div className='IDU'>
      <h1>Profile</h1>
      <h2 id='profile'>Loading...</h2>
    </div>
 )
}
export default App;
