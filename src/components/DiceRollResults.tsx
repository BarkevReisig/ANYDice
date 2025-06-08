type DiceRollResultsProps = {
  rollResult: number | undefined;
  success: boolean;
  degrees: number;
  crit: boolean;
}

export default function DiceRollResults({ rollResult, success, degrees, crit }: DiceRollResultsProps) {
  // Don't display if no roll has been made.
  if (typeof rollResult === "undefined") return null;

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
