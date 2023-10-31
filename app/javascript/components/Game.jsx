import React from "react";
import SearchArea from "./SearchArea";

export default () => {
  //const img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pieter_Bruegel_the_Elder_-_Children%E2%80%99s_Games_-_Google_Art_Project.jpg/1200px-Pieter_Bruegel_the_Elder_-_Children%E2%80%99s_Games_-_Google_Art_Project.jpg"
  
  const click_on_image = (event) => {
    console.log(event.clientX, event.clientY);
  }

  return (
    <>
      <h1 className="bg-red-200">Game</h1>
      <div onClick={click_on_image}>
        <SearchArea />
      </div>
    </>
  )
}