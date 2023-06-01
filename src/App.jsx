import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Navbar, Footer } from "./components";
import { Home, Blockchain, Developers, NFTs, Tokens, Block, Address, Transaction } from './pages';

function App() {
  return (
    <div className=" text-gray-300 overflow-hidden">
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/Nfts" element={<NFTs />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/block/:blockNumber" element={<Block />} />
        <Route path="/address/:address" element={<Address />} />
        <Route path="/transaction/:transactionHash" element={<Transaction />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
