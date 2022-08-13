import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "./redux/redux-store";

import {Provider} from "react-redux";
//import {addMessage, addPost, state, store, subscribe, updateNewMessageText, updateNewPostText} from "./state";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const rerenderEntireTree=(state:any)=>{root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)};

//export default

    //addPost("a")
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App/>
        </Provider>
    </React.StrictMode>
);


/*store.subscribe(()=>{
    debugger
    rerenderEntireTree(store.getState())})*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


