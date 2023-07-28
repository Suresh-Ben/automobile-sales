import React from "react";
import './Body.css';

function SalesBody() {
    return(
        <div className="table-container">
            <h3>Sales</h3>

            {/* table */}
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Salesperson Employee ID</th>
                    <th scope="col">Salesperson Name</th>
                    <th scope="col">Customer</th>
                    <th scope="col">VIN</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <Sale/>
                </tbody>
            </table>
        </div>
    );
}

function Sale() {
    return(
        <tr>
          <td>XXXXX</td>
          <td>XXXXX</td>
          <td>XXXXX</td>
          <td>XXXXX</td>
          <td>XXXXX</td>
        </tr>
    );
}

export default SalesBody;