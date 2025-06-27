import './App.css'
import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Utilities from './pages/Utilities'
import Games from './pages/Games'
import Entertainment from './pages/Entertainment'
import Randomizers from './pages/Randomizers'
import { ThemeContext } from './contexts/ThemeContext'
import Footer from './components/Footer'
import CookiesPolicy from './components/CookiesPolicy'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsAndConditions from './components/TermsAndConditions'
import LicenseInfo from './components/LicenseInfo'
import bg_light from './assets/bg_light.png'
import bg from './assets/bg.png'

function App() {
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const themeClass = isDark ? "bg-[#04acfb]" : "bg-blue-900 text-gray-900"

  return (
    <div className={`min-h-screen flex flex-col justify-between font-[roboto] ${themeClass} `} style={{
        backgroundImage: `url(${isDark ? bg_light : bg})`
      }}>
      <Navbar />
      <div className={` min-h-[calc(100vh-135px)] flex justify-center items-center`}>
        <Routes>
          <Route path="/MINIEXPRESS/" element={<Home />} />
          <Route path="/MINIEXPRESS/games/*" element={<Games />} />
          <Route path="/MINIEXPRESS/utilities/*" element={<Utilities />} />
          <Route path="/MINIEXPRESS/entertainment/*" element={<Entertainment />} />
          <Route path="/MINIEXPRESS/randomizers/*" element={<Randomizers />} />
          <Route path="/MINIEXPRESS/cookies" element={<CookiesPolicy />} />
          <Route path="/MINIEXPRESS/policy" element={<PrivacyPolicy />} />
          <Route path="/MINIEXPRESS/license" element={<LicenseInfo />} />
          <Route path="/MINIEXPRESS/terms" element={<TermsAndConditions />} />

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
