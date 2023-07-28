import React from "react";
import './NewSale.css';

import Header from "../../components/utils/Header";
import NewSaleBody from "../../components/NewSale";

function NewSale() {
    return(
        <div>
            <Header/>
            <NewSaleBody/>
        </div>
    );
}

export default NewSale;