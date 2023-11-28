import React, { useEffect, useState } from "react";
import SearchArea from "./SearchArea";
import Header from "./Header";

export default () => {
  const [imageURL, setImageURL] = useState(null);
  const [options, setOptions] = useState(null);
  const [gameId, setGameId] = useState(null);
  
  
  const [finished, setFinished] = useState(false);

  
  useEffect(() => {
    if(options != null){
      if(options.length < 8){
        setFinished(true);
      }
    }
  }, [options])

  useEffect(() => {
    fetch('api/v1/games/index', { mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
      setImageURL(response[0].img_url);
      setOptions(response[0].characters.map(char => char.name));
      setGameId(response[0].characters[0].game_id);
    })
    .catch((error) => {})
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
        <Header filenames={filenames} finished={finished}/>
        <SearchArea img_url={imageURL} options={options} setOptions={setOptions} gameId={gameId}/>
      </div>
    </>
  )
}