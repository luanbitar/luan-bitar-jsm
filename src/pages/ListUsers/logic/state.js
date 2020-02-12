import { useState } from "react"

export default function() {
  const [users, setUsers] = useState([])

  return {
    users,
    setUsers,
  }
}
