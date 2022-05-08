import React from 'react';
import Header from './Header';
import Footer from './Footer/Footer';

const Layout = (props) => {
  return (
    <>
      <Header {...props} />  
      <div className="content">
        <div className="bodyContainer">
          {props.children}
        </div>
      </div>
      <Footer />  
    </>
  );
}

export default Layout;
