import React from "react";
import { Link } from "react-router-dom";

export default () => {
  const style = "border-2 text-center hover:bg-slate-100";
  return (
    <nav className="grid grid-cols-3">
      <Link to='/' className={style}>Home</Link>
      <Link to='/leaderboard' className={style}>Leaderboard</Link>
      <Link to='/about' className={style}>About</Link>
    </nav>
  )
}