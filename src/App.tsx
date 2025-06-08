import { useState } from "react";
import "./App.css";
import Dice from "./components/Dice";

function App() {

  return (
    <>
      <header className="text-center m-2">
        <h1 className="text-5xl">ANYDice</h1>
        <p className="text-lg">Dice roller for ANYScape</p>
        <br/>
      </header>
      <main>
        <Dice/>
      </main>
    </>
  )
}

export default App
