// import jet from "../assets/icons/jet-fighter-up-solid.svg";

import { setPickedIndex } from "@/state/setup/setupSlice";
import { RootState } from "@/state/store";

import { useDispatch, useSelector } from "react-redux";

type CircleProps = {
  icons?: boolean;
  value: string | number;

  index: number;
  checking: boolean;

  handleCards: (cardData: string | number) => void;
};

export default function Circle({
  value,
  icons = true,

  index,
  checking,

  handleCards,
}: CircleProps) {
  const { matchedItems: matchedCards, grid_size } = useSelector(
    (state: RootState) => state.setup
  );

  const row: boolean = grid_size === 4 ? true : false;

  const { card1, card2, pickedCardIndex } = useSelector(
    (state: RootState) => state.setup
  );
  const dispatch = useDispatch();

  const showCard: boolean =
    pickedCardIndex.includes(index) && (value === card1 || value === card2);

  const matched: boolean = matchedCards.includes(value);

  function handleClick() {
    handleCards(value);
    dispatch(setPickedIndex(index));
  }

  const disableButton: boolean = showCard || checking;

  return (
    <button
      onClick={handleClick}
      disabled={disableButton}
      className={`size-full rounded-[100%] relative transition-all duration-200 ease-in-out disabled:cursor-default overflow-hidden ${
        matched ? "bg-neutral-300" : "bg-primaryy-400"
      }   flex justify-center items-center`}
    >
      {icons ? (
        row ? (
          <img src={value as string} alt="4" className=" max-h-9 md:max-h-12" />
        ) : (
          <img
            src={value as string}
            alt="icon"
            className=" max-h-5  sm:max-h-7 md:max-h-9"
          />
        )
      ) : row ? (
        <span className="text-white text-[2.5rem] sm:text-[3.5rem] font-bold transition-opacity opacity-100">
          {value}
        </span>
      ) : (
        <span className="text-white text-2xl sm:text-[2.75rem] font-bold transition-opacity opacity-100">
          {value}
        </span>
      )}

      <div
        className={` absolute size-full top-0 left-0 bg-neutral-700 transition-all duration-200 ease-in-out hover:bg-neutral-400 ${
          showCard || matched ? "opacity-0" : "opacity-0"
        }`}
      ></div>
    </button>
  );
}
