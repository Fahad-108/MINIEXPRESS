import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/MiniXpress_text.svg'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'
import { ThemeContext } from '../contexts/ThemeContext'

const Navbar = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => setMenuOpen((open) => !open)

  return (
    <nav
      className={`px-8 py-4 w-full flex justify-between items-center ${
        isDark ? 'bg-[#04acfb]/20 text-black' : 'bg-blue-900/20 text-white'
      } relative backdrop-blur-[4px] border-b`}
    >
      <img src={Logo} alt="Logo" className= {` h-12 w-30 `}/>

      <ul className="hidden md:flex gap-6 text-lg font-medium">
        <li>
          <Link
            className="hover:text-[#fb8c04] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fb8c04] after:transition-all after:duration-300 hover:after:w-full"
            to="/MINIEXPRESS/games"
          >
            Games
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fb8c04] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fb8c04] after:transition-all after:duration-300 hover:after:w-full"
            to="/MINIEXPRESS/entertainment"
          >
            Entertainment
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fb8c04] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fb8c04] after:transition-all after:duration-300 hover:after:w-full"
            to="/MINIEXPRESS/utilities"
          >
            Utility
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-[#fb8c04] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#fb8c04] after:transition-all after:duration-300 hover:after:w-full"
            to="/MINIEXPRESS/randomizers"
          >
            Randomizer
          </Link>
        </li>
      </ul>

      <div>
        <button
        onClick={toggleTheme}
        className="px-2 py-1 border rounded-full ml-4"
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </button>

      <button className="md:hidden text-xl ml-4" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
      </div>

      {menuOpen && (
        <div
          className={`absolute top-full right-4 mt-2 w-48 ${
            isDark ? 'bg-white text-black' : 'bg-blue-900 text-white'
          } shadow-lg rounded-md flex flex-col md:hidden z-20`}
        >
          <Link
            to="/MINIEXPRESS/games"
            className={`px-4 py-2 rounded ${
              isDark ? 'hover:bg-gray-200' : 'hover:bg-blue-700'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Games
          </Link>
          <Link
            to="/MINIEXPRESS/entertainment"
            className={`px-4 py-2 rounded ${
              isDark ? 'hover:bg-gray-200' : 'hover:bg-blue-700'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Entertainment
          </Link>
          <Link
            to="/MINIEXPRESS/utilities"
            className={`px-4 py-2 rounded ${
              isDark ? 'hover:bg-gray-200' : 'hover:bg-blue-700'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Utility
          </Link>
          <Link
            to="/MINIEXPRESS/randomizers"
            className={`px-4 py-2 rounded ${
              isDark ? 'hover:bg-gray-200' : 'hover:bg-blue-700'
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Randomizer
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
