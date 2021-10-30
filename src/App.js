import React, { useState } from 'react';
import axios from 'axios';
import Colors from './components/Colors';
import './App.css'
const App = () => {
  
  const [usersDataPage, setusersDataPage] = useState('')
  const fetchDataPage1 = (e, num) => {
    e.preventDefault()
    if (num === 1) {
      
      axios.get('https://reqres.in/api/users?page=1#')
        .then(res => {
          console.log('Response from main API: ', res)
          console.log('Colors Data: ', res.data.data)
          setusersDataPage(res.data.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
    if (num === 2) {
      axios.get('https://reqres.in/api/users?page=2#')
        .then(res => {
          console.log('Response from main API: ', res)
          console.log('Colors Data: ', res.data.data)
          setusersDataPage(res.data.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  return (
    <>
    <div className='heading'>Get Data on click</div>
    <div className='home-container'>
      <input onClick={(e) => fetchDataPage1(e, 1)} type='button' value='Click Me For Data on Page 1'/>
      <input onClick={(e1) => fetchDataPage1(e1, 2)} type='button' value='Click Me For Data on Page 2'/>
      <Colors data={usersDataPage} />

    </div>
    </>
  )
}


export default App;