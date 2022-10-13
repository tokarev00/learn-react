import './App.css';
import Header from "./cmponents/Header/Header";
import NavBar from "./cmponents/NavBar/NavBar";
import Profile from "./cmponents/Profile/Profile";

const App = () => {
  return (
      <div className="app-wrapper">
          <Header />
          <NavBar />
          <Profile />
      </div>
  );
};

export default App;
