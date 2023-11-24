import React from "react";

export default ({filenames}) => {

  const class_name = `flex gap-5 p-1`

  const get_basename = (filename) => filename.substring(filename.lastIndexOf('/') + 1, filename.lastIndexOf('.'));

  return (
    <div className={class_name}>
      {filenames.map(filename => <div key={filename} className="flex-1 text-white"><img src={filename} alt={filename} className="h-10 w-10 hover:border-2"></img><p>{get_basename(filename)}</p></div>)}
    </div>
  )
}