// import React from 'react'; // react is a view library
// import ReactDOM from 'react-dom/client'; is for the webpage rendering
// import './index.css';// ./ means it is in the same directory
// //import App from './App';
// import reportWebVitals from './reportWebVitals';
// import Hello from './Hello'; // created a hello component
// import 'tachyons'; tachyons is a css package


//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(
//   <Hello greeting={'Hello' + ' React Ninja'} /> // I can add properties such as greeting
//  )
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
// import Card from './Card'; no longer being used here
// import CardList from './CardList'; // no longer being used here
import reportWebVitals from './reportWebVitals';
import 'tachyons';
// import { robots } from './robots'; //destructuring robots cause its not a default , no longer being used here

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <App />
)
reportWebVitals();
