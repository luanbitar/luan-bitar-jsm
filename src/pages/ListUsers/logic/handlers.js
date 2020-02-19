import axios from "axios"
import { navigate } from "@reach/router"

const { GATSBY_API_ROOT_URL } = process.env
const USERS_URL = `${GATSBY_API_ROOT_URL || "/api"}/users`

function handlers({
  type,
  search,
  setType,
  setUsers,
  pageSize,
  setSearch,
  setIsLoading,
  setPageNumber,
  setTotalCount,
  users: usersState,
}) {
  function setQueryParams({ newType = type, newSearch = search }) {
    navigate(`?type=${newType}&search=${newSearch}`)
  }

  return {
    getUsers: function({ pageNumber = 1 } = {}) {
      setIsLoading(true)
      axios
        .post(USERS_URL, {
          search,
          label: type,
          pageNumber,
          pageSize,
        })
        .then(({ data }) => {
          const { users: usersData, totalCount } = data
          setTotalCount(totalCount)
          setPageNumber(pageNumber + 1)

          const users =
            pageNumber === 1 ? usersData : [...usersState, ...usersData]
          setUsers(users)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    },
    getQueryParams: function() {
      const urlParams = new URLSearchParams(window.location.search)
      const type = urlParams.get("type") || ""
      const search = urlParams.get("search") || ""
      setType(type)
      setSearch(search)
    },
    onSearchChange: function(newSearch) {
      setSearch(newSearch)
      setQueryParams({ newSearch })
    },
    onTypeChange: function(newType) {
      if (newType === type) {
        setType("")
        setQueryParams({ newType: "" })
      } else {
        setType(newType)
        setQueryParams({ newType })
      }
    },
  }
}

export default handlers
