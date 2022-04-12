import React from 'react';
import Layout from "../components/Layout";
import PageHeader from "../components/PageHeader";
import Navigator from "../components/Navigator";
import BlogsContainer from "../components/BlogsContainer";
import GetInTouch from "../components/GetInTouch";
import Info from "../components/ContactUs/Info";
export default function ContactUs({location}:{location:any}){
    return <Layout location={location}>
        <div className="contact-us">
            <PageHeader heading={"Contact Us"}/>
            <Navigator pathIDs={['home','contactUs']}/>
            <Info/>
            <GetInTouch/>
            <BlogsContainer/>
        </div>
    </Layout>
}
