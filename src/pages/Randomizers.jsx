import React from 'react'
import Dice from '../assets/dice_logo.svg'
import RollDice from '../mini/RollDice'
import Card from '../components/Card'
import { Routes, Route, useLocation } from 'react-router-dom'

const Randomizers = () => {
  const location = useLocation()
  const isInGame = ['rolldice'].some((slug) =>
    location.pathname.includes(slug)
  )

  return (
    <div className='flex gap-2'>
      {!isInGame && (
        <>
          <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"RollDice"} logo={Dice} />
          </div>
        </>
      )}
      <Routes>
        <Route path='rollDice' element={<RollDice />} />
      </Routes>
    </div>
  )
}

export default Randomizers
