import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home-page";
import English from "./pages/English-page"
// Summer from "./pages/summerCamp-page"
import { useEffect } from "react";
import EducationalBoxing from "./pages/EducationalBoxing-page";

export default function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
	  <Route path="/english" element={<English />} />
	  <Route path="/boxing" element={<EducationalBoxing />} />
    </Routes>
  );
}
