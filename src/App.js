import './App.css';
import Header from "./cmponents/Header/Header";
import NavBar from "./cmponents/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./cmponents/Profile/Profile";
import React from "react";
import DialogsContainer from "./cmponents/Dialogs/DialogsContainer";
const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
              <Routes>
                  <Route path="/dialogs" element={<DialogsContainer/>} />
                  <Route path="/" element={<Profile/>} />
              </Routes>
          </div>
      </div>
  );
};

export default App;
