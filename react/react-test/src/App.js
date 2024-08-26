import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CounterScreen from "./Screens/CounterScreen";
import NameListScreen from "./Screens/NameListScreen";
import GreetingScreen from "./Screens/GreetingScreen";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Greeting</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/names">Name List</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<GreetingScreen />} />
          <Route path="/counter" element={<CounterScreen />} />
          <Route path="/names" element={<NameListScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
