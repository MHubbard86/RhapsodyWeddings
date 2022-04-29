import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header {...props} />  
      <div className="content">
          {props.children}
      </div>
      <Footer />  
    </>
  );
}

export default Layout;
