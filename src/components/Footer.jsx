import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/MiniXpress_text.svg'
import { ThemeContext } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <footer className={`w-full border-t ${isDark ? 'bg-[#04acfb]/20 text-black' : 'bg-blue-900/20 text-white'} backdrop-blur-[4px]`}>
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div>
          <img src={Logo} alt="Logo" className="h-10" />
          <p className="mt-1 text-sm">Developed with ❤️ by Fahad.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-lg">Connect with Us</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="https://github.com/Fahad-108" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a></li>
            <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></li>
            <li><a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-lg">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/MINIEXPRESS/terms" className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/MINIEXPRESS/policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/MINIEXPRESS/cookies" className="hover:underline">Cookies Policy</Link></li>
            <li><Link to="/MINIEXPRESS/license" className="hover:underline">License Info</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t py-3 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-semibold">MiniXpress</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
