import React from "react";

import './NewSalesperson.css';
import Header from "../../components/utils/Header";
import NewSalespersonBody from '../../components/NewSalesperson';

function NewSalesperson() {
    return(
        <div>
            <Header/>
            <NewSalespersonBody/>
        </div>
    );
}

export default NewSalesperson;