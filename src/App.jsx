import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Navbar, Footer } from "./components";
import { Home, Blockchain, Developers, NFTs, Tokens } from './pages';

function App() {
  return (
    <div >
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/Nfts" element={<NFTs />} />
        <Route path="/tokens" element={<Tokens />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
