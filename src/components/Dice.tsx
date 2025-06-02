"use client"
import { useState } from "react";
import DiceRoller from "../components/DiceRoller.tsx";
import Stats from "../components/Stats.tsx";

export default function Dice() {
  const [rollValueTotal, setRollValueTotal] = useState();
  const [rollCount, setRollCount] = useState();

  return(
    <div className="grid grid-cols-1 justify-items-left lg:mx-42">
      <DiceRoller/>
      <Stats/>
    </div>
  );
}
