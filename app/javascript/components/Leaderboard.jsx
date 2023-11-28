import React, { useEffect, useState } from "react";
import LeaderboardEntry from "./LeaderboardEntry";

export default () => {
  const [data, setData] = useState([]);
  
  const renderEntries = () => {
    return data.map((entry) => <LeaderboardEntry key={`${entry.created_at}`} name={entry.name} time_finished={entry.time_finished} created_at={entry.created_at} />)
  }

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/v1/leaderboard/index', { mode: 'cors'})
    .then((response) => response.json())
    .then((d) => setData(d))
  }, [])

  return (
    <>
      <h1>Leaderboard</h1>
      <div>
        <LeaderboardEntry name={'Name'} time_finished={'Time'} created_at={'Date'}/>
        { renderEntries() }
      </div>
    </>
  )
}