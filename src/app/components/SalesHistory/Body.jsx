import React from "react";
import './Body.css';

function SalesHistoryBody() {
    return(
        <div className="table-container">
            <h3>Salesperson History</h3>

            <label htmlFor="sale-salesperson">Salesperson</label>
            <select className="form-select" id="sale-salesperson">
                <option value="1">Choose an salesperson...</option>
                <option value="2">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>

            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Salesperson Name</th>
                    <th scope="col">Customer</th>
                    <th scope="col">VIN</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <SaleHistory/>
                </tbody>
            </table>
        </div>
    );
}

function SaleHistory() {
    return(
        <tr>
          <td>XXXXX</td>
          <td>XXXXX</td>
          <td>XXXXX</td>
          <td>XXXXX</td>
        </tr>
    );
}

export default SalesHistoryBody;