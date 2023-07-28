import React, { useState, useEffect } from "react";
import axios from "axios";

import './Body.css';

const api = axios.create({
  baseURL: ''
})

function SalespeopleBody() {

  const [people, setPeople] = useState(null);

  const makeRequest = async () => {
    try{
      let allPeople = await api.get('/salespeople');
      setPeople(allPeople);
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(()=>{
    makeRequest();
  },[]);

  return (
      <div className="table-container">
              <h3>Salespeople</h3>

              {/* table */}
              <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Employee ID</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      people? people.map((person)=>{
                        return <Salesperson person={person}/>
                      }): null
                    }
                  </tbody>
              </table>
          </div>
  );
}

function Salesperson({person}) {
    return(
        <tr>
          <td>{person.first_name}</td>
          <td>{person.last_name}</td>
          <td>{person.employee_id}</td>
        </tr>
    );
}

export default SalespeopleBody;