import { useMemo, useState } from "react";

export default function useCountUp(end, start = 0, duration = 400) {
  const [count, setCount] = useState(start);
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(duration / frameRate);

  useMemo(() => {
    let currentNumber = start;
    const counter = setInterval(() => {
      const progress = ++currentNumber / totalFrame;
      setCount(Math.round(end * progress));

      if (progress === 1) {
        clearInterval(counter);
      }
    }, frameRate);
  }, [end, frameRate, start, totalFrame]);

  return count;
}
