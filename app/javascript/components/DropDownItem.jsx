import React from "react";

export default ({text, item_clicked}) => {
  return (
    <div>
      <p className="bg-yellow-800 opacity-90 border-2 cursor-pointer hover:bg-white" onClick={item_clicked}>{text}</p>
    </div>
  )
}