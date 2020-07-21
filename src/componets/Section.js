import React, {Fragment, useState, useEffect} from "react";

const Section = () => {



    const section = () => {
        return(
            <Fragment>
                   <div className="about-low-area section-padding2">
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-12">
                      <div className="about-caption mb-50">
                       
                          <div className="section-tittle mb-35">
                              <span>About Our Company</span>
                              <h2>Building a Brighter financial Future & Good Support.</h2>
                          </div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eniminixm, quis nostrud exercitation ullamco laboris nisi ut aliquip exeaoauat. Duis aute irure dolor in reprehe.</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, oeiusmod tempor incididunt ut labore et dolore magna aliq.</p>
                          <a href="apply.html" className="btn">Apply for Loan</a>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                   
                      <div className="about-img ">
                          <div className="about-font-img d-none d-lg-block">
                              <img src="assets/img/gallery/about2.png" alt=""/>
                          </div>
                          <div className="about-back-img ">
                              <img src="assets/img/gallery/about1.png" alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
            </Fragment>
        )
    }

  return(
    <Fragment>
{section()}
    </Fragment>
  )


};

export default Section;











