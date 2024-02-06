import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API

  const [planetData, setPlanetData] = useState('')
  const [peopleData, setPeopleData] = useState('')


  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    axios
      .get('http://localhost:9009/api/planets')
      .then(res => {
        // console.log(res.data);
        setPlanetData(res.data.name)
      })
      .catch(err => console.log(err.message));
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:9009/api/people')
      .then(res => {
        // console.log(res.data);
        setPeopleData(res.data.name)
      })
      .catch(err => console.log(err.message));
  }, [])


 useEffect(() => {
  
}, [])
  

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
        <div className='character-card'>
        {/* ❗ Map over the data in state, rendering a Character at each iteration */
          
        }
        </div>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App


