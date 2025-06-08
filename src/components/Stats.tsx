type StatsProps = {
  rollResultTotal: number;
  degreesTotal: number;
  rollCount: number;
  resetStats: () => void;
}

export default function Stats({ rollResultTotal, degreesTotal, rollCount, resetStats }: StatsProps) {
  const averageResult: number = rollResultTotal / rollCount;
  const averageDegrees: number = degreesTotal / rollCount;

  function Stat({ text, value }: { text: string, value: number }) {
    const stat: string = text + (Number.isNaN(value) ? "" : value.toFixed(2));

    return(
      <p>{stat}</p>
    );
  }

  return(
    <div className="text-left mt-6">
      <p>Stats</p>
      <Stat text={"Roll Count: "} value={rollCount}/>
      <Stat text={"Average Roll: "} value={averageResult}/>
      <Stat text={"Average DOS: "} value={averageDegrees}/>
      <button onClick={resetStats} className="bg-gray-400 mt-2">Reset Stats</button>
    </div>
  );
}
