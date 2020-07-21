import React, {Fragment, useState} from "react";
import {Link, Redirect} from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";
import {Spinner, Button} from "reactstrap";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'

const Signin = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false
  });
  const { email, password, error, loading, redirectToReferrer } = values;
  const {user} = isAuthenticated()

  const handleChnage = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then(data => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true
          });
        });
      }
    });
  };

  const showError = () => {
    return (
      <div
        class="alert alert-danger"
        role="alert"
        style={{ display: error ? "" : "none" }}
      >
        {error}

      </div>
    );
  };

  const showLoading = () =>
    loading && (
      <div>
        <Spinner type="grow" color="primary" />
        <Spinner type="grow" color="secondary" />
        <Spinner type="grow" color="success" />
        <Spinner type="grow" color="danger" />
        <Spinner type="grow" color="warning" />
        <Spinner type="grow" color="info" />
        <Spinner type="grow" color="light" />
        <Spinner type="grow" color="dark" />
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard"></Redirect>;
      }else if(user && user.role === 0 ){
        return <Redirect  to="/dashboard"></Redirect>;
      }
    }
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


                                        
                                            <div class="col-lg-12">
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

                                          
                                            <div class="col-lg-12">
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
                                                Sign In
                                            </button>
                                        )
                                    } </div>
                              
                                </form>
                                </div>
                                                <div class="card-footer text-center">
                                                    <div class="small">
                                                        <Link to="/signup">Need an account? Sign up!</Link>
                                                    </div>
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
                <Layout title="Signin"/> {
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

export default Signin;
