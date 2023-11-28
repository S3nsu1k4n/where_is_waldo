import React from "react";

export default ({name, time_finished, created_at}) => {
  return (
    <div className="grid grid-cols-3 text-center">
      <p>{name}</p>
      <p>{time_finished}</p>
      <p>{created_at}</p>
    </div>
  )
}