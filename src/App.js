import './App.css';
import Header from "./cmponents/Header/Header";
import NavBar from "./cmponents/NavBar/NavBar";
import Profile from "./cmponents/Profile/Profile";
import Dialogs from "./cmponents/Dialogs/Dialogs";

const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <div className="app-wrapper-content">
              {/*<Profile />*/}
              <Dialogs />
          </div>
      </div>
  );
};

export default App;
