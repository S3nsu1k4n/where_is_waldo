import React from "react";

export default ({filenames}) => {

  const class_name = `flex gap-5 p-1`
  return (
    <div className={class_name}>
      {filenames.map(filename => <img key={filename} src={filename} alt={filename} className="h-10 flex-1 hover:border-2"></img>)}
    </div>
  )
}