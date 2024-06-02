import { useEffect, useState } from "react";
import Circle from "../components/Circle";

import TimerCont from "../components/TimerCont";
import MultiScoreCard from "../components/MultiScoreCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SingleWinModal from "@/components/SingleWinModal";
import MultiWinModal from "@/components/MultiWinModal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { motion, Variants } from "framer-motion";

import useSetGrid from "@/hooks/useSetGrid";
import useMatchCards from "@/hooks/useMatchCards";


export default function GamePage() {
  const { number_of_players: players, grid_size } = useSelector(
    (state: RootState) => state.setup
  );



  const fourByFour: boolean = grid_size === 4 ? true : false;
  const { gridArray } = useSetGrid();
  const { checkingMatch, handleCards } = useMatchCards();

  
  const [divWidth, setDivWidth] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      const width = document.getElementById("gameGrid")?.offsetWidth || 0;
      setDivWidth(width);
    };

    // Initial call to set width
    updateWidth();

    // Update width on window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const variants: Variants = {
    initial: {
      opacity: 0,
      y: "35%",
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <div className="w-full px-[5vw] bg-white">
      <SingleWinModal />
      <MultiWinModal />
      <motion.div
        key="home"
        variants={variants}
        initial="initial"
        animate="animate"
        className="max-w-[420px]  min-h-screen flex flex-col justify-between items-center  sm:max-w-[524px] tablet:max-w-[689px] laptop:max-w-[1110px] py-6 sm:py-9 xl:pt-9 xl:pb-6 mx-auto"
      >
        <div className="flex w-full justify-between items-center">
          <h1 className="text-2xl font-bold text-neutral-800 sm:text-[2.5rem]">
            memory
          </h1>

          {width < 640 && (
            <Dialog>
              <DialogTrigger>
                <button className="rounded-full  font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primaryy-400 hover:bg-primaryy-300 focus-visible:ring-primaryy-400 text-white py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem]">
                  Menu
                </button>
              </DialogTrigger>
              <DialogContent className="bg-gray-300  rounded-[0.6rem] max-w-[327px] h-[226px] w-[90vw] space-y-0 gap-1 justify-between flex flex-col  border-none p-6">
                <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primaryy-400 hover:bg-primaryy-300 focus-visible:ring-primary-400 text-white py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem]">
                  Restart
                </button>
                <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white focus-visible:ring-neutral-200 py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem] mt-3">
                  New Game
                </button>
                <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white focus-visible:ring-neutral-200 py-3 px-6 text-[1.125rem] sm:py-6 sm:text-[2rem] mt-3">
                  Resume Game
                </button>
              </DialogContent>
            </Dialog>
          )}

          <div className="hidden sm:flex justify-center items-center w-fit">
            <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primaryy-400 hover:bg-primaryy-300 focus-visible:ring-primaryy-400 text-white py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem] mr-4">
              Restart
            </button>
            <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-neutral-200 text-neutral-700 hover:bg-neutral-400 hover:text-white focus-visible:ring-neutral-200 py-2 px-[1.15rem] text-base sm:py-[0.9rem] sm:px-[1.5rem] sm:text-[1.25rem]">
              New Game
            </button>
          </div>
        </div>
        <div className="w-full mt-[2rem] sm:mt-[5rem] ">
          <div
            id="gameGrid"
            className={`w-full  max-w-[327px] sm:max-w-[460px] tablet:max-w-[540px]  aspect-square grid ${
              fourByFour
                ? "grid-cols-4 grid-rows-4 tablet:gap-4"
                : "grid-cols-6 grid-rows-6 tablet:gap-3"
            } gap-2 mx-auto `}
          >
            {gridArray.map((item, index) => (
              <div key={index} className="size-full">
                <Circle
                  handleCards={handleCards}
                  value={item}
                  icons={true}
                  index={index}
                  checking={checkingMatch}
                />
              </div>
            ))}
          </div>
        </div>

        {players > 1 ? (
          <div
            style={{ width: `${divWidth}px` }}
            className="sm:!w-full mt-6 min-[1000px]:mt-[3rem]"
          >
            <MultiScoreCard />
          </div>
        ) : (
          <div className="w-full mt-6 min-[1000px]:mt-[3rem]  max-w-[327px] sm:max-w-[460px] tablet:max-w-[540px]">
            <TimerCont />
          </div>
        )}
      </motion.div>
    </div>
  );
}
