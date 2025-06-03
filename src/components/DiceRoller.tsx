import { useState } from "react";
import DiceRollResults from "./DiceRollResults";

export default function DiceRoller() {
  const [rollResult, setRollResult] = useState();
  const [success, setSuccess] = useState();
  const [degrees, setDegrees] = useState();
  const [crit, setCrit] = useState();
  
  function handleCheckSubmit(event): void {
    event.preventDefault()
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
    let rollResult: number = rollDie(100);
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
  }

  return  (
    <div className="">
      {console.log("rendered")}
      <p className="">Enter the number to roll under:</p>
      <form onSubmit={handleCheckSubmit}>
        <input type="text" className="bg-gray-400 mt-3 mb-3 w-full"/> 
        <br/>
        <input type="submit" value="Roll Dice" className="bg-gray-400"/>
        <div className="float-right">
          <DiceRollResults rollResult={rollResult} success={success} degrees={degrees} crit={crit}/>
        </div>
      </form>
    </div>
  );
}
