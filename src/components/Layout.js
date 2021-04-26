import * as React from "react"
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {

  return (
    <>
      <div className="main-container">
        <Header />
        <main>{children}</main>
      </div>
        <Footer />  
    </>
  )
}

export default Layout
