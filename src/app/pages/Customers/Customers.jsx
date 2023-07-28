import React from "react";
import './Customers.css';

import Header from "../../components/utils/Header";
import CustomersBody from "../../components/Customers";

function Customers() {
 return(
    <div>
        <Header/>
        <CustomersBody/>
    </div>
 );
}

export default Customers;