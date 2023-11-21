import React, { useEffect, useState } from "react";
import SearchArea from "./SearchArea";
import Timer from "./Timer";
import CharactersDisplay from "./CharactersDisplay";

export default () => {
  const [imageURL, setImageURL] = useState(null);
  const [options, setOptions] = useState(null);
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    fetch('api/v1/games/index', { mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
      setImageURL(response[0].img_url);
      setOptions(response[0].characters.map(char => char.name));
      setGameId(response[0].characters[0].game_id);
    })
    .catch((error) => console.log(error))
  }, []);

  return (
    <>
      <div>
        <div>
          <CharactersDisplay />
          <Timer />
        </div>
        <SearchArea img_url={imageURL} options={options} setOptions={setOptions} gameId={gameId}/>
      </div>
    </>
  )
}