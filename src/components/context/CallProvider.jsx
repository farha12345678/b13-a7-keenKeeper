import { createContext, useEffect, useState } from "react"

export const CallContext = createContext()

const CallProvider = ({ children }) => {

  // 🔹 initial load from localStorage
  const [storedCall, setStoredCall] = useState(() => {
    const saved = localStorage.getItem("calls")
    return saved ? JSON.parse(saved) : []
  })

  // 🔹 update localStorage when state changes
  useEffect(() => {
    localStorage.setItem("calls", JSON.stringify(storedCall))
  }, [storedCall])

  return (
    <CallContext.Provider value={{ storedCall, setStoredCall }}>
      {children}
    </CallContext.Provider>
  )
}

export default CallProvider