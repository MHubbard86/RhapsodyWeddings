import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Routes from "./navigation/Routes";
import Layout from "./layout/Layout";
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/themes";
import { GlobalStyles } from "./styles/GlobalCSS";
import SimpleReactLightbox from "simple-react-lightbox";

class App extends Component {
  render() {
    return (
      <SimpleReactLightbox>
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
      </SimpleReactLightbox>
    );
  }
}

export default App;
