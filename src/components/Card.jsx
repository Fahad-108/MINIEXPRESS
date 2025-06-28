import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { Link } from 'react-router-dom';

const Card = ({logo,title}) => {
  
    const { theme } = useContext(ThemeContext)
    const isDark = theme === 'dark'
    
  const lowertitle = title.toLowerCase()
  return (
    
    <Link to={lowertitle}>
    <div className={`max-w-sm mx-auto ${isDark? "bg-[#fdb009]" :"bg-[#f87c07]"} rounded-xl shadow-md p-4 transition-transform duration-300 hover:scale-110`}>
      <div className="flex justify-center mb-4">
        <img className={`h-25 w-30 rounded ${isDark?"invert":""}`} src={logo} alt={title} />
      </div>
      <h2 className={`text-lg ${isDark?"text-black":"text-white"} font-bold text-center`}>{title}</h2>
    </div>
    </Link>
  );
};


export default Card
