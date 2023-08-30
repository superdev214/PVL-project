import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./views/Login/SignUp";
import MarketPlace from "./views/Marketplace/Marketplace";
import AccountDetail from "./views/AccountDetail/AccountDetail";
const fakeAccountList = [
  {
    type: "netflix",
    life_price: 1.63,
    six_months_price: 0.33,
  },
];
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/marketplace" element={<MarketPlace />} />
          <Route
            path="/accountDetail"
            element={<AccountDetail type={fakeAccountList[0].type} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
