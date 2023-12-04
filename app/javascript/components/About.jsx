import React from "react";

export default () => {
  return (
    <>
    <h1 className="text-xl m-5 font-black">About</h1>
    <div className="flex flex-col text-center p-10">
      <h2 className="flex-1 text-xl font-black p-10">A Photo Tagging App</h2>
      <p className="flex-1 p-10">Image: Pieter Bruegel the Elder, Children's Games</p>
      <p className="flex-1 p-2">Source:</p><a href="https://en.wikipedia.org/wiki/Children%27s_Games_(Bruegel)">https://en.wikipedia.org/wiki/Children%27s_Games_(Bruegel)</a>
      <div className="flex-1 flex flex-row items-center justify-center pt-10 ">  
        <p className="">S3nsu1k4n ©</p>
        <a href="https://github.com/S3nsu1k4n">
          <img src="assets/images/github-mark.svg" alt="github" className="max-h-8" />
        </a>
      </div>

    </div>
    </>
  )
}