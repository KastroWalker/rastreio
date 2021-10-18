import React, { useState } from 'react';
import { InputCode } from './components/InputCode'
import { CardTracker } from './components/CardTracker'
import { GlobalStyle } from "./styles/global"
import { useEffect } from 'react';
import { tracker } from './utils/Tracker'

function App() {
  const [codes, setCodes] = useState<Array<string>>()
  
  useEffect(() => {
    const storedCodes = localStorage.getItem('codes')

    if (storedCodes) {
      const oldCodes: Array<string> = JSON.parse(storedCodes)
      setCodes(oldCodes)
    }

  }, [])
  
  useEffect(() => {
    function fetchData() {
      codes?.forEach((code: string) => {
        tracker(code).then(res => console.log(res))  
      })
    }

    fetchData()
  })

  return (
    <>
      <GlobalStyle />
      <h1>Rastreio</h1>
      <InputCode />
      <ul>
        <CardTracker />
        <CardTracker />
        <CardTracker />
        <CardTracker />
        <CardTracker />
        <CardTracker />
      </ul>
    </>
  );
}

export default App;
