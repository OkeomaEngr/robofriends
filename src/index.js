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
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { robots } from './robots'; //destructuring robots cause its not a default

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <Card id={robots[0].id} name={ robots[0].name} email={robots[0].email} username={robots[0].username} />
        <Card id={robots[1].id} name={ robots[1].name} email={robots[1].email} username={robots[1].username} />
        <Card id={robots[2].id} name={ robots[2].name} email={robots[2].email} username={robots[2].username} />
        <Card id={robots[3].id} name={ robots[3].name} email={robots[3].email} username={robots[3].username} />
        <Card id={robots[4].id} name={ robots[4].name} email={robots[4].email} username={robots[4].username} />
    </div>
)
reportWebVitals();
