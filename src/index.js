import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ChakraProvider , extendTheme } from '@chakra-ui/react';
import MainLoaderComponent from './Components/MainLoaderComponent';

const OtherComponent = React.lazy(() => import('./App'));

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px"
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Suspense fallback={
          <div>
            <MainLoaderComponent/>
          </div>
        }>
        <OtherComponent/>
        </Suspense>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

