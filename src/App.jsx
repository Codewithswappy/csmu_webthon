import React from "react";
import { Hero } from "./pages/hero";
import { Route, Routes } from "react-router-dom";
import Habits from "./pages/Habits";
import GrootMessage from "./pages/GrootMessage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/groot-message" element={<GrootMessage />} />
      </Routes>
    </>
  );
}

export default App;
