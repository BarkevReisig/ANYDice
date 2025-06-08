"use client"
import { useState } from "react";
import { useLocalStorage } from "react-use";
import DiceRoller from "./DiceRoller";
import Stats from "./Stats";

export default function Dice() {
  const [rollResultTotal, setRollResultTotal] = useState<number>(0);
  const [degreesTotal, setDegreesTotal] = useState<number>(0);
  const [rollCount, setRollCount] = useState<number>(0);

  function updateDiceTotals(rollResult: number, degrees: number): void {
    const newRollResultTotal = rollResultTotal + rollResult;
    const newDegreesTotal = degreesTotal + degrees; 
    const newRollCount = rollCount + 1;
    setRollResultTotal(newRollResultTotal);
    setDegreesTotal(newDegreesTotal);
    setRollCount(newRollCount);
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
