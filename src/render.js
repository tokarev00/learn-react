import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state, addPost) => {
    root.render(
        <React.StrictMode>
         <BrowserRouter>
             <App state={state} addPost={addPost} />
         </BrowserRouter>
        </React.StrictMode>
    );
}
