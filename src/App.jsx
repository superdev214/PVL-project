import logo from "./logo.svg";
import "./App.css";
import Home from "./views/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignUp from "./views/Auth/Signup/SignUp";
import MarketPlace from "./views/Marketplace/Marketplace";
import AccountDetail from "./views/AccountDetail/AccountDetail";
import Proceed from "./views/Proceed/Proceed";
import AddCartModal from "./ui-elements/AddCartModal";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import StandardLayout from "./layouts/StandardLayout";
import UserLayout from "./layouts/UserLayout";
import Login from "./views/Auth/Login/Login";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const fakeAccountList = [
  {
    type: "netflix",
    life_price: 1.63,
    six_months_price: 0.33,
  },
];
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <StandardLayout>
              <Home />
            </StandardLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <StandardLayout>
              <SignUp />
            </StandardLayout>
          }
        />
        <Route
          path="/login"
          element={
            <StandardLayout>
              <Login />
            </StandardLayout>
          }
        />
        <Route
          path="/marketplace"
          element={
            <UserLayout>
              <MarketPlace />
            </UserLayout>
          }
        />
        <Route
          path="/accountDetail"
          element={
            <UserLayout>
              <AccountDetail type={fakeAccountList[0].type} />
            </UserLayout>
          }
        />
        <Route
          path="/proceed"
          element={
            <UserLayout>
              <Proceed />
            </UserLayout>
          }
        />
      </Routes>
    </>
  );
}

export default App;
