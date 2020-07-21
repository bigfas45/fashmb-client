import React, {Fragment, useState, useEffect} from "react";
import {isAuthenticated} from '../auth';

import {Link, Redirect} from "react-router-dom";
import {signup, sendVerificationMail} from '../auth';
import {getProjectAdmin, readDoc} from "../core/ApiCore";
import moment from 'moment';
import {Spinner, Button} from "reactstrap";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'
import Table from 'react-bootstrap/Table'
import swal from "sweetalert";


const LoanApplications = () => {

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
    const [data2, setData2] = useState([]);

    const [error, setError] = useState(false);


    const init = () => {
        getProjectAdmin().then(data => {
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


    let count = 0;


    const dashboarddashboard = (title, text) => {
        swal({
          title: ` ${title}`,
          text: `${text}`,
          icon: "success"
        });
      };

      let occupation, houseAdress, city,income
      const update = id => {
        readDoc(id).then(data => {
            if (data.error) {
                console.log(data.error);
            }else{
                setData2(data)
              

                data2.map((docc, i) => {
                    occupation = docc.occupation
                    houseAdress = docc.houseAdress
                    city = docc.city
                    income = docc.income
                })

                const content = `
                 Occupation: ${occupation}

                 houseAdress: ${houseAdress}

                 city: ${city}

                 income: ${income}

                
                `
                
              
          
              dashboarddashboard(id,content)
           
            }
        })
    }
  


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
                                        <th>Name</th>
                                        <th>Email</th>
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
                                                <td onClick={() => update(d.userId._id)}> {d.userId.firstname} {d.userId.lastname} </td>
                                                <td> {d.userId.email} </td>
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
                                            <Link to="/admin/loan/application" class="d-flex">
                                                <p>Loan</p>

                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/admin/user" class="d-flex">
                                                <p>User </p>

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
{JSON.stringify(data2)}

            <Footer/>
        </Fragment>
    )

}


export default LoanApplications;
