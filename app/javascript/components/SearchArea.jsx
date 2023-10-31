import React, { useState, useRef } from "react";
import DropDown from "./DropDown";
import TargetingBox from "./TargetingBox";

export default () => {
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState({x:0, y:0});

  const area_ref = useRef(null);

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
    console.log(clicked_item);
    console.log(coords);
    console.log(area_ref.current.clientWidth);
    console.log(area_ref.current.clientHeight);
    const box_offset_w = 20;
    const box_offset_h = 20;
    const box_w = box_offset_w * 2;
    const box_h = box_offset_h * 2;
    const xmin = coords.x - box_offset_w;
    const ymin = coords.y - box_offset_h;

    const xcenter = (xmin + box_w / 2) / area_ref.current.clientWidth;
    const ycenter = (ymin + box_h / 2) / area_ref.current.clientHeight;
    const w = box_w / area_ref.current.clientWidth;
    const h = box_w / area_ref.current.clientHeight;
    console.log(xcenter, ycenter, w, h);
  }
  
  return (
    <>
    <div ref={area_ref} className="relative bg-blue-200 h-96 w-auto" onClick={click_on_image}>

      {clicked && <DropDown coords={coords} x_offset={15} item_clicked={clicked_dropbox_item} />}
      {clicked && <TargetingBox width={20} height={20} coords={coords} />}
    </div>
    </>
  )
}