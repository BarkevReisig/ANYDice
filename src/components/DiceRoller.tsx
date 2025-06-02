
export default function DiceRoller() {
  return  (
    <div className="">
      <p className="">Enter number to roll under and under and under</p>
      <form>
        <input type="text" className="bg-gray-400 mt-3 mb-3 w-full"/> 
        <br/>
        <input type="submit" value="Roll Dice" className="bg-gray-400"/>
      </form>
    </div>
  );
}
