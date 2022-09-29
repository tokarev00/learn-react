import './App.css';
import Header from "./cmponents/Header";
import NavBar from "./cmponents/NavBar";
import Profile from "./cmponents/Profile";

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
