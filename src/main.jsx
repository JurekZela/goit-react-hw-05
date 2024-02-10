import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './components/App/App.jsx'
import { GlobalStyle } from './index-styled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    <GlobalStyle />
    </BrowserRouter>
  </React.StrictMode>,
)