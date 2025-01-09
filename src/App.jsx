import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./style/main.scss";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
