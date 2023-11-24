import React, { useEffect } from "react";
import ClearForm from "./ClearForm";

export default ({setOpen, elapsedSeconds}) => {
  const to_string = num => String(num).padStart(2, '0');

  const time_string = () => {
    const hours = Math.floor(elapsedSeconds / 3600);
    let remaining_seconds = elapsedSeconds % 3600;
    const minutes = Math.floor(remaining_seconds / 60);
    remaining_seconds = remaining_seconds % 60;
    const seconds = remaining_seconds;
    return `${to_string(hours)}:${to_string(minutes)}:${to_string(seconds)}`;
  }

  return (
    <dialog open className="z-50 flex h-screen w-screen text-center justify-center items-center bg-indigo-600 bg-opacity-50 text-white">
      <div className="p-5 bg-indigo-600 bg-opacity-70 border-2 rounded-lg">
        <p className="text-2xl p-1">Congratulations!</p>
        <p>You found all characters</p>
        <p className="pb-2">Time needed: {time_string()}</p>
        <ClearForm onClick={(e) => {setOpen(false)}} time_finished={time_string()}/>
      </div>
    </dialog>
  )
}