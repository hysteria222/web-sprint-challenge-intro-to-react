import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const urlPlanets = "http://localhost:9009/api/planets";
const urlPeople = "http://localhost:9009/api/people";

function App() {
  // ❗ Create state to hold the data from the API

  const [data, setData] = useState([]);

  // ❗ Create effects to fetch the data and put it in state

  useEffect(() => {
    axios
      .get("http://localhost:9009/api/planets")
      .then((resp1) => {
        axios.get("http://localhost:9009/api/people").then((resp2) => {
          const planetData = resp1.data;
          const peopleData = resp2.data;
          const finalData = peopleData.map((person) => {
            const homeworldInfo = planetData.find(
              (planet) => person.homeworld === planet.id
            );
            return {
              ...person,
              homeworld: homeworldInfo,
            };
          });
          console.log(finalData);
          setData(finalData);
        });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>
        See the README of the project for instructions on completing this
        challenge
      </p>
      <div>
        {
          /* ❗ Map over the data in state, rendering a Character at each iteration */
          data.map((item, i) => {
            return (
            <Character key={item.id} {...data[i]}/>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== "undefined" && module.exports) module.exports = App;
