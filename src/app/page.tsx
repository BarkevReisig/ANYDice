import Dice from "../components/Dice";
import NoSsr from "../components/NoSSR";

export default function Home() {
  return (
    <>
      <header className="text-center m-2">
        <h1 className="text-5xl">ANYDice</h1>
        <p className="text-lg">Dice roller for ANYScape</p>
        <br/>
      </header>
      <main>
        <NoSsr><Dice/></NoSsr>
      </main>
    </>
  );
}
