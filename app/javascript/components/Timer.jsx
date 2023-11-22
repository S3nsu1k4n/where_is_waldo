import React, { useState } from "react";
import useInterval from "../hooks/useInterval";

export default () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const to_string = num => {
    return String(num).padStart(2, '0');
  }

  useInterval(() => {
    setSeconds(seconds + 1);
    if (seconds >= 59){
      setSeconds(0);
      setMinutes(minutes + 1);
      if (minutes >= 59){
        setMinutes(0);
        setHours(hours + 1);
      }
    }
  }, 1000);

  return (
    <div className="flex justify-center items-center">
      <p>{to_string(hours)}:{to_string(minutes)}:{to_string(seconds)}</p>
    </div>
  )
}