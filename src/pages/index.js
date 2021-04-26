import * as React from "react"
import '../../styles/index.scss';
import Layout from "../components/Layout";
import Landing from '../components/Landing';
import About from '../components/About';
import How from '../components/How';
import Contact from '../components/Contact';
import Search from '../components/SearchEngine';



const IndexPage = () => {

  return (
      <Layout>
        <Search />
          <Landing />
          <About />
          <How />
          <Contact/>
        </Layout>
  )
}

export default IndexPage
