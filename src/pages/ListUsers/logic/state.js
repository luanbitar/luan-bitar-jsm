import { useState } from "react"

function state() {
  const [type, setType] = useState(null)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  return {
    type,
    users,
    search,
    setType,
    setUsers,
    setSearch,
    isLoading,
    pageNumber,
    setIsLoading,
    setPageNumber,
  }
}

export default state
