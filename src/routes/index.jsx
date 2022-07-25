import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages";
import Login from "../pages/Login";

import { ThemeContext } from "../utils/context";
import { reduxAction } from "../utils/redux/actions/action";

export default function AppRouter() {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState("light");
  const themeMode = useMemo(() => ({ theme, setTheme }), [theme]);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={themeMode}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
