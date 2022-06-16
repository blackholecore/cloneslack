import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Header></Header>}>
             
            </Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
