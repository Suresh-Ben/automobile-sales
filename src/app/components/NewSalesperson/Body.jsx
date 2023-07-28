import React, { useState } from "react";
import axios from "axios";

import './Body.css';

const api = axios.create({
    baseURL: 'hhtp://localhost:8090/api'
})

function NewSalespersonBody() {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [id, setId] = useState(null);
    const [err, setErr] = useState(null);

    const addNewSalesperson = async () => {
        if(!firstName || !lastName || !id) {
            setErr('Please fill all the fields');
            return;
        }
        try {   
            api.post('/salespeople', {
                first_name: firstName,
                last_name: lastName,
                employee_id: id
            });
        } catch(err) {
            console.log(err);
        }
    }

    return(
        <div className="container main-container">
            <div className="add-salesperson container-border">
                <h3>Add a Salesperson</h3>

                <input className="form-control" placeholder="First Name..." 
                    onChange={(e)=>{
                        setFirstName(e.target.value)
                    }}
                />
                <input className="form-control" placeholder="Last Name..."
                    onChange={(e)=>{
                        setLastName(e.target.value)
                    }}
                />
                <input className="form-control" placeholder="Employee ID..."
                    onChange={(e)=>{
                        setId(e.target.value)
                    }}
                />

                <button className="btn btn-primary"
                    onClick={()=>{
                        addNewSalesperson();
                    }}
                >
                    Create
                </button>
                <p style={{color: 'red'}}>{err}</p>
            </div>
        </div>
    );
}

export default NewSalespersonBody;