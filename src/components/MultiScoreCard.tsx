import ScoreCard from "./ScoreCard";


export default function MultiScoreCard() {
  const no_of_players = 4
  const numbersArray = Array.from({ length: no_of_players }, (_, index) => index);
  return (
    <div className="w-full grid grid-cols-4 gap-[2%] *:w-full">
      {numbersArray.map((item, index) => <ScoreCard key={index} player={item + 1}/>) }
        
    </div>
  )
}
