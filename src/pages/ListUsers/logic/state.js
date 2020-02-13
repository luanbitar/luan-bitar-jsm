import { useState } from "react"

function state() {
  const [users, setUsers] = useState([])

  return {
    users,
    setUsers,
  }
}

export default state
