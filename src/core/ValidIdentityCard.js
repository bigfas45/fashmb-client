import React, { Fragment, useState, useEffect } from "react";
import {isAuthenticated} from '../auth';
import {updateDocument, getProjectDocument} from "./ApiCore";

import {Link, Redirect} from "react-router-dom";
import {signup, sendVerificationMail} from '../auth';
import {Spinner, Button} from "reactstrap";
import Footer from '../componets/Footer'
import Layout from '../componets/Layout'

const UserDocument = () => {

  const { 
    user : {_id, firstname, email, role}
} = isAuthenticated();

const token = isAuthenticated().token;

const [values, setValues] = useState({
 
    idcard:'',
    doc: [],
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: ''
});


const {
    idcard,
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


useEffect(() => {
    init(_id);

}, []);

let d 

const docId = () => {
doc.map((dd, i) => {

    d = dd._id

})
}




const handleChange = name => event => {
    const value =event.target.files[0] 
    formData.set(name, value);
  
    setValues({
        ...values,
        error: '',
        [name]: value
    });
};

const clickSubmit = event => {
    event.preventDefault();
    setValues({
        ...values,
        error: '',
        loading: true
    });

    updateDocument(_id, d, token, formData).then(data => {
        if (data.error) {
            setValues({
                ...values,
                error: data.error
            })
        } else {
            setValues({
                ...values,
                project: '',
                file: '',
                loading: false,
               
                   redirectToProfile: true,
            });
          

        }
    })


};

const showSuccess = () => (
    <div style={
            {
                display: createdProduct ? '' : 'none'
            }
        }
        class="alert alert-success alert-dismissible bg-success text-white border-0 fade show"
        role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>Success -
        </strong>
        oject is created.!
    </div>
);

const showError = () => (
    <div style={
            {
                display: error ? '' : 'none'
            }
        }
        class="alert alert-danger alert-dismissible bg-danger text-white border-0 fade show"
        role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>Error -
        </strong>
       {error}
    </div>
);

const redirectUser = () => {
    if (redirectToProfile) {
      if (!error) {
        return <Redirect to="/phcnbill"/>
      }
    }
  };






  const applyForm = ()  => {
    return(
      <Fragment>
          {/* <!-- Apply Area Start --> */}
     
         
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="apply-wrapper">
                            {/* <!-- Form --> */}
                            {
                                showSuccess()
                            }
                                {
                                showError()
                            }
                           
                            <form  onSubmit={clickSubmit}>
                                <div class="row">
                                   
                                 
                                    <div class="col-lg-6">
                                        <div class="single-form">
                                             <label>* Valid Identity Card</label>
                                             <input onChange={
                                                handleChange("idcard")
                                            }
                                         type="file" name="" />
                                        </div>
                                     </div>
                                     {/* <!-- Last Name --> */}
                                   
                                 
                                    
                               
                                  
                                  
                                </div>


                                {loading && loading ? (<Button class="btn btn-danger apply-btn mt-30" variant="success" disabled>
                     <Spinner
                       as="span"
                       animation="grow"
                       size="sm"
                       role="status"
                       aria-hidden="true"
                     />
                     Loading...
                   </Button>) : ( <input type="submit"  className="btn btn-success"   value="Submit" />)}
                            </form>
                            {/* <!-- End From -->
                            <!-- Form btn --> */}
                            {/* <Link to="/idcard" class="btn apply-btn mt-30">Next </Link> */}
                        </div>
                    </div>
                </div>
           
        {/* <!-- Apply Area End --> */}
       
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
                          <h4 class="widget_title">User Dashboard</h4>
                          <ul class="list cat-list">
                              <li>
                                  <Link to="#" class="d-flex">
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




              <div class="apply-area col-lg-8 mb-5 mb-lg-0">
                  <div class="blog_left_sidebar">
                     
                      {applyForm()}
                   
                  </div>
              </div>
  
          </div>
      </div>
  </section>
        
          
    );
  }


  return(
    <Fragment>
       <Layout title="Document " description="Upload your document" />

        {userLinks()}

     {docId()}
     {redirectUser()}

        <Footer />
    </Fragment>
  )

}


export default UserDocument;
