import { useState, useEffect } from "react";

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState<number>(0);

//   stop timer state should come from redux state
  const [stopTimer, setStopTimer] = useState<boolean>(false);

  useEffect(() => {
    if (!stopTimer) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [stopTimer]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div>
      <h2>Timer</h2>
      <p>{formatTime(seconds)}</p>
      
    </div>
  );
};

export default Timer;
