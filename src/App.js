import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import "./App.css";
import { Fragment } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
