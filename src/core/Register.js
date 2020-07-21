import React, {Fragment, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import {signup, sendVerificationMail} from '../auth';
import {Spinner, Button} from "reactstrap";
import ReactTooltip from "react-tooltip";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'

const Home = () => {


    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        email: "",
        userType: "",
        password: "",
        telephone: "",
        error: "",
        loading: false,
        success: false
    });
    const {
        firstname,
        lastname,
        email,
        password,
        telephone,
        error,
        success,
        loading
    } = values;

    const handleChnage = name => event => {
        setValues({
            ...values,
            error: false,
            [name]: event.target.value
        });
    };

    const init = (email) => {
        sendVerificationMail(email).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    pop: false
                });
            } else {
                setValues({
                    ...values,
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    success: true,
                    pop: true
                });
            }
        });
    };


    const redirectUser = () => {
        if (success) {

            return <Redirect to="/verification"></Redirect>;

        }

    };


    const clickSubmit = event => {
        event.preventDefault();
        setValues({
            ...values,
            error: false,
            loading: true
        });
        signup({
            firstname,
            lastname,
            email,
            password,
            telephone

        }).then(data => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    success: false,
                    loading: false
                });
            } else {
                setValues({
                    ...values,
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: "",
                    telephone: "",
                    success: true
                });
                init(email)
            }
        });
    };

    const showError = () => {
        return (

            <div className="alert alert-danger" role="alert"
                style={
                    {
                        display: error ? "" : "none"
                    }
            }>
                {error} </div>


        );
    };




    const applyForm = () => {
        return (
            <Fragment> {/* <!-- Apply Area Start --> */}
                <div class="apply-area pt-150 pb-150">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8">
                                <div class="apply-wrapper">
                                {
                                            showError()
                                        }
                                    {/* <!-- Form --> */}
                                    <form action="#">
                                        <div class="row">

                                            {/* <!-- Nice Select --> */}


                                            {/* <!-- First Name --> */}
                                            <div class="col-lg-6">
                                                <div class="single-form">
                                                    <label>* FIRST NAME</label>
                                                    <input onChange={
                                                            handleChnage("firstname")
                                                        }
                                                        value={firstname}
                                                        type="text"
                                                     
                                                        placeholder="Enter name"/>
                                                </div>
                                            </div>
                                            {/* <!-- Last Name --> */}
                                            <div class="col-lg-6">
                                                <div class="single-form">
                                                    <label>* Last NAME</label>
                                                    <input onChange={
                                                            handleChnage("lastname")
                                                        }
                                                        value={lastname}
                                                        type="text"
                                                     
                                                        placeholder="Enter name"/>
                                                </div>
                                            </div>
                                            {/* <!-- Nice Select -->
                                   <!-- Nice Select --> */}

                                            {/* <!-- Radio --> */}


                                            {/* <!-- First Name --> */}
                                            <div class="col-lg-6">
                                                <div class="single-form">
                                                    <label>* Email Adderess</label>
                                                    <input onChange={
                                                            handleChnage("email")
                                                        }
                                                        value={email}
                                                        type="email"
                                                      
                                                        placeholder="Enter email"/>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="single-form">
                                                    <label>* WORK PHONE NUMBER</label>
                                                    <input onChange={
                                                            handleChnage("telephone")
                                                        }
                                                        value={telephone}
                                                        type="text"
                                                      
                                                        placeholder="Phone Number"/>
                                                </div>
                                            </div>

                                            <div class="col-lg-6">
                                                <div class="single-form">
                                                    <label>* Password</label>
                                                    <input onChange={
                                                            handleChnage("password")
                                                        }
                                                        value={password}
                                                        type="password"
                                                     
                                                        placeholder="Enter password"/>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    {/* <!-- End From -->
                            <!-- Form btn --> */}

                                    <div> {
                                        loading && loading ? (
                                            <Button class="btn apply-btn mt-30" variant="success" disabled>
                                                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>
                                                Loading...
                                            </Button>
                                        ) : (
                                            <button onClick={clickSubmit}
                                                class="btn apply-btn mt-30"
                                                type="submit">
                                                Sign Up
                                            </button>
                                        )
                                    } </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Apply Area End --> */} </Fragment>
        )
    }


    return (

        <Fragment>
            <main>
                <Layout title="Registration"/> {
                applyForm()
            }
             {
                redirectUser()
            } 
                <Footer/>

            </main>
        </Fragment>

    );
};

export default Home;
