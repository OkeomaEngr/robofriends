import React from 'react'; // react is a view library
import ReactDOM from 'react-dom/client';
import './index.css';// ./ means it is in the same directory
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello'; // created a hello component
import 'tachyons';


 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <Hello greeting={'Hello' + ' React Ninja'} /> // I can add properties such as greeting
 )
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
