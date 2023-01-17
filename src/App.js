import './App.css';
import Header from "./cmponents/Header/Header";
import NavBar from "./cmponents/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./cmponents/Profile/ProfileContainer";
import DialogsContainer from "./cmponents/Dialogs/DialogsContainer";
import UsersContainer from "./cmponents/Users/UsersContainer";
import React from "react";
const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
              <Routes>
                  <Route path="/dialogs/" element={<DialogsContainer/>} />
                  <Route path="/users/" element={<UsersContainer/>} />
                  <Route path={'/profile/'} element={<Profile/>} >
                      <Route path=":userId" element={<Profile/>} />
                  </Route>
              </Routes>
          </div>
      </div>
  );
};

export default App;
