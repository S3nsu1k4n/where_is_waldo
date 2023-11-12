import React, { useEffect, useState } from "react";
import SearchArea from "./SearchArea";

export default () => {
  const [imageURL, setImageURL] = useState(null);
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch('api/v1/games/index', { mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
      setImageURL(response[0].img_url);
      setCharacters(response[0].characters);
    })
    .catch((error) => console.log(error))
  }, []);

  console.log(imageURL);
  console.log(characters);

  return (
    <>
      <div>
        <SearchArea />
      </div>
    </>
  )
}