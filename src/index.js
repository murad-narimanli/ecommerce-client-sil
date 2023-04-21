import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import { createStore } from "redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
   
);

