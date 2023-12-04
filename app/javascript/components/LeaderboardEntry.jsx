import React from "react";

export default ({index, name, time_finished, created_at, header}) => {
  const style = header ? "grid grid-cols-4 text-center bg-slate-300 mt-1 ml-20 mr-20 rounded-xl" : "grid grid-cols-4 text-center bg-orange-300 mt-1 ml-20 mr-20 rounded-xl hover:bg-slate-200";
  return (
    <div className={style}>
      <p>{index}</p>
      <p>{name}</p>
      <p>{time_finished}</p>
      <p>{created_at}</p>
    </div>
  )
}