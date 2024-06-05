import { setGridItems } from "@/state/setup/setupSlice";
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

import { RootState } from "@/state/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type UseSetGrid = {
  gridArray: number[] | string[];
};

const useSetGrid = (): UseSetGrid => {
  const { grid_size, theme } = useSelector((state: RootState) => state.setup);
  const dispatch = useDispatch();

  const fourByFour: boolean = grid_size === 4 ? true : false;
  const Icons: boolean = theme === "icons" ? true : false;

  const numberCount: number = 18;
  let sliceCount: number;

  if (fourByFour) {
    sliceCount = 8;
  } else {
    sliceCount = 18;
  }

  const [gridArray, setGridArray] = useState<number[] | string[]>([]);

  useEffect(() => {
    const shuffleArray = <T>(array: T[]): T[] => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const numbersArray = Array.from(Array(numberCount).keys());
    const shuffledNumbers = shuffleArray(numbersArray);

    const doubledNumbersArray = shuffledNumbers
      .slice(0, sliceCount)
      .flatMap((number) => [number, number]);

    const scatteredNumbers = shuffleArray(doubledNumbersArray);

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

    const shuffledIcons = shuffleArray(gridIcons); //for the 4 by 4 grid
    const IconsToBeDoubled = shuffledIcons.slice(0, 8); //for the 4 by 4 grid
    const doubledIconsArray = gridIcons.flatMap((icon) => [icon, icon]);
    const fourByFourIcons = IconsToBeDoubled.flatMap((icon) => [icon, icon]);

    // Shuffle the array
    const scatteredDoubledIcons = shuffleArray(doubledIconsArray);
    const fourByFourShuffledIcons = shuffleArray(fourByFourIcons);

    let iconsToShow: string[];
    if (fourByFour) {
      iconsToShow = [...fourByFourShuffledIcons];
    } else {
      iconsToShow = [...scatteredDoubledIcons];
    }

    if (Icons) {
      setGridArray(iconsToShow);
      dispatch(setGridItems(iconsToShow));
    } else {
      setGridArray(scatteredNumbers);
      dispatch(setGridItems(scatteredNumbers));
    }
  }, [fourByFour, numberCount, Icons, dispatch, sliceCount]);

  return { gridArray };
};

export default useSetGrid;
