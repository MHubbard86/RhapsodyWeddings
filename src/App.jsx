import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./layout/_routes";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import { GlobalStyles } from "./GlobalCSS";

class App extends Component {
  render() {
    return (
      <>
        <div className="content">
            <Header {...this.props} />
            <ToastProvider>
              <ThemeProvider theme={lightTheme}>
                <GlobalStyles />
                <BrowserRouter>
                  <Routes />
                </BrowserRouter>
              </ThemeProvider>
            </ToastProvider>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
