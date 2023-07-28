import React from "react";
import './Body.css';

function SalespeopleBody() {
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
                      <Salesperson/>
                    </tbody>
                </table>
            </div>
    );
}

function Salesperson() {
    return(
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
    );
}

export default SalespeopleBody;