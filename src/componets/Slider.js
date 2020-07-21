import React, {Fragment} from "react";
import slider1 from '../Give away.jpg';
import slider2 from '../2.jpg'
import {Link} from "react-router-dom";


const Slider = () => {



  const slider = () => {
    return(
        <Fragment>
        
  <div className="slider-area slider-height" data-background="assets/img/hero/h1_hero.jpg">
      <div className="slider-active">
      
          <div className="single-slider">
              <div className="slider-cap-wrapper">
                  <div className="hero__caption">
                      <p data-animation="fadeInLeft" data-delay=".2s">Achieve your financial goal</p>
                      <h1 data-animation="fadeInLeft" data-delay=".5s">Small Business Loans For Daily Expenses.</h1>
                   
                      <Link to="/dashboard" className="btn hero-btn" data-animation="fadeInLeft" data-delay=".8s">Apply for Loan</Link>
                  </div>
                  <div className="hero__img">
                      <img src={slider1} alt=""/>
                  </div>
              </div>
          </div>
       
          <div className="single-slider">
              <div className="slider-cap-wrapper">
                  <div className="hero__caption">
                      <p data-animation="fadeInLeft" data-delay=".2s">Achieve your financial goal</p>
                      <h1 data-animation="fadeInLeft" data-delay=".5s">Small Business Loans For Daily Expenses.</h1>
                  
                      <Link to="/dashboard" className="btn hero-btn" data-animation="fadeInLeft" data-delay=".8s">Apply for Loan</Link>
                  </div>
                  <div className="hero__img">
                      <img src={slider2} alt=""/>
                  </div>
              </div>
          </div>
      </div>
  
      <div className="slider-footer section-bg d-none d-sm-block">
          <div className="footer-wrapper">
           
              <div className="single-caption">
                  <div className="single-img">
                      <img src="assets/img/hero/hero_footer.png" alt=""/>
                  </div>
              </div>
         
              <div className="single-caption">
                  <div className="caption-icon">
                      <span className="flaticon-clock"></span>
                  </div>
                  <div className="caption">
                      <p>Quick & Easy Loan</p>
                      <p>Approvals</p>
                  </div>
              </div>
           
              <div className="single-caption">
                  <div className="caption-icon">
                      <span className="flaticon-like"></span>
                  </div>
                  <div className="caption">
                      <p>Quick & Easy Loan</p>
                      <p>Approvals</p>
                  </div>
              </div>
          
              <div className="single-caption">
                  <div className="caption-icon">
                      <span className="flaticon-money"></span>
                  </div>
                  <div className="caption">
                      <p>Quick & Easy Loan</p>
                      <p>Approvals</p>
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
{slider()}
    </Fragment>
  )


};

export default Slider;











