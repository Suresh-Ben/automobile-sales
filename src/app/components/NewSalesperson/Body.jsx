import React from "react";
import './Body.css';

function NewSalespersonBody() {
    return(
        <div className="container main-container">
            <div className="add-salesperson container-border">
                <h3>Add a Salesperson</h3>

                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name..."/>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name..."/>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Employee ID..."/>

                <button className="btn btn-primary">Create</button>
            </div>
        </div>
    );
}

export default NewSalespersonBody;