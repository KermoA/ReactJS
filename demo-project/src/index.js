import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// const element=React.createElement("h1", null, "Welcome to React Programming World...");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

const element=React.createElement("div", {className:"testClass"},
  React.createElement("h1", null, "Welcome to React Programming"),
  React.createElement("h1", null, "Understanding the Creation of Elements"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// const element = <h1 className='testClass'>Welcome to React Programming...</h1>;
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const newElement = <h1 className='testClass'>Understanding the Creation of Elements in React...</h1>;
// const appRoot = document.getElementById('app');
// if (appRoot) {
//   const appRootContainer = ReactDOM.createRoot(appRoot);
//   appRootContainer.render(newElement);
// }

// const element=(
//   <div className='testClass'>
//     <h1>Welcome to React Programming...</h1>
//     <h1>Understanding the Creation of React Elements...</h1>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

reportWebVitals();
