import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import NewSalesperson from './pages/NewSalesperson';
import NotFound from './pages/NotFound';
import Salespeople from './pages/Salespeople';
import NewCustomer from './pages/NewCustomer';
import Customers from './pages/Customers';
import NewSale from './pages/NewSale';
import Sales from './pages/Sales';
import SalesHistory from './pages/SalesHistory';

function App() {
    return ( 
        <Router>
            <Routes>
                <Route exact path='/salespeople/create' element={< NewSalesperson />}/>
                <Route exact path='/salespeople' element={< Salespeople />}/>

                <Route exact path='/customers/create' element={< NewCustomer />}/>
                <Route exact path='/customers' element={< Customers />}/>

                <Route exact path='/sales/create' element={< NewSale />}/>
                <Route exact path='/sales' element={< Sales />}/>
                <Route exact path='/sales/history' element={< SalesHistory />}/>

                {/* Not found */}
                <Route path='/404' element={< NotFound />} />
                <Route path='*' element={ <Navigate to="/404" /> } />
            </Routes>
        </Router>
    );
}

export default App;