import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
