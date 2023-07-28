import React, {useState} from "react";
import axios from "axios";

import './Body.css';

const api = axios.create({
    baseURL: ''
})

function NewCustomerBody() {

    return(
        <div className="container main-container">
            <div className="add-salesperson container-border">
                <h3>Add a Customer</h3>

                <input className="form-control" placeholder="First Name..."/>
                <input className="form-control" placeholder="Last Name..."/>
                <input className="form-control" placeholder="Address..."/>
                <input className="form-control" placeholder="Phone number..."/>

                <button className="btn btn-primary">Create</button>
            </div>
        </div>
    );
}

export default NewCustomerBody;