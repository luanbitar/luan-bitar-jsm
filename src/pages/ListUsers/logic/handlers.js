import axios from "axios"
import { navigate } from "@reach/router"

const { GATSBY_API_ROOT_URL } = process.env
const USERS_URL = `${GATSBY_API_ROOT_URL || "/api"}/users`

function handlers({
  setUsers,
  search,
  type,
  setType,
  setIsLoading,
  setSearch,
}) {
  function setQueryParams({ newType = type, newSearch = search }) {
    navigate(`?type=${newType}&search=${newSearch}`)
  }

  return {
    getUsers: function() {
      setIsLoading(true)
      axios
        .post(USERS_URL, {
          search,
          label: type,
        })
        .then(({ data }) => {
          const { users } = data

          console.log({ data })
          setUsers(users)
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
