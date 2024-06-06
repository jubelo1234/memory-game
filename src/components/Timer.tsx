import { setSeconds, setStopTimer, setTime } from "@/state/setup/setupSlice";
import { RootState } from "@/state/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Timer: React.FC = () => {
  const { gameEnd, seconds, stopTimer } = useSelector(
    (state: RootState) => state.setup
  );
  const dispatch = useDispatch();
  // const [seconds, setSeconds] = useState<number>(stateSeconds);

  //   stop timer state should come from redux state
  // const [stopTimer, setStopTimer] = useState<boolean>(false);

  useEffect(() => {
    if (!stopTimer) {
      const timer = setInterval(() => {
        dispatch(setSeconds());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [stopTimer, dispatch]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    if (gameEnd) {
      dispatch(setTime(formatTime(seconds)));
      dispatch(setStopTimer(true));
    } else {
      dispatch(setStopTimer(false));
    }
  }, [gameEnd, dispatch, seconds]);

  return (
    <div className="flex flex-col items-center rounded bg-neutral-200 pt-[0.4rem] pb-[0.35rem] sm:rounded-xl md:flex-row md:justify-between md:pt-[1.55rem] md:pb-[1.4rem] md:pl-[1.3rem] md:pr-[1.5rem]">
      <span className="font-bold text-neutral-500 sm:text-[1.125rem]">
        Time
      </span>
      <span className=" text-[1.5rem] font-bold text-neutral-800 sm:leading-8 sm:text-[2rem]  timer">
        {formatTime(seconds)}
      </span>
    </div>
  );
};

export default Timer;
