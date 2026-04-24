import { createContext, useEffect, useState } from "react"

export const CallContext = createContext()

const CallProvider = ({ children }) => {

//  localStorage
  const [storedCall, setStoredCall] = useState(() => {
    const saved = localStorage.getItem("calls")
    return saved ? JSON.parse(saved) : []
  })
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