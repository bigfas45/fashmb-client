import React, {Fragment, useState, useEffect} from "react";
import logo from '../fmbxjpg.jpg'
import { signout, isAuthenticated } from "../auth";
import {Link, withRouter} from "react-router-dom";


const Header = () => {
    const {user: {_id, firstname, lastname, email, role}} = isAuthenticated();

    const header = () => {
        return (
            <Fragment>
                <header>

                    <div className="header-area header-transparent">
                        <div className="main-header  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">

                                    <div>
                                        <div>
                                            <a href="index.html"><img src={logo} alt=""/></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10 col-md-10">
                                        <div className="menu-main d-flex align-items-center justify-content-end">

                                            <div className="main-menu f-right d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li className="active">
                                                            <Link to="/">Home</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">About</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/">Services</Link>
                                                        </li>
                                                        
                                                        <li>
                                                            <Link to="/">Contact</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                            <div className="header-right-btn f-right d-none d-lg-block">
                                             

                                                {firstname ?    <Link to="/dashboard" className="btn header-btn">{firstname}  </Link> :    <Link href="/register" className="btn header-btn">Apply For Loan  </Link>}
                                              
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </Fragment>
        )
    }

    return (
        <Fragment> {
            header()
        } </Fragment>
    )


};

export default Header;
