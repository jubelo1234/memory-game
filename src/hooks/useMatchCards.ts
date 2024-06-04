import {
  changePlayer,
  clearPickedIndex,
  deleteGridItem,
  matchedArray,
  scorePlayer,
  setCard1,
  setCard2,
  setMoves,
} from "@/state/setup/setupSlice";
import { RootState } from "@/state/store";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCheckWinner from "./useCheckWinner";

type UseMatchCards = {
  checkingMatch: boolean;
  handleCards: (cardData: string | number) => void;
};

const useMatchCards = (): UseMatchCards => {
  const [checkingMatch, setCheckingMatch] = useState<boolean>(false);
  const { card1, card2, currentPlayer } = useSelector(
    (state: RootState) => state.setup
  );
  const { checkWinner } = useCheckWinner();
  const dispatch = useDispatch();
  const timeoutIdRef = useRef<number | null>(null);

  const handleCards = (cardData: string | number) => {
    if (card1 === null) {
      dispatch(setCard1(cardData));
    } else {
      dispatch(setCard2(cardData));
    }
  };

  useEffect(() => {
    const handleReset = () => {
      dispatch(setCard1(null));
      dispatch(setCard2(null));
      dispatch(clearPickedIndex());
      dispatch(setMoves());
      checkWinner();
      setCheckingMatch(false);
    };

    const checkCardMatch = () => {
      if (card1 === card2) {
        timeoutIdRef.current = window.setTimeout(() => {
          dispatch(matchedArray(card1 as string | number));
          dispatch(deleteGridItem(card1 as string | number));
          dispatch(scorePlayer(currentPlayer));
          handleReset();
        }, 850);
      } else {
        timeoutIdRef.current = window.setTimeout(() => {
          dispatch(changePlayer());
          handleReset();
        }, 850);
      }
    };

    if (card1 !== null && card2 !== null) {
      setCheckingMatch(true);
      checkCardMatch();
    }

    return () => {
      if (timeoutIdRef.current !== null) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, [card1, card2, dispatch, checkWinner, currentPlayer]);

  return { checkingMatch, handleCards };
};

export default useMatchCards;
