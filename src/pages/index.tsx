import * as React from "react"
import Layout from "../components/Layout";
import Header from "../components/Home/Header";
import Companies from "../components/Home/Companies";
import Features from "../components/Home/Features";
import WhyUs from "../components/Home/WhyUs";
import HowItWorks from "../components/Home/HowItWorks";
import WhoCanDemand from "../components/Home/WhoCanDemand";
import BlogsContainer from "../components/BlogsContainer";
import './styles.scss';
import OurVision from "../components/Home/OurVision";
import SEO from "../components/SEO";
// markup
const IndexPage = ({location}: any) => {
    return (<Layout location={location}>
        <SEO blog={false}/>
        <Header/>
        <WhoCanDemand/>
        {/*<Companies/>*/}
        <Features/>

        <WhyUs/>
        {/*<HowItWorks/>*/}
        <BlogsContainer/>
        <OurVision/>
        </Layout>)
}

export default IndexPage
