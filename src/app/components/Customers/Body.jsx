import React from "react";
import './Body.css';

function CustomersBody() {
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
                  <Customer/>
                </tbody>
            </table>
          </div>
    );
}

function Customer() {
    return(
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>(+91) 807 474 3084</td>
          <td>Visakhapatanam, Ap</td>
        </tr>
    );
}

export default CustomersBody;