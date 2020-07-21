import React, {Fragment, useState, useEffect} from "react";
import logo from '../fmbxjpg.jpg'

const Footer = () => {



  const footer = () => {
    return(
      <Fragment>
           <footer>
       
        <div class="footer-area">
            <div class="container">
               <div class="footer-top footer-padding">
                    <div class="row justify-content-between">
                        <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6">
                            <div class="single-footer-caption mb-50">
                                <div class="single-footer-caption mb-30">
                                
                                    <div class="footer-logo">
                                        <a href="index.html"><img width="50" height="50" src={logo} alt=""/></a>
                                    </div>
                                    <div class="footer-pera">
                                        <p>Heaven fruitful doesn't over lesser days appear creeping seasons so behold bearing</p>
                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Quick Link</h4>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Offers & Discounts</a></li>
                                        <li><a href="#">Get Coupon</a></li>
                                        <li><a href="#"> Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="single-footer-caption mb-50">
                                <div class="footer-tittle">
                                    <h4>Support</h4>
                                    <ul>
                                        <li><a href="#">Frequently Asked Questions</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                        <li><a href="#"> Privacy Policy</a></li>
                                        <li><a href="#">Report a Payment Issue</a></li>     
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
                <div class="footer-bottom">
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-xl-9 col-lg-8">
                            <div class="footer-copy-right">
                               
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4">
                        
                            <div class="footer-social f-right">
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fas fa-globe"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    
   
  </footer>
      </Fragment>
    )
  }



  return(
    <Fragment>
{footer()}
    </Fragment>
  )


};

export default Footer;











