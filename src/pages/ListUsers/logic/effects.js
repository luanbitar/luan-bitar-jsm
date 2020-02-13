import axios from "axios"
import { useEffect } from "react"

const { GATSBY_API_ROOT_URL } = process.env
const USERS_URL = `${GATSBY_API_ROOT_URL || "/api"}/users`

function effects({ setUsers }) {
  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.post(USERS_URL, {
        label: "laborious",
      })
      const { users } = data

      console.log({ data })
      setUsers(users)
    }
    getUsers()
  }, [])
}

export default effects
