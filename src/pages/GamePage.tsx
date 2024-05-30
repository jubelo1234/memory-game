import { useEffect, useState } from "react";
import Circle from "../components/Circle";

import anchor from "../assets/icons/anchor-solid.svg";
import atom from "../assets/icons/atom-solid.svg";
import bolt from "../assets/icons/bolt-lightning-solid.svg";
import bomb from "../assets/icons/bomb-solid.svg";
import book from "../assets/icons/book-solid.svg";
import carrot from "../assets/icons/carrot-solid.svg";
import cat from "../assets/icons/cat-solid.svg";
import crow from "../assets/icons/crow-solid.svg";
import fish from "../assets/icons/fish-solid.svg";
import flask from "../assets/icons/flask-solid.svg";
import wizard from "../assets/icons/hat-wizard-solid.svg";
import jet from "../assets/icons/jet-fighter-up-solid.svg";
import lightbulb from "../assets/icons/lightbulb-solid.svg";
import meteor from "../assets/icons/meteor-solid.svg";
import moon from "../assets/icons/moon-solid.svg";
import star from "../assets/icons/star-solid.svg";
import terminal from "../assets/icons/terminal-solid.svg";
import tree from "../assets/icons/tree-solid.svg";

import TimerCont from "../components/TimerCont";
import MultiScoreCard from "../components/MultiScoreCard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import SingleWinModal from "@/components/SingleWinModal";
import MultiWinModal from "@/components/MultiWinModal";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { motion, Variants } from "framer-motion";

export default function GamePage() {
  const {
    grid_size,
    number_of_players: players,
    theme,
  } = useSelector((state: RootState) => state.setup);

  const fourByFour: boolean = grid_size === 4 ? true : false;
  const Icons: boolean = theme === "icons" ? true : false;

  let numberCount: number;

  if (fourByFour) {
    numberCount = 8;
  } else {
    numberCount = 18;
  }

  const [numbersArray, setNumbersArray] = useState<number[]>([]);
  const [iconsArray, setIconsArray] = useState<string[]>([]);

  const [divWidth, setDivWidth] = useState<number>(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [openModal, setOpenModal] = useState<boolean>(false);

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

  useEffect(() => {
    const doubledNumbersArray = Array.from(Array(numberCount).keys()).flatMap(
      (number) => [number, number]
    );

    const shuffleArray = (array: number[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const scatteredNumbers = shuffleArray(doubledNumbersArray);

    setNumbersArray(scatteredNumbers);
  }, [numberCount]);

  useEffect(() => {
    const gridIcons: string[] = [
      anchor,
      atom,
      bolt,
      bomb,
      book,
      carrot,
      cat,
      crow,
      fish,
      flask,
      wizard,
      jet,
      lightbulb,
      meteor,
      moon,
      star,
      terminal,
      tree,
    ];

    const shuffleArray = (array: any[]) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const doubledIconsArray = gridIcons.flatMap((icon) => [icon, icon]);

    // Shuffle the array
    const scatteredDoubledIcons = shuffleArray(doubledIconsArray);

    let iconsToShow: string[];
    if (fourByFour) {
      iconsToShow = scatteredDoubledIcons.slice(0, 16);
    } else {
      iconsToShow = [...scatteredDoubledIcons];
    }

    setIconsArray(iconsToShow);
  }, [fourByFour]);

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
      {/* <SingleWinModal open={openModal} setModal={setOpenModal} /> */}
      <MultiWinModal open={openModal} setModal={setOpenModal} />
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
            {Icons
              ? iconsArray.map((data, index) =>
                  fourByFour ? (
                    <div key={index} className="size-full">
                      <Circle value={data} icons={true} />
                    </div>
                  ) : (
                    <div key={index} className="size-full">
                      <Circle value={data} icons={true} row={false} />
                    </div>
                  )
                )
              : numbersArray.map((data, index) =>
                  fourByFour ? (
                    <div key={index} className="size-full">
                      <Circle value={data} icons={false} />
                    </div>
                  ) : (
                    <div key={index} className="size-full">
                      <Circle value={data} icons={false} row={false} />
                    </div>
                  )
                )}
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
