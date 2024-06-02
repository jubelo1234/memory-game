import {
  changePlayer,
  clearPickedIndex,
  deleteGridItem,
  matchedArray,
  setCard1,
  setCard2,
} from "@/state/setup/setupSlice";
import { RootState } from "@/state/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCheckWinner from "./useCheckWinner";

type UseMatchCards = {
  checkingMatch: boolean;
  handleCards: (cardData: string | number) => void;
};

const useMatchCards = (): UseMatchCards => {
  const [checkingMatch, setCheckingMatch] = useState<boolean>(false);
  const { card1, card2 } = useSelector((state: RootState) => state.setup);
  const { checkWinner } = useCheckWinner();
  const dispatch = useDispatch();

  function handleCards(cardData: string | number) {
    if (card1 === null) {
      dispatch(setCard1(cardData));
    } else {
      dispatch(setCard2(cardData));
    }
  }

  useEffect(() => {
    function handleReset() {
      dispatch(setCard1(null));
      dispatch(setCard2(null));
      dispatch(clearPickedIndex());
      checkWinner();
      setCheckingMatch(false);
    }

    function checkCardMatch() {
      if (card1 === card2) {
        setTimeout(() => {
          dispatch(matchedArray(card1 as string | number));
          dispatch(deleteGridItem(card1 as string | number));
          handleReset();
        }, 950);
      } else {
        setTimeout(() => {
          dispatch(changePlayer());
          handleReset();
        }, 950);
      }
    }

    if (card1 !== null && card2 !== null) {
      setCheckingMatch(true);
      checkCardMatch();
    }
  }, [card1, card2, dispatch, checkWinner]);

  return { checkingMatch, handleCards };
};

export default useMatchCards;
