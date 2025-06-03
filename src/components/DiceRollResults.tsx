
export default function DiceRollResults({ rollResult, success, degrees, crit }) {
  // Don't display if no roll has been made.
  if (typeof rollResult !== "number") return null;

  let resultText = "" + rollResult + " | "; 

  if (crit) resultText = resultText + "Critical ";
  
  if (success) {
    resultText = resultText + "Success with " + degrees + " DoS";
  } else {
    resultText = resultText + "Failure with " + Math.abs(degrees) + " DoF";
  }

  return (
    <>
      {resultText}
    </>
  );
}
