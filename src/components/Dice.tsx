"use client"
import { useState } from "react";
import DiceRoller from "./DiceRoller";
import Stats from "./Stats";

export default function Dice() {
  const [rollValueTotal, setRollValueTotal] = useState();
  const [rollCount, setRollCount] = useState();

  return(
    <div className="grid grid-cols-1 justify-items-left lg:mx-42 mx-1">
      <DiceRoller/>
      <Stats/>
    </div>
  );
}
