import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages";
import Login from "../pages/Login";
import Profile from "../pages/profile";
import ProfileEdit from "../pages/profile/edit";
import Register from "../pages/Register";
import SecurityQuestion from "../pages/SecurityQuestion";

import { ThemeContext, TokenContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";

axios.defaults.baseURL =
"https://live-event.social/";

export default function AppRouter() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("light");
  const themeMode = useMemo(() => ({ theme, setTheme }), [theme]);
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(() => ({ token, setToken }), [token]);
  
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(reduxAction("IS_LOGGED_IN", true));
    } else {
      dispatch(reduxAction("IS_LOGGED_IN", false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={jwtToken}>
    <ThemeContext.Provider value={themeMode}>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/" /> : <Login />}
            />
          <Route 
              path="/profile" 
              element={isLoggedIn ? <Navigate to="/profile" /> : <Login />}></Route>
          <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />}></Route>
          <Route path="/security" element={<SecurityQuestion />}></Route>
        </Routes>
      </Router>
    </ThemeContext.Provider>
    </TokenContext.Provider>
  );
}
