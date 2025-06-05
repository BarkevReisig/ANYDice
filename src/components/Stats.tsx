
export default function Stats({ rollResultTotal, degreesTotal, rollCount, resetStats }:
  { rollResultTotal: number, degreesTotal: number, rollCount: number, resetStats: () => void }) {
  let averageResult: number = rollResultTotal / rollCount;
  let averageDegrees: number = degreesTotal / rollCount;

  return(
    <div className="text-left mt-6">
      <p>Stats</p>
      <p>Roll Count: {rollCount}</p>
      <p>Average Roll: { Number.isNaN(averageResult) ? "" : averageResult.toFixed(2) }</p>
      <p>Average DOS: { Number.isNaN(averageDegrees) ? "" : averageDegrees.toFixed(2) }</p>
      <button onClick={resetStats} className="bg-gray-400 mt-2">Reset Stats</button>
    </div>
  );
}
