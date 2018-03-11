import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import NavBar from './components/NavBar';
import InvoicesPage from './components/pages/Invoices';
import InvoiceNew from './components/pages/InvoiceNew';
import Customers from './components/pages/Customers';

export default (
  <div>
    <NavBar />
    <div className="main-content-wrapper">
      <Switch>
        <Redirect from="/" exact to="/invoices" />

        <Route exact path={'/invoices'} component={InvoicesPage} />
        <Route path={'/invoices/new'} component={InvoiceNew} />
        <Route path={'/customers'} component={Customers} />
      </Switch>
    </div>
  </div>
);