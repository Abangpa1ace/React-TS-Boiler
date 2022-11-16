import React, { useState } from 'react'
import HomeChild from '../components/Home/HomeChild';


export default function Home() {
  const [state, setState] = useState(0);

  return (
    <div>
      <span>{state}</span>
      <button onClick={() => setState(prev => prev + 1)}>Plus</button>
      <HomeChild number={1} />
      <HomeChild number={2} />
    </div>
  )
}
