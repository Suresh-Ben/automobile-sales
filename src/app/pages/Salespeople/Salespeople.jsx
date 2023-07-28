import React from "react";

import './Salespeople.css';
import Header from "../../components/utils/Header";
import SalespersonBody from '../../components/Salespeople';

function Salespeople() {
    return(
        <div>
            <Header/>
            <SalespersonBody/>
        </div>
    );
}

export default Salespeople;