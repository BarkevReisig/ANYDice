"use client";
import { useState } from "react";
import DiceRoller from "./DiceRoller";
import Stats from "./Stats";

function getStateFromStorage(key: string): number {
  const value: string | null = localStorage.getItem(key);
  return value ? parseInt(value) : 0;
}

export default function Dice() {
  const [rollResultTotal, setRollResultTotal] = useState<number>(getStateFromStorage("rollResultTotal"));
  const [degreesTotal, setDegreesTotal] = useState<number>(getStateFromStorage("degreesTotal"));
  const [rollCount, setRollCount] = useState<number>(getStateFromStorage("rollCount"));

  function updateDiceTotals(rollResult: number, degrees: number): void {
    const newRollResultTotal: number = rollResultTotal + rollResult;
    const newDegreesTotal: number = degreesTotal + degrees; 
    const newRollCount: number = rollCount + 1;
    setRollResultTotal(newRollResultTotal);
    setDegreesTotal(newDegreesTotal);
    setRollCount(newRollCount);
    localStorage.setItem("rollResultTotal", newRollResultTotal.toString());
    localStorage.setItem("degreesTotal", newDegreesTotal.toString());
    localStorage.setItem("rollCount", newRollCount.toString());
  }

  function resetStats(): void {
    setRollResultTotal(0);
    setDegreesTotal(0);
    setRollCount(0);
    localStorage.clear();
  }

  return(
    <div className="grid grid-cols-1 justify-items-left lg:mx-42 mx-1">
      <DiceRoller updateDiceTotals={updateDiceTotals}/>
      <Stats rollResultTotal={rollResultTotal} degreesTotal={degreesTotal} rollCount={rollCount} resetStats={resetStats}/>
    </div>
  );
}
