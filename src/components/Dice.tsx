"use client"
import { useState } from "react";
import DiceRoller from "./DiceRoller";
import Stats from "./Stats";

export default function Dice() {
  const [rollResultTotal, setRollResultTotal] = useState(0);
  const [degreesTotal, setDegreesTotal] = useState(0);
  const [rollCount, setRollCount] = useState(0);

  function updateDiceTotals(rollResult: number, degrees: number): void {
    setRollResultTotal(rollResultTotal + rollResult);
    setDegreesTotal(degreesTotal + degrees);
    setRollCount(rollCount + 1);
  }

  function resetStats(): void {
    setRollResultTotal(0);
    setDegreesTotal(0);
    setRollCount(0);
  }

  return(
    <div className="grid grid-cols-1 justify-items-left lg:mx-42 mx-1">
      <DiceRoller updateDiceTotals={updateDiceTotals}/>
      <Stats rollResultTotal={rollResultTotal} degreesTotal={degreesTotal} rollCount={rollCount} resetStats={resetStats}/>
    </div>
  );
}
