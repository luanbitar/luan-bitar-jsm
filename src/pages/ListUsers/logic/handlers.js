import axios from "axios"

const { GATSBY_API_ROOT_URL } = process.env
const USERS_URL = `${GATSBY_API_ROOT_URL || "/api"}/users`

function handlers({ setUsers, search, type, setType }) {
  return {
    getUsers: function() {
      axios
        .post(USERS_URL, {
          search,
          label: type,
        })
        .then(({ data }) => {
          const { users } = data

          console.log({ data })
          setUsers(users)
        })
    },
    getQueryParams: function() {
      const urlParams = new URLSearchParams(window.location.search)
      const type = urlParams.get("type")
      setType(type)
    },
  }
}

export default handlers
