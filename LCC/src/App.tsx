import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home-page";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
