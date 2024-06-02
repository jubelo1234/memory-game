import { setGameEnd } from "@/state/setup/setupSlice";
import { RootState } from "@/state/store";

import { useDispatch, useSelector } from "react-redux";

type UseCheckWinner = {
  checkWinner: () => void;
};

const useCheckWinner = (): UseCheckWinner => {
  //   const [isThereAWinner, setIsThereAWinner] = useState<boolean>(false);
  const { gridItems } = useSelector(
    (state: RootState) => state.setup
  );
  const dispatch = useDispatch();

  function handleGameEnd() {
    dispatch(setGameEnd());
  }

  function checkWinner() {
    
    if (gridItems.length <= 2) {
      handleGameEnd();
    }
  }

  return { checkWinner };
};

export default useCheckWinner;
