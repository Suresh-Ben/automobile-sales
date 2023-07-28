import React from "react";
import './SalesHistory.css';

import Header from "../../components/utils/Header";
import SalesHistoryBody from "../../components/SalesHistory/Body";

function SalesHistory() {
    return(
        <div>
            <Header/>
            <SalesHistoryBody/>
        </div>
    );
}

export default SalesHistory;