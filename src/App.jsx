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
import bg from './assets/bg.png'

function App() {
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const themeClass = isDark ? "bg-[#04acfb]" : "bg-blue-900 text-gray-900"

  return (
    <div className={`min-h-screen flex flex-col justify-between font-[roboto] ${themeClass} `} style={{backgroundImage: `url(${bg})`}}>
      <Navbar />
      <div className={` min-h-[calc(100vh-135px)] flex justify-center items-center`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/*" element={<Games />} />
          <Route path="/utilities/*" element={<Utilities />} />
          <Route path="/entertainment/*" element={<Entertainment />} />
          <Route path="/randomizers/*" element={<Randomizers />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/license" element={<LicenseInfo />} />
          <Route path="/terms" element={<TermsAndConditions />} />

        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
