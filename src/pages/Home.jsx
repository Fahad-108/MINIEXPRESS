import React from 'react'
import Games from '../assets/Game_icon.svg'
import Entertainment from '../assets/Entertainment_icon.svg'
import Randomizer from '../assets/Randomizers_icon.svg'
import Utilities from '../assets/Utilities_icon.svg'
import Card from '../components/Card'


const Home = () => {
  return (
    <div className='flex gap-2'>
      <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
        <Card title={"games"} logo={Games} to= "/games"/>
        <Card title={"utilities"} logo={Utilities} to= "/utilities"/>
      </div>
      <div className='flex flex-col gap-2 flex-wrap justify-center md:justify-start'>
      <Card title={"entertainment"} logo={Entertainment} to= "/entertainment"/>
      <Card title={"randomizers"} logo={Randomizer} to= "/randomizers"/>
      </div>
    </div>
  )
}

export default Home
