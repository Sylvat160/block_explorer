import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div className="relative sm:-8 p-4  min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
