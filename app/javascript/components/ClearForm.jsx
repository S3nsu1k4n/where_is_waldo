import React, { useRef } from "react";

export default ClearForm = ({onClick, time_finished}) => {
  const name_input = useRef(null);
  const min_char_length = 3;
  const max_char_length = 20;

  const name_correct = () => {
    return name_input.current.value.length < min_char_length || name_input.current.value.length > max_char_length ? false : true;
  }

  const handleSubmit = async () => {
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch('/api/v1/leaderboard/create', {
      method: 'POST',
      body: JSON.stringify({name: name_input.current.value, time_finished: time_finished}),
      headers: {
        "X-CSRF-Token": token,
        'Content-Type': 'application/json'
      }
    })
  }

  const button_click = e => {
    if(!name_correct()){
      return;
    }
    e.preventDefault();
    handleSubmit()
    onClick();
  }

  const on_input = e => {
    name_input.current.className = name_correct() ? "text-black" : "text-black bg-red-300";
  }

  return (
    <form>
      <div className="flex justify-content items-center text center">  
        <label htmlFor="name" className="text-2xl m-2">Name:</label>
        <input ref={name_input} onInput={on_input} id="name" name="name" type="text" required minLength={min_char_length} maxLength={max_char_length} className="text-black h-fit"/>
      </div>
    
      <button onClick={button_click} className="border-2 w-full mt-2">Submit</button>
    </form>
  )
}