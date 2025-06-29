import React, { useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { motion } from 'framer-motion'

const UnitConvertor = () => {
  const { theme } = useContext(ThemeContext)
  const isDark = theme === "dark"

  const [category, setCategory] = useState("length")
  const [fromUnit, setFromUnit] = useState("Meter")
  const [toUnit, setToUnit] = useState("Kilometer")
  const [inputValue, setInputValue] = useState("")
  const [result, setResult] = useState("")

  const units = {
    length: ["Meter", "Kilometer", "Mile", "Foot", "Inch"],
    weight: ["Gram", "Kilogram", "Pound", "Ton"],
    temperature: ["Celsius", "Farenheit", "Kelvin"]
  }

  const lengthToMeters = {
    Meter: 1,
    Kilometer: 1000,
    Mile: 1609.34,
    Foot: 0.3048,
    Inch: 0.0254,
  }

  const weightToKg = {
    Gram: 0.001,
    Kilogram: 1,
    Pound: 0.453592,
    Ton: 1000,
  }

  const convertLength = (value, from, to) => {
    const inMeters = value * lengthToMeters[from]
    return inMeters / lengthToMeters[to]
  }

  const convertWeight = (value, from, to) => {
    const inKg = value * weightToKg[from]
    return inKg / weightToKg[to]
  }

  const convertTemp = (value, from, to) => {
    if (from === to) return value
    let celsius
    if (from === "Farenheit") celsius = (value - 32) * (5 / 9)
    else if (from === "Kelvin") celsius = value - 273.15
    else celsius = value

    if (to === "Celsius") return celsius
    if (to === "Farenheit") return celsius * (9 / 5) + 32
    if (to === "Kelvin") return celsius + 273.15
  }

  const handleConvert = () => {
    if (inputValue === "") return
    const value = parseFloat(inputValue)
    let res

    if (category === "weight") {
      res = convertWeight(value, fromUnit, toUnit)
    } else if (category === "temperature") {
      res = convertTemp(value, fromUnit, toUnit)
    } else if (category === "length") {
      res = convertLength(value, fromUnit, toUnit)
    }

    setResult(res.toFixed(2))
  }

  // Colors for layout only (not for input fields)
  const textColor = isDark ? "text-white" : "text-black"
  const bgMain = isDark ? "bg-[#f4f7fb]/20" : "bg-blue-100/60"

  return (
    <motion.div
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(150% at 50% 50%)' }}
      exit={{ clipPath: 'circle(0% at 50% 50%)' }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
    >
      <main className={`container max-w-[80vw] mx-auto my-5 pb-10 p-5 pt-0 rounded-2xl border ${bgMain} backdrop-blur-[2px]`}>
        <div className='flex justify-center rounded-bl-3xl rounded-br-3xl'>
          <h1 className={`font-bold text-2xl ${textColor} p-5`}>🔁 Unit Converter</h1>
        </div>

        <div className='container p-2 mx-auto'>
          <label className={`font-bold text-lg block mb-2 ${textColor}`}>Choose Category</label>
          <select
            value={category}
            onChange={(e) => {
              const selected = e.target.value
              setCategory(selected)
              setFromUnit(units[selected][0])
              setToUnit(units[selected][1])
              setInputValue("")
              setResult("")
            }}
            className="w-full p-2 mb-4 rounded-md outline-none border border-black/30 bg-white text-black"
          >
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
          </select>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className={`block font-bold mb-1 ${textColor}`}>From</label>
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full border border-black/30 p-2 rounded-md outline-none bg-white text-black"
              >
                {units[category].map((unit) => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={`block font-bold mb-1 ${textColor}`}>To</label>
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full border border-black/30 p-2 rounded-md outline-none bg-white text-black"
              >
                {units[category].map((unit) => (
                  <option key={unit} value={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>

          <label className={`block mb-1 font-bold ${textColor}`}>Enter value</label>
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full border border-black/30 p-1 rounded-md outline-none mb-4 bg-white text-black"
          />

          <button
            onClick={handleConvert}
            className="w-full bg-[#FB8C04] hover:bg-[#e77b00] text-white font-semibold py-2 rounded-md transition-all duration-300"
          >
            Convert
          </button>

          {result !== "" && (
            <div className={`mt-4 text-center text-lg font-semibold ${textColor}`}>
              Result: <span className="text-[#FB8C04]">{result}</span> {toUnit}
            </div>
          )}
        </div>
      </main>
    </motion.div>
  )
}

export default UnitConvertor
