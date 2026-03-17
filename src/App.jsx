import React from "react";
import { Hero } from "./pages/hero";
import { Route, Routes } from "react-router-dom";
import Habits from "./pages/Habits";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/habits" element={<Habits />} />
      </Routes>
    </>
  );
}

export default App;
