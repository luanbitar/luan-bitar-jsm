import { useState, useRef } from "react"

function state() {
  const lastItemRef = useRef(null)
  const [type, setType] = useState(null)
  const [users, setUsers] = useState([])
  const [search, setSearch] = useState(null)
  const [pageNumber, setPageNumber] = useState(null)
  const [pageSize, setPageSize] = useState(24)
  const [totalCount, setTotalCount] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  return {
    type,
    users,
    search,
    setType,
    setUsers,
    pageSize,
    setSearch,
    isLoading,
    pageNumber,
    totalCount,
    setPageSize,
    lastItemRef,
    setIsLoading,
    setPageNumber,
    setTotalCount,
  }
}

export default state
