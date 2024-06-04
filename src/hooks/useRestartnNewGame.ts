import { newGame, restart } from "@/state/setup/setupSlice";
import { useDispatch } from "react-redux";

type useRestartNew = {
  restartGame: () => void;
  newGameSetup: () => void;
};

const useRestartNew = (): useRestartNew => {
  const dispatch = useDispatch();

  function restartGame() {
    dispatch(restart());
  }
  function newGameSetup() {
    dispatch(newGame());
  }

  return { newGameSetup, restartGame };
};

export default useRestartNew;
