import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginForm } from "./Components/loginForm/LoginForm";
import { MainPage } from "./Components/mainPage/MainPage";
import { Analytics } from "./Components/analytics/Analytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={LoginForm} />
        <Route path="/dashboard" Component={MainPage} />
        <Route path="/analytics" Component={Analytics} />
      </Routes>
    </Router>
  );
}

export default App;
