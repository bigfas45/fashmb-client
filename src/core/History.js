import React, {Fragment, useState, useEffect} from "react";
import {isAuthenticated} from '../auth';

import {Link, Redirect} from "react-router-dom";
import {signup, sendVerificationMail} from '../auth';
import {getProject} from "./ApiCore";
import moment from 'moment';
import {Spinner, Button} from "reactstrap";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'
import Table from 'react-bootstrap/Table'

const ApplyForm = () => {

    const {
        user: {
            _id,
            firstname,
            email,
            role
        }
    } = isAuthenticated();

    const token = isAuthenticated().token;
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);


    const init = () => {
        getProject(_id).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setData(data)

            }
        });
    };

    useEffect(() => {

        init();
    }, [])


    let count = 0


    const applyForm = () => {
        return (
            <Fragment>
                <div class="section-top-border">
                    <h3 class="mb-30">Loan History</h3>
                    <div class="progress-table-wrap">
                        <div class="progress-table">
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Loan Amount</th>
                                        <th>Status</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody> {
                                    data.map((d, i) => {
                                        count++
                                        return (

                                            <tr>
                                                <td>{count}</td>
                                                <td>{
                                                    moment(d.createdAt).format("LL")
                                                }</td>
                                                <td>{
                                                    d.loan
                                                }</td>
                                                <td>{
                                                    d.status
                                                }</td>
                                                <td></td>
                                            </tr>

                                        )
                                    })
                                } </tbody>
                            </Table>


                        </div>
                    </div>
                </div>

            </Fragment>
        )
    }


    const userLinks = () => {
        return (

            <section class="blog_area section-padding">
                <div class="container">
                    <div class="row">


                        <div class="col-lg-4">
                            <div class="blog_right_sidebar">

                                <aside class="single_sidebar_widget post_category_widget">
                                    <h4 class="widget_title">
                                        <Link to="/dashboard" class="d-flex">
                                            User Dashboard
                                        </Link>
                                    </h4>
                                    <ul class="list cat-list">
                                        <li>
                                            <Link to="/loan/application" class="d-flex">
                                                <p>Loan</p>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/document" class="d-flex">
                                                <p>User Document</p>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/history" class="d-flex">
                                                <p>History</p>

                                            </Link>
                                        </li>


                                    </ul>
                                </aside>


                            </div>
                        </div>


                        <div class="apply-area col-lg-8 mb-5 mb-lg-0">
                            <div class="blog_left_sidebar">

                                {
                                applyForm()
                            } </div>
                        </div>

                    </div>
                </div>
            </section>


        );
    }


    return (
        <Fragment>
            <Layout title="Apply Form " description=""/> {
            userLinks()
        }


            <Footer/>
        </Fragment>
    )

}


export default ApplyForm;
