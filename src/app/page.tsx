import Dice from "../components/Dice.tsx"

export default function Home() {
  return (
    <div className="">
      <header className="text-center m-2">
        <h1 className="text-5xl">ANYDice</h1>
        <p className="text-lg">Dice roller for ANYScape</p>
        <br/>
      </header>
      <main>
        <Dice/>
      </main>
    </div>
  );
}
