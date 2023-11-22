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

  filenames = [
    "assets/images/boy1.JPG",
    "assets/images/boy2.JPG",
    "assets/images/boy3.JPG",
    "assets/images/girl1.JPG",
    "assets/images/girl2.JPG",
    "assets/images/girl3.JPG",
    "assets/images/basket.JPG",
    "assets/images/horse.JPG",
  ]
  
  return (
    <>
      <div>
        <div className="grid grid-cols-2">
          <CharactersDisplay filenames={filenames}/>
          <Timer />
        </div>
        <SearchArea img_url={imageURL} options={options} setOptions={setOptions} gameId={gameId}/>
      </div>
    </>
  )
}