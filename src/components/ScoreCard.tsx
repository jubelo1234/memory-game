type ScoreCardType = {
  player: number;
};

export default function ScoreCard({ player }: ScoreCardType) {
  
  const active: number = 2;
  const activeCard: boolean = player === active;
 

  return (
    <div className="">
      <div
        className={` ${
          activeCard ? "bg-primaryy-400" : "bg-neutral-200"
        }  rounded-[0.25rem] sm:rounded-xl relative w-full flex flex-col xl:flex-row xl:justify-between xl:items-center  items-center sm:items-start py-[0.4rem] sm:pt-[0.65rem] sm:pb-[0.7rem] xl:py-[1.5rem] sm:px-[1rem] xl:px-[1.35rem]`}
      >
        <span
          className={`font-bold z-10 sm:text-[0.9375rem] ${
            activeCard ? "text-white" : "text-neutral-500"
          } xl:text-[1.125rem]`}
        >
          <span className="sm:hidden">P{player}</span>
          <span className="hidden sm:inline">Player {player}</span>
        </span>
        <span
          className={` ${
            activeCard ? "text-white" : "text-neutral-800"
          } text-[1.5rem] xl:leading-8 font-bold transition-colors duration-[25ms] ease-linear  sm:text-[1.5rem]  xl:text-[2rem]1`}
        >
          0
        </span>
        {activeCard && <div className="absolute w-4 sm:w-6 aspect-square bg-primaryy-400 top-[-8px] sm:top-[-12px] z-[1] left-1/2 -translate-x-1/2  transform rotate-45"></div> }
      </div> 
      {activeCard && (
        <p className="mt-5 hidden text-center text-[0.8125rem] text-sm font-bold uppercase tracking-[0.375em] text-neutral-800 transition-opacity 2xl:block opacity-100">
          Current turn
        </p>
      )}
    </div>
  );
}
