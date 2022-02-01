// import logo from './logo.svg';
import "./App.css";
import Login from "./components/login/Login";
import AppBar from "./components/dashboard/Dashboard";

function App() {
  return (
    <div>
      <div>
        <AppBar />
        <Login />
      </div>
    </div>
  );
}

export default App;
