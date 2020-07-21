import React, {Component, Fragment, useEffect, useState} from "react";
import {isAuthenticated} from '../auth';
import {updateDocument, getProjectDocument, updatePayment} from "./ApiCore";
import {Link, Redirect} from "react-router-dom";
import {signup, sendVerificationMail} from '../auth';
import {Spinner, Button} from "reactstrap";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'
import {PaystackButton} from 'react-paystack';
import randomstring from "randomstring";


const Paystack = () => {

    const [refre, setrefre] = useState([]);

    const {
        user: {
            _id,
            firstname,
            email,
            role
        }
    } = isAuthenticated();

    const token = isAuthenticated().token;

    const [values, setValues] = useState({

        payment: '',
        doc: [],
        loading: false,
        error: '',
        createdProduct: '',
        redirectToProfile: false,
        formData: ''
    });


    const {
        payment,
        doc,
        loading,
        error,
        createdProduct,
        redirectToProfile,
        formData
    } = values;


    const init = (_id) => {
        getProjectDocument(_id).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                })
            } else {
                setValues({
                    ...values,
                    doc: data,
                    formData: new FormData()
                });
            }
        });
    };


    const intUpdatePayment = () => {
        updatePayment(_id, d, token).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error
                });
            } else {
                setValues({
                    ...values,
                    redirectUser: true
                });
            }
        });
    };

    useEffect(() => {
        init(_id);
        intUpdatePayment()


    }, []);

    let d

    const docId = () => {
        doc.map((dd, i) => {

            d = dd._id

        })
    }


    let paymentId

    let callback = (response) => {
        console.log(response);
        if (response.message === 'Success') {
            console.log(response.message);
            {
                intUpdatePayment()
            }
        }
    }

    let close = () => {
        console.log("Payment closed");
    }

    let key = 'pk_test_a3c6eed2d7700ebb41bf5417adeee9ae037f0fdc'


    const rand = randomstring.generate()


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


                        <div class="apply-area col-lg-8 mt-10 mb-lg-0">
                            <div class="blog_left_sidebar">

                                <PaystackButton text="Make Payment" className="bg-success text-white"
                                    callback={callback}
                                    close={close}
                                    disabled={true}
                                    embed={true}
                                    reference={rand}
                                    email={email}
                                    amount={
                                        1000 * 100
                                    }
                                    publicKey={key}
                                    tag="button"/>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


        );
    }


    return (
        <Fragment>
            <Layout title="Fee " description="Registration Fee"/> {
            userLinks()
        }

            <Footer/>
        </Fragment>
    )

}


export default Paystack;
