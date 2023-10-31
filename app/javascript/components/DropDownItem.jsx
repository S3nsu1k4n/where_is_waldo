import React from "react";

export default ({text, item_clicked}) => {
  return (
    <div>
      <p className="border-2 " onClick={item_clicked}>{text}</p>
    </div>
  )
}