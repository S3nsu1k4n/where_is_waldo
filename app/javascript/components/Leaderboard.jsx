import React, { useEffect, useState } from "react";
import LeaderboardEntry from "./LeaderboardEntry";

export default () => {
  const [data, setData] = useState([]);

  const convertTZ = date => {
    let new_date = new Date(Date.parse(date));

    return [
      new_date.getHours(), ':',
      new_date.getMinutes(), ':',
      new_date.getSeconds(), ' - ',
      new_date.getFullYear(), '/',
      new_date.getMonth() + 1, '/',
      new_date.getDate(),
    ].join('');
  };
  
  const renderEntries = () => {
    return data.map((entry, index) => <LeaderboardEntry key={`${entry.created_at}`} index={index + 1} name={entry.name} time_finished={entry.time_finished} created_at={convertTZ(entry.created_at)} header={false} />)
  }

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/v1/leaderboard/index', { mode: 'cors'})
    .then((response) => response.json())
    .then((d) => setData(d))
  }, [])

  return (
    <>
      <h1 className="text-xl m-5 font-black">Leaderboard</h1>
      <div>
        <LeaderboardEntry index={'Position'} name={'Name'} time_finished={'Time'} created_at={'Date'} header={true}/>
        { renderEntries() }
      </div>
    </>
  )
}