import React, {useState, useEffect} from "react";
import axios from "axios";

import './Body.css';

const api = axios.create({
  baseURL: 'hhtp://localhost:8090/api'
})

function SalesBody() {

  const [sales, setSales] = useState(null);

  const makeRequest = async () => {
    try{
      let allSales = await api.get('/sales');
      setSales(allSales);
    } catch(err) {
      console.log(err);
    }
  }

  useEffect(()=>{
    makeRequest();
  }, []);

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
                  {
                    sales? sales.map((sale)=>{
                      return <Sale sale={sale}/>
                    }) : null
                  }
                </tbody>
            </table>
        </div>
    );
}

function Sale({sale}) {
    return(
        <tr>
          <td>{sale.salesperson}</td>
          <td>{sale.salesperson}</td>
          <td>{sale.customer}</td>
          <td>{sale.automobile}</td>
          <td>{sale.price}</td>
        </tr>
    );
}

export default SalesBody;