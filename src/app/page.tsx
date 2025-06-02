import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <header className="text-center m-2">
        <h1 className="text-5xl">ANYDice</h1>
        <p className="text-lg">Dice roller for ANYScape</p>
        <br/>
      </header>
      <main className="grid grid-cols-1 justify-items-left lg:mx-42">
        <div id="Dice Roller" className="">
          <p className="">Enter number to roll under and under and under</p>
          <form>
            <input type="text" className="bg-gray-400 mt-3 mb-3 w-full"/> 
            <br/>
            <input type="submit" value="Roll Dice" className="bg-gray-400"/>
          </form>
        </div>
        <div id="Stats" className="text-left">
          <p>Stats</p>
          <p>Average Number/Roll:</p>
          <p>Average DOS/Roll:</p>
        </div>
      </main>
    </div>
  );
}
