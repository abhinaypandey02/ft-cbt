import React from 'react';
import './styles.scss';
import PageHeader from "../components/PageHeader";
import Layout from "../components/Layout";
import Navigator from "../components/Navigator";
import BlogsContainer from "../components/BlogsContainer";
import AboutCBT from "../components/AboutUs/AboutCBT";
import WhyUsAbout from "../components/AboutUs/WhyUs";
import OurStrength from "../components/AboutUs/OurStrength";
import GetInTouch from "../components/GetInTouch";
import WhyUs from "../components/Home/WhyUs";

export default function AboutUs({location}:any) {
    return  <Layout location={location}>
        <div className="about-us">
            <PageHeader heading={"About Us"}/>
            <Navigator pathIDs={['home','aboutUs']}/>

            <AboutCBT/>
            <WhyUs/>
            {/*<WhyUsAbout/>*/}
            {/*<OurStrength/>*/}
            <GetInTouch/>
            <BlogsContainer/>
        </div>
    </Layout>
}
