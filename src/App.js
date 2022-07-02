import React, { useState,useEffect } from 'react'
import Card from './components/Card'
import "./App.scss"
import axios from 'axios';
import "../src/App.scss"

const url = "https://randomuser.me/api";

const App = () => {
 const [user, setUser] = useState("")
 const users = async() => {
  // const response = await axios.get(url);
  // console.log(response);
  // setUser(response.data.results);
  try{
   const {data} = await axios.get(url);
   setUser(data.results[0]); 
  }
  catch(error){
   alert(error)
  }
 }
 useEffect(() => {
   users()
   },[]);
 
 return (
  <div className='App'>
   <div>asd
    {user && <Card user = {user}/>}
   </div>
   <div>
    <button className='button' onClick={user}>Generate Person</button>
   </div>
  </div>
  )
}

export default App