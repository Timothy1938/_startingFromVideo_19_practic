import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Messages} from "./components/Messages/Messages";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./Settings/Settings";
import MessagesContainer from "./MessagesContainer";
import MyPostsContainer from "./MyPostsContainer";

/*type PropsType={
    dispatch:any
    state: any

}*/

function App(props: any) {
    debugger
    return (
        <BrowserRouter>
            <div className={'appClass'}>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path={'/profile/*'} element={<Profile/>}/>
                    <Route path={'/dialogs/*'} element={<MessagesContainer/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
