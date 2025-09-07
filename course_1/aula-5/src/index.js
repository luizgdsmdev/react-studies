import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './global';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/react-studies/aula-5/">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <GlobalStyles />
//     <App />
//   </React.StrictMode>
// );
