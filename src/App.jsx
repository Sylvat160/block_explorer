import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";

function App() {
  return (
    <>
      <ConnectButton className='bg-white' />
      <h1 className="text-3xl font-bold underline text-red-600">
        Hello world!
      </h1>
    </>
  );
}

export default App;
