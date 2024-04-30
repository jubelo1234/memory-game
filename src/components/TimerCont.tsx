import { useState } from "react";
import Timer from "./Timer";

export default function TimerCont() {
    const [moves, setMoves] = useState<number>(3);
  return (
    <div className="grid grid-cols-2 gap-[1.4rem] sm:gap-[1.7rem] ">
      <Timer />
      <div className="flex flex-col items-center rounded bg-neutral-200 pt-[0.4rem] pb-[0.35rem] sm:rounded-xl md:flex-row md:justify-between md:pt-[1.55rem] md:pb-[1.4rem] md:pl-[1.3rem] md:pr-[1.5rem]">
        <span className="font-bold text-neutral-500 sm:text-[1.125rem]">Moves</span>
        <span className=" text-[1.5rem] font-bold text-neutral-800 sm:leading-8  sm:text-[2rem] ">
          {moves}
        </span>
      </div>
    </div>
  );
}
