import { useState } from "react"

function state() {
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState("")
  const [pageNumber, setPageNumber] = useState(1)
  const [type, setType] = useState("")

  return {
    users,
    setUsers,
    search,
    setSearch,
    pageNumber,
    setPageNumber,
    type,
    setType,
  }
}

export default state
