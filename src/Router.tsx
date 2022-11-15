import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { HomePage, SubPage } from "./pages";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
