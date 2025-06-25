import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'

  return (
    <footer className={`w-full border-t ${isDark ?'bg-[#04acfb]/20 text-black' :'bg-blue-900/20 text-white'} backdrop-blur-[4px]`}>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">MiniXpress</h2>
          <p className="mt-2 text-sm">Developed with ❤️ by Fahad.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-lg">Connect with Us</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-lg">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/policy"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/cookies"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                Cookies Policy
              </Link>
            </li>
            <li>
              <Link to="/license"
                className="hover:text-[#FB5304] relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FB5304] after:transition-all after:duration-300 hover:after:w-full">
                License Info
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} <span className="font-semibold">MiniXpress</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
