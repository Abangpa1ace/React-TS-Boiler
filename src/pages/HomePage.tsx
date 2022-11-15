import React, { useState } from 'react'
import Toast from "../components/Toast"
import useSingleToast from "../hooks/useSingleToast";

export default function Home() {
  const [state, setState] = useState(0);
  const { toast } = useSingleToast({});

  const handleClick = () => {
    toast(<Toast>{`${Date.now()}`}</Toast>)  
  }
  return (
    <div>
      <span>{state}</span>
      <button onClick={() => setState(prev => prev+1)}>Plus</button>
      <button onClick={handleClick}>Click it</button>
    </div>
  )
}
