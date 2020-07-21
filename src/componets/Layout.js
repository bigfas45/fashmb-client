import React from 'react';
import '../styles.css';

const Layout = ({title='Title', description='Description', className, children}) => 
<div class="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
<div class="container">
    <div class="row">
        <div class="col-xl-12">
            <div class="hero-cap text-center pt-50">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
</div>
</div>
export default Layout;