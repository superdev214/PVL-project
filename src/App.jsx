import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./views/Login/Login";
import MarketPlace from "./views/Marketplace/Marketplace";
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/marketplace" element={<MarketPlace />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
