import React from "react";
import DropDownItem from "./DropDownItem";

export default ({x_offset=0, y_offset=0, coords, item_clicked, options=[]}) => {
  const {x, y} = coords;
  const style = {
    position: 'absolute',
    top: `${y + y_offset}px`,
    left: `${x + x_offset}px`,
    display: 'grid'
  }

  return (
    <div style={style}>
      {options.map((option) => {return <DropDownItem key={option} text={option} item_clicked={item_clicked} />}) }
    </div>
  )
}