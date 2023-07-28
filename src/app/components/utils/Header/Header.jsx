import React from "react";
import './Header.css';

function Header() {
    return(
        <div className="header">
            <div className="header-left">
                <h3 className="header-head">
                    <a href="/" style={{color: 'black', textDecoration: 'none'}}>Automobile Sales</a>
                </h3>
            </div>
            <div className="header-right">

                {/* Salespersons */}
                <div>
                    <button className="dropdown-toggle nav-link header-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        Sales people
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/salespeople/create">New Salesperson</a></li>
                        <li><a className="dropdown-item" href="/salespeople">All Salespeople</a></li>
                    </ul>
                </div>

                {/* Clients */}
                <div>
                    <button className="dropdown-toggle nav-link header-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        Customers
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/customers/create">New Customer</a></li>
                        <li><a className="dropdown-item" href="/customers">All Customers</a></li>
                    </ul>
                </div>

                {/* sales */}
                <div>
                    <button className="dropdown-toggle nav-link header-drop" data-bs-toggle="dropdown" aria-expanded="false">
                        Sales
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/sales/create">New Sale</a></li>
                        <li><a className="dropdown-item" href="/sales">All Sales</a></li>
                        <li><a className="dropdown-item" href="/sales/history">Salesperson History</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Header;