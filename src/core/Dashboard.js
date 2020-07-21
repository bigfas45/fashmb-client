import React, {Fragment, useState, useEffect} from "react";
import Layout from '../componets/Layout'
import {isAuthenticated} from '../auth';
import {Link} from 'react-router-dom';
import Footer from '../componets/Footer'

const Dashboard = () => {


  // const [history, setHistory] = useState([])

  const { 
      user : {_id, firstname, email, role}
  } = isAuthenticated();

  const token = isAuthenticated().token





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
                                  <Link to="#" class="d-flex">
                                      <p>History</p>
                                     
                                  </Link>
                              </li>
                            
                            
                          </ul>
                      </aside>

                   
                    


                   
                  </div>
              </div>




              <div class="col-lg-8 mb-5 mb-lg-0">
                  <div class="blog_left_sidebar">
                     
                      {userInfo()}
                   
                  </div>
              </div>
  
          </div>
      </div>
  </section>
        
          
    );
  }


    const userInfo = () => {
      return (
          <div className="card mb-5" >

             <h3 className="card-header bg-danger text-white">User Information</h3>
             <ul className="list-group">
                 <li className="list-group-item">{firstname}</li>
                 <li className="list-group-item">{email}</li>
                 <li className="list-group-item">{role === 1 ? 'Admin' : "Registered User"}</li>
             </ul>

         </div>
      );
  };



  return(
    <Fragment>
 <Layout title="Dashboard " description={`G'day ${firstname}!` }  />


 {userLinks()}


<Footer />
    </Fragment>
  )

}


export default Dashboard