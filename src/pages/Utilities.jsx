import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Card from '../components/Card'
import Calculator_img from '../assets/calculator_logo.svg'
import Coin from '../assets/coin_logo.svg'
import Stop_watch from '../assets/StopWatch_logo.svg'
import Taskify_icon from '../assets/Taskify_icon.svg'
import Calculator from '../mini/Calculator'
import FlipCoin from '../mini/FlipCoin'
import Stopwatch from '../mini/Stopwatch'
import Taskify from '../mini/Taskify'

const Utilities = () => {
  const location = useLocation()
  const isInGame = ['calculator', 'flipcoin', 'stopwatch', 'taskify'].some((slug) =>
    location.pathname.includes(slug)
  )

  return (
    <div className='flex gap-2'>
      {!isInGame && (
        <>
          <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"Calculator"} logo={Calculator_img} basePath="/utilities" />
            <Card title={"FlipCoin"} logo={Coin} basePath="/utilities" />
          </div>
          <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"Stopwatch"} logo={Stop_watch} basePath="/utilities" />
            <Card title={"Taskify"} logo={Taskify_icon} basePath="/utilities" />
          </div>
        </>
      )}

      <Routes>
        <Route path='/Calculator' element={<Calculator />} />
        <Route path='/FlipCoin' element={<FlipCoin />} />
        <Route path='/Stopwatch' element={<Stopwatch />} />
        <Route path='/Taskify' element={<Taskify />} />
      </Routes>
    </div>
  )
}

export default Utilities
