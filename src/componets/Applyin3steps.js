import React, {Fragment, useState, useEffect} from "react";

const Applyin3steps = () => {



  const applyin3steps = () => {
    return(
        <Fragment>
            
  <div class="application-area pt-150 pb-140" data-background="assets/img/gallery/section_bg03.jpg">
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-lg-6 col-md-10">
              
                  <div class="section-tittle section-tittle2 text-center mb-45">
                      <span>Apply in Three Easy Steps</span>
                      <h2>Easy Application Process For Any Types of Loan</h2>
                  </div>
              </div>
          </div>
          <div class="row justify-content-center">
              <div class="col-lg-9 col-xl-8">
               
                  <form action="#" class="search-box">
                      <div class="select-form">
                          <div class="select-itms">
                              <select name="select" id="select1">
                                  <option value="">Select Amount</option>
                                  <option value="">$120</option>
                                  <option value="">$700</option>
                                  <option value="">$750</option>
                                  <option value="">$250</option>
                              </select>
                          </div>
                      </div>
                      <div class="select-form">
                          <div class="select-itms">
                              <select name="select" id="select1">
                                  <option value="">Duration Month</option>
                                  <option value="">7 Days</option>
                                  <option value="">10 Days</option>
                                  <option value="">14 Days Days</option>
                                  <option value="">20 Days</option>
                              </select>
                          </div>
                      </div>
                      <div class="input-form">
                          <input type="text" placeholder="Return Amount"/>
                      </div>
                      <div class="search-form">
                          <a href="apply.html">Apply for Loan</a>
                      </div>	
                  </form>	
              </div>
          </div>
      </div>
  </div>
        </Fragment>
    )
}

  return(
    <Fragment>
{applyin3steps()}
    </Fragment>
  )


};

export default Applyin3steps;











