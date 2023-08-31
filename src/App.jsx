import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./views/Signup/SignUp";
import MarketPlace from "./views/Marketplace/Marketplace";
import AccountDetail from "./views/AccountDetail/AccountDetail";
import Proceed from "./views/Proceed/Proceed";
import AddCartModal from "./ui-elements/AddCartModal";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const fakeAccountList = [
  {
    type: "netflix",
    life_price: 1.63,
    six_months_price: 0.33,
  },
];
export const GoTop = ({ children }) => {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return children;
};
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <GoTop>
                <Home />
              </GoTop>
            }
          />
          <Route
            path="/signup"
            element={
              <GoTop>
                <SignUp />
              </GoTop>
            }
          />
          <Route
            path="/marketplace"
            element={
              <GoTop>
                <MarketPlace />
              </GoTop>
            }
          />
          <Route
            path="/accountDetail"
            element={
              <GoTop>
                <AccountDetail type={fakeAccountList[0].type} />
              </GoTop>
            }
          />
          <Route
            path="/proceed"
            element={
              <GoTop>
                <Proceed />
              </GoTop>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
