import React, {Fragment, useState, useEffect} from "react";
import Footer from '../componets/Footer'
import Applyin3steps from '../componets/Applyin3steps'
import Section from '../componets/Section'
import WhyChooseUs from '../componets/WhyChooseUs'
import Slider from '../componets/Slider'

const Home = () => {


    return (


        <Fragment>
            <main>
                <Slider />
                <WhyChooseUs/>
                <Section/>
                <Applyin3steps/>

                <Footer/>

            </main>
        </Fragment>
    );
};

export default Home;
