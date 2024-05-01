import ScoreCard from "./ScoreCard";

export default function MultiScoreCard() {
  const no_of_players: number = 4;

  return (
    <div
      className={`w-full grid gap-[6.5%] sm:gap-[2.3%]  *:w-full ${
        no_of_players === 2
          ? "grid-cols-2 xl:px-[10rem]"
          : no_of_players === 3
          ? "grid-cols-3"
          : "grid-cols-4"
      }`}
    >
      {Array.from({ length: no_of_players }, (_, index) => (
        <ScoreCard key={index} player={index + 1} />
      ))}
    </div>
  );
}
