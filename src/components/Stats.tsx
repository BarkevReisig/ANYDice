
export default function Stats({ rollResultTotal, degreesTotal, rollCount, resetStats }) {
  let averageResult: number = rollResultTotal / rollCount;
  let averageDegrees: number = degreesTotal / rollCount;

  return(
    <div className="text-left mt-6">
      <p>Stats</p>
      <p>Average Roll: {averageResult.toFixed(2)}</p>
      <p>Average DOS: {averageDegrees.toFixed(2)}</p>
      <button onClick={resetStats} className="bg-gray-400 mt-2">Reset Stats</button>
    </div>
  );
}
