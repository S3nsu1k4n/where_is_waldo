import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default () => {
  const style = "border-2 text-center hover:bg-slate-200";
  const navbarRef = useRef(null);

  const resetButtonsStyle = () => {
    for(child of navbarRef.current.childNodes){
      child.className = style;
    }
  }

  const onButtonClick = (e) => {
    resetButtonsStyle();
    e.target.className = "border-2 text-center bg-slate-300 hover:bg-slate-400";
  }

  return (
    <nav ref={navbarRef} className="grid grid-cols-3">
      <Link onClick={onButtonClick} to='/' className={style}>Home</Link>
      <Link onClick={onButtonClick} to='/leaderboard' className={style}>Leaderboard</Link>
      <Link onClick={onButtonClick} to='/about' className={style}>About</Link>
    </nav>
  )
}