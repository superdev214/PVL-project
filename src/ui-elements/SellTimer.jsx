import React, { useEffect, useRef, useState } from "react";

const SellTimer = (props) => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("59 : 59 : 59");
  const [hr, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(total / 1000 / 60 / 60);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const clearTimer = (e) => {
    setTimer("59:59:59");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 216000);
    return deadline;
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    setHour(hours);
    setMin(minutes);
    setSec(seconds);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          "  : " +
          (minutes > 9 ? minutes : "0" + minutes) +
          "  : " +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(Ref.current);
    }
  };

  useEffect(() => {
    const deadline = getDeadTime();
    clearTimer(deadline);

    // Clean up the interval when the component is unmounted
    return () => {
      if (Ref.current) clearInterval(Ref.current);
    };
  }, []);

  return (
    <>
      <div className="user-timer p-[30px] md:min-w-[295px]">
        <h1 className="font-mono text-sm font-normal text-white leading-[13px] mb-2.5 sm:text-base">
          Sale ends in:
        </h1>
        <div className="grid grid-cols-3 gap-y-2">
          <h1 className="text-white font-mono text-[38px] font-bold leading-[46px] text-center">
            {hr}
            <span className="float-right">:</span>
          </h1>
          <h1 className="text-white font-mono text-[38px] font-bold leading-[46px] text-center">
            {min}
            <span className="float-right">:</span>
          </h1>
          <h1 className="text-white font-mono text-[38px] font-bold leading-[46px] text-center">
            {sec}
          </h1>
          <span className="font-mono text-sm font-normal leading-[13px] text-center text-white">Hours</span>
          <span className="font-mono text-sm font-normal leading-[13px] text-center text-white">Minutes</span>
          <span className="font-mono text-sm font-normal leading-[13px] text-center text-white">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default SellTimer;
