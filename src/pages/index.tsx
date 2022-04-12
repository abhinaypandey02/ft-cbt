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
// markup
const IndexPage = ({location}: any) => {
    return (<Layout location={location}>
            <Header/>
            {/*<Companies/>*/}
        <Features/>

        <WhyUs/>
        <HowItWorks/>
        <WhoCanDemand/>
        <BlogsContainer/>
        </Layout>)
}

export default IndexPage
