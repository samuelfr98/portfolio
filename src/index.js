import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

// // AWS Amplify Backend
// import Amplify from "aws-amplify";
// import awsExports from "./aws-exports";
// Amplify.configure(awsExports);
// //


ReactDOM.render(
  <React.StrictMode>
  {/* Added below line to force responsive web design on mobile devices. Not working, should be added to index.html equivalent file */}
     <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
