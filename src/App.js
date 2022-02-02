// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/login/Login";
import AppBar from "./components/AppBar/AppBar";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {
  return (
    <div>
      <AppBar />

      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Login />
            </>
          }
        />
        <Route path="/dashboard" exact element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
