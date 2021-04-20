import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../../styles/index.scss';
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Landing from '../components/Landing';
import About from '../components/About';
import How from '../components/How';


const IndexPage = () => {

  return (
      <Layout>
        <SEO title="Remote Respects" />
          <Landing />
          <About />
          <How />
        </Layout>
  )
}

export default IndexPage
