import * as React from "react"
import Layout from "../components/Layout";
import Search from '../components/SearchEngine';
import { Link } from 'gatsby';


const NotFoundPage = () => (
  <>
    <Search />
    <Layout>
      <h1>404: Not Found</h1>
      <p>Sorry! We couldn't find that page.</p>
      <Link to="/">Go Home</Link>
    </Layout>
  </>
)

export default NotFoundPage
