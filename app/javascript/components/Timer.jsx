import React, { useEffect, useState } from "react";
import useInterval from "../hooks/useInterval";


export default ({elapsedSeconds, setElapsedSeconds, finished}) => {

  const to_string = num => String(num).padStart(2, '0');

  const time_string = () => {
    const hours = Math.floor(elapsedSeconds / 3600);
    let remaining_seconds = elapsedSeconds % 3600;
    const minutes = Math.floor(remaining_seconds / 60);
    remaining_seconds = remaining_seconds % 60;
    const seconds = remaining_seconds;
    return `${to_string(hours)}:${to_string(minutes)}:${to_string(seconds)}`;
  }

  useInterval(() => {
    setElapsedSeconds(elapsedSeconds += 1);
  }, finished ? null : 1000);
  

  return (
      <div className="flex justify-center items-center text-white text-xl">
        <p>{time_string()}</p>
      </div>
  )
}