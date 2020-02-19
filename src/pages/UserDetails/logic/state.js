import { useState } from "react"

function state() {
  const [userID, setUserID] = useState(null)
  const [user, setUser] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  return {
    user,
    userID,
    setUser,
    isLoading,
    setUserID,
    setIsLoading,
  }
}

export default state
