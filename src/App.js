import './App.css';
import Header from "./cmponents/Header/Header";
import NavBar from "./cmponents/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Dialogs from "./cmponents/Dialogs/Dialogs";
import Profile from "./cmponents/Profile/Profile";

const App = (props) => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
              <Routes>
                  <Route path="/dialogs" element={<Dialogs dispatch={props.dispatch} state={props.state.dialogsPage}/>} />
                  <Route path="/" element={<Profile dispatch={props.dispatch} profilePage={props.state.profilePage} />} />
              </Routes>
          </div>
      </div>
  );
};

export default App;
