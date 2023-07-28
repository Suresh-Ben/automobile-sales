import React, { useState, useEffect } from "react";
import axios from "axios";

import './Body.css';

const api = axios.create({
  baseURL: ''
})

function CustomersBody() {

  const [customers, setCustomers] = useState(null);

  const makeRequest = async () => {
    try {
      let allCustomers = await api.get('/customers');
      setCustomers(allCustomers);
    } catch(err) {
      console.log(err);
    }
  }
  
  useEffect(()=>{
    makeRequest();
  }, []);

  return (
    <div className="table-container">
      <h3>Customers</h3>
      
      {/* table */}
      <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {
              customers? customers.map((customer)=>{
                return <Customer customer={customer}/>
              }) : null
            }
          </tbody>
      </table>
    </div>
  );
}

function Customer({customer}) {
    return(
        <tr>
          <td>{customer.first_name}</td>
          <td>{customer.last_name}</td>
          <td>{customer.phone_number}</td>
          <td>{customer.address}</td>
        </tr>
    );
}

export default CustomersBody;