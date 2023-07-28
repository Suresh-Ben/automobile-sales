import React from "react";
import './NewCustomer.css';

import Header from "../../components/utils/Header";
import NewCustomerBody from "../../components/NewCustomer";

function NewCustomer() {
    return(
        <div>
            <Header/>
            <NewCustomerBody/>
        </div>
    );
}

export default NewCustomer;