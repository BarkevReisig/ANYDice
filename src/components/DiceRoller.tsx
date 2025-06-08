"use client";
import { useState } from "react";
import DiceRollResults from "./DiceRollResults";

type DiceRollerProps = {
  updateDiceTotals: (rollResult: number, degrees: number) => void;
}

export default function DiceRoller({ updateDiceTotals }: DiceRollerProps) {
  const [rollResult, setRollResult] = useState<number | undefined>(undefined);
  const [success, setSuccess] = useState<boolean>(false);
  const [degrees, setDegrees] = useState<number>(0);
  const [crit, setCrit] = useState<boolean>(false);
  
  function handleCheckSubmit(event: any/*React.FormEvent<HTMLFormElement>*/): void {
    event.preventDefault()
    // Ensure value is a number before making the skill check.
    if (event.target[0].value) makeCheck(event.target[0].value);
  }
  
  function rollDie(sides: number): number {
    return Math.floor(Math.random() * sides) + 1;
  }

  function makeCheck(rollUnderThreshold: number): void {
    // Checks max out at 95.
    if (rollUnderThreshold > 95) rollUnderThreshold = 95;
    
    // Roll 1d100 and compare to check threshold.
    // Rolls under or equal to check threshold succeed.
    // Success gives DoS = 10s digit, failure gives DoF = 10 - 10s digit.
    const rollResult: number = rollDie(100);
    let success: boolean = false;
    let degrees: number = 0;
    let crit: boolean = false;
    if (rollResult <= rollUnderThreshold) {
      success = true;
      degrees = Math.floor(rollResult/10);
    } else {
      success = false;
      degrees = Math.floor(rollResult/10 - 10);
    }

    // A roll where 10s and 1s digits match is a crit (10 and 0 are considered matching).
    if ([11, 22, 33, 44, 55, 66, 77, 88, 99, 100].includes(rollResult)) {
      crit = true;
    }

    // Set react state.
    setRollResult(rollResult);
    setSuccess(success);
    setDegrees(degrees);
    setCrit(crit);
    updateDiceTotals(rollResult, degrees);
  }

  return  (
    <div className="">
      <p className="">Enter the number to roll under:</p>
      <form onSubmit={handleCheckSubmit}>
        <input type="number" className="bg-gray-400 mt-3 mb-3 w-full"/> 
        <br/>
        <button type="submit" className="bg-gray-400">Roll Dice</button>
        <div className="float-right">
          <DiceRollResults rollResult={rollResult} success={success} degrees={degrees} crit={crit}/>
        </div>
      </form>
    </div>
  );
}
