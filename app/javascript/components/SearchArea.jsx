import React, { useState, useRef } from "react";
import DropDown from "./DropDown";
import TargetingBox from "./TargetingBox";

export default ({img_url, options}) => {
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState({x:0, y:0});

  const area_ref = useRef(null);

  const box_offset_w = 20;
  const box_offset_h = 20;

  const normalize_rect = () => {
    const box_w = box_offset_w * 2;
    const box_h = box_offset_h * 2;
    const xmin = coords.x - box_offset_w;
    const ymin = coords.y - box_offset_h;

    const xcenter = (xmin + box_w / 2) / area_ref.current.clientWidth;
    const ycenter = (ymin + box_h / 2) / area_ref.current.clientHeight;
    const w = box_w / area_ref.current.clientWidth;
    const h = box_w / area_ref.current.clientHeight;
    return {xcenter, ycenter, w, h};
  }

  const click_on_image = (event) => {
    const get_mouse_coords = () => {
      return {x:event.clientX - rect.left, y:event.clientY - rect.top};
    }
    const rect = event.target.getBoundingClientRect();
    setCoords(get_mouse_coords());
    setClicked(!clicked);
  }

  const clicked_dropbox_item = (event) => {
    const clicked_item = event.target.innerText;
    const rect = normalize_rect();
    console.log(rect);

    fetch(`api/v1/games/evaluate/1/?name=${clicked_item}&xcenter=${rect.xcenter}&ycenter=${rect.ycenter}&width=${rect.w}&height=${rect.h}`)
    .then((response) => response.json())
    .then((response) => console.log(response))
    setClicked(!clicked);
  }
  
  return (
    <>
    <div className="relative bg-blue-200 h-96 w-auto">
      <img ref={area_ref}  src={img_url} alt="" className="w-full" onClick={click_on_image} />
      {clicked && <DropDown coords={coords} x_offset={15} item_clicked={clicked_dropbox_item} options={options} />}
      {clicked && <TargetingBox width={box_offset_w} height={box_offset_h} coords={coords} />}
    </div>
    </>
  )
}