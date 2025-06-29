import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Card from '../components/Card'
import Calculator_img from '../assets/calculator_logo.svg'
import Coin from '../assets/coin_logo.svg'
import Stop_watch from '../assets/StopWatch_logo.svg'
import Taskify_icon from '../assets/Taskify_icon.svg'
import Unitconverter_icon from '../assets/Unitconverter_icon.svg'
import Calculator from '../mini/Calculator'
import FlipCoin from '../mini/FlipCoin'
import Stopwatch from '../mini/Stopwatch'
import Taskify from '../mini/Taskify'
import UnitConverter from '../mini/UnitConverter'

const Utilities = () => {
  const location = useLocation()
  const isInGame = ['calculator', 'flipcoin', 'stopwatch', 'taskify', 'unitconverter'].some((slug) =>
    location.pathname.includes(slug)
  )

  return (
    <div className='flex gap-2'>
      {!isInGame && (
        <>
          <div className='flex gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"Calculator"} logo={Calculator_img} basePath="/utilities" />
            <Card title={"FlipCoin"} logo={Coin} basePath="/utilities" />
            <Card title={"Stopwatch"} logo={Stop_watch} basePath="/utilities" />
            <Card title={"Taskify"} logo={Taskify_icon} basePath="/utilities" />
            <Card title={"UnitConverter"} logo={Unitconverter_icon} basePath="/utilities" />
          </div>
        </>
      )}

      <Routes>
        <Route path='/Calculator' element={<Calculator />} />
        <Route path='/FlipCoin' element={<FlipCoin />} />
        <Route path='/Stopwatch' element={<Stopwatch />} />
        <Route path='/Taskify' element={<Taskify />} />
        <Route path='/UnitConverter' element={<UnitConverter />} />
      </Routes>
    </div>
  )
}

export default Utilities
