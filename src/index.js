import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ProductProvider } from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ProductProvider>
  <Router>
    <App />
  </Router>
  </ProductProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister();
