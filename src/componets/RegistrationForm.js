import {Link, Redirect} from "react-router-dom";
import {signup, sendVerificationMail} from '../auth';
import {Spinner, Button} from "reactstrap";
import ReactTooltip from "react-tooltip";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'
import { Fragment } from "react";

const RegistrationForm = () => {





  const applyForm = ()  => {
    return(
      <Fragment>
          {/* <!-- Apply Area Start --> */}
        <div class="apply-area pt-150 pb-150">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="apply-wrapper">
                            {/* <!-- Form --> */}
                            <form action="#">
                                <div class="row">
                                   
                                   {/* <!-- Nice Select --> */}
                                  
                                  
                                    {/* <!-- First Name --> */}
                                    <div class="col-lg-6">
                                        <div class="single-form">
                                             <label>* FIRST NAME</label>
                                             <input type="text" name="" placeholder="Enter name"/>
                                        </div>
                                     </div>
                                     {/* <!-- Last Name --> */}
                                    <div class="col-lg-6">
                                        <div class="single-form">
                                             <label>* Last NAME</label>
                                             <input type="text" name="" placeholder="Enter name"/>
                                        </div>
                                     </div>
                                     {/* <!-- Nice Select -->
                                   <!-- Nice Select --> */}

                                     {/* <!-- Radio --> */}
                                    <div class="col-lg-12">
                                       <div class="single-form  d-flex">
                                            <label>* Select Gender :</label>
                                            {/* <!--Radio Select --> */}
                                           <div class="select-radio6">
                                                <div class="radio">
                                                    <input id="radio" name="radio" type="radio" checked=""/>
                                                    <label for="radio-6" class="radio-label">Male</label>
                                                </div>
                                                <div class="radio">
                                                    <input id="radio" name="radio" type="radio"/>
                                                    <label for="radio-7" class="radio-label">Female</label>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                  
                                    {/* <!-- First Name --> */}
                                    <div class="col-lg-6">
                                        <div class="single-form">
                                            <label>* Email Adderess</label>
                                            <input type="email" name="" placeholder="Enter email"/>
                                        </div>
                                    </div>
                               
                                    <div class="col-lg-6">
                                        <div class="single-form">
                                            <label>* WORK PHONE NUMBER</label>
                                            <input type="text" name="" placeholder="Phone Number"/>
                                        </div>
                                    </div>
                                  
                                </div>
                            </form>
                            {/* <!-- End From -->
                            <!-- Form btn --> */}
                            <a href="#" class="btn apply-btn mt-30">Register </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Apply Area End --> */}
       
      </Fragment>
    )
  }

  return(
    <Fragment>
        {applyForm()}
    </Fragment>
  )

}


export default RegistrationForm;
