import React from "react";
import './Body.css';

function NewSaleBody() {
    return(
        <div className="container main-container">
            <div className="add-salesperson container-border">
                <h3>Record a new sale</h3>

                <label htmlFor="automobile-type">Automobile VIN</label>
                <select className="form-select" id="automobile-type">
                    <option value="1">Choose an automobile VIN...</option>
                    <option value="2">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <label htmlFor="sale-salesperson">Salesperson</label>
                <select className="form-select" id="sale-salesperson">
                    <option value="1">Choose an salesperson...</option>
                    <option value="2">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <label htmlFor="sale-customer">Customer</label>
                <select className="form-select" id="sale-customer">
                    <option value="1">Choose an customer...</option>
                    <option value="2">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                
                <label htmlFor="sale-price">Price</label>
                <input type="number" id="sale-price" className="form-control" placeholder="0"/>

                <button className="btn btn-primary">Create</button>
            </div>
        </div>
    );
}

export default NewSaleBody;