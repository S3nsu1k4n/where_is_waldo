import React, { useEffect, useState } from "react";
import CharactersDisplay from "./CharactersDisplay";
import Timer from "./Timer";
import ClearScreen from "./ClearScreen";


export default ({filenames, finished}) => {
  
  const [openDialog, setOpenDialog] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    setOpenDialog(finished);
  }, [finished])

  return (
    <div className="grid grid-cols-2 bg-orange-800">
      {(openDialog && finished) && <ClearScreen setOpen={setOpenDialog} elapsedSeconds={elapsedSeconds}/>}
      <CharactersDisplay filenames={filenames}/>
      <Timer elapsedSeconds={elapsedSeconds} setElapsedSeconds={setElapsedSeconds} finished={finished}/>
    </div>
  )
}