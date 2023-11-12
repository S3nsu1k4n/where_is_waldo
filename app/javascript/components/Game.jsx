import React, { useEffect, useState } from "react";
import SearchArea from "./SearchArea";

export default () => {
  const [imageURL, setImageURL] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    fetch('api/v1/games/index', { mode: 'cors'})
    .then((response) => response.json())
    .then((response) => {
      setImageURL(response[0].img_url);
      setOptions(response[0].characters.map(char => char.name));
    })
    .catch((error) => console.log(error))
  }, []);

  console.log(imageURL);
  console.log(options);

  return (
    <>
      <div>
        <SearchArea img_url={imageURL} options={options}/>
      </div>
    </>
  )
}