import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Routes from "./navigation/Routes";
import Layout from "./layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";
import { GlobalStyles } from "./GlobalCSS";

class App extends Component {
  render() {
    return (
      <ToastProvider>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          <BrowserRouter>
            <Layout>
              <Routes />
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </ToastProvider>
    );
  }
}

export default App;
