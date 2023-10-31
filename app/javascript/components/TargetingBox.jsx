import React from "react";

export default ({width, height, coords}) => {
  const {x, y} = coords;

  const style = {
    position: 'absolute',
    top: `${y-height/2}px`,
    left: `${x-width/2}px`,
    border: 'solid 2px',
    width: `${width}px`,
    height: `${height}px`,
  }

  return (
    <div style={style}></div>
  )
}