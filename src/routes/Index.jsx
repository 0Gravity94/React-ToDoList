import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import DetailActivity from "../pages/DetailActivity";

function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/detail/:id_activity" element={<DetailActivity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
