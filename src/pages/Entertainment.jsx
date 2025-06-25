import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import MusicPlayer from '../mini/MusicPlayer'
import Music from '../assets/music_logo.svg'
import Card from '../components/Card'

const Entertainment = () => {
  const location = useLocation()
  const isInGame = ['musicplayer'].some((slug) =>
    location.pathname.includes(slug)
  )

  return (
    <div className='flex gap-2'>
      {!isInGame && (
        <>
          <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
            <Card title={"MusicPlayer"} logo={Music} />
          </div>
        </>
      )}

      <Routes>
        <Route path='MusicPlayer' element={<MusicPlayer />} />
      </Routes>
    </div>
  )
}

export default Entertainment
