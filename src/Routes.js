import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./core/Home";
import Register from "./core/Register";
import Header from './componets/Header'
import ThankYou from './core/Thank-you-reg'
import Signin from './core/Signin'
import Verificationconfirmation from './core/Verification-confirmation'
import Dashboard from './core/Dashboard'
import UserDoc from './core/User-document'
import ImageUpload from './core/ImageUpload'
import ValidIdentityCard from './core/ValidIdentityCard'
import PhcnBill from './core/PhcnBill'
import Paystack from './core/Paystack'
import ApplyForm from './core/ApplyForm'
import History from './core/History'

import PrivateRoute from './auth/PrivateRoute'
import AdminRoute from './auth/AdminRoute'


import AdminDashboard from './admin/Dashboard'
import LoanApplications from './admin/LoanApplications'





const Routes = () => {




  return (
    <BrowserRouter>
 <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/verification" exact component={ThankYou} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/verification/:userId" exact component={Verificationconfirmation} />
        <PrivateRoute path="/Dashboard" exact component={Dashboard} />
        <PrivateRoute path="/document" exact component={UserDoc} />
        <PrivateRoute path="/photo" exact component={ImageUpload} />
        <PrivateRoute path="/idcard" exact component={ValidIdentityCard} />
        <PrivateRoute path="/phcnbill" exact component={PhcnBill} />
        <PrivateRoute path="/registrationfee" exact component={Paystack} />
        <PrivateRoute path="/loan/application" exact component={ApplyForm} />
        <PrivateRoute path="/history" exact component={History} />


        <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />

        <AdminRoute path="/admin/loan/application" exact component={LoanApplications} />



        
      

      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
