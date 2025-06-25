import React from 'react'
import { useLocation } from 'react-router-dom'
import Card_Clash from '../assets/Card_Clash_logo.svg'
import Tic_Tac_Toe from '../assets/Tic_Tac_toe_logo.svg'
import Color_Guess from '../assets/colorGuess_logo.svg'
import Wordguess from '../assets/Wordguess_logo.svg'
import Card from '../components/Card'
import { Route, Routes } from 'react-router-dom'
import CardClash from '../mini/CardClash'
import TicTacToe from '../mini/TicTacToe'
import GuessWord from '../mini/GuessWord'
import ColorGuess from '../mini/ColorGuess'

const Games = () => {
  const location = useLocation()
  const isInGame = ['cardclash', 'colorguess', 'tictactoe', 'wordguess'].some((slug) =>
    location.pathname.includes(slug)
  )

  return (
    <div className='flex gap-2'>
      {!isInGame && (
        <>
          <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"TicTacToe"} logo={Tic_Tac_Toe} />
            <Card title={"CardClash"} logo={Card_Clash} />
          </div>
          <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"ColorGuess"} logo={Color_Guess} />
            <Card title={"Wordguess"} logo={Wordguess} />
          </div>
        </>
      )}

      <Routes>
        <Route path='CardClash' element={<CardClash />} />
        <Route path='TicTacToe' element={<TicTacToe />} />
        <Route path='Wordguess' element={<GuessWord />} />
        <Route path='ColorGuess' element={<ColorGuess />} />
      </Routes>
    </div>
  )
}

export default Games
