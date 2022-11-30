import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = (state, addPost, updateNewPostText) => {
    root.render(
        <React.StrictMode>
         <BrowserRouter>
             <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
         </BrowserRouter>
        </React.StrictMode>
    );
}
