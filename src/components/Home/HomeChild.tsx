import React from 'react'
import Toast from "../Toast"
import useSingleToast from "../../hooks/useSingleToast";


export default function HomeChild({ number = 1 }) {
  const { toast } = useSingleToast({});

  const handleClick = () => {
    toast(<Toast>{`${Date.now()}`}</Toast>)  
  }
  return (
    <div>
      <p>HomeChild #{number}</p>
      <button onClick={handleClick}>Click it</button>
    </div>
  )
}
