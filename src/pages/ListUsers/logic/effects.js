import axios from "axios"
import { useEffect } from "react"

const { GATSBY_API_ROOT_URL } = process.env
const USERS_URL = `${GATSBY_API_ROOT_URL || "/api"}/users`

export default function({ setUsers }) {
  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.post(USERS_URL, {})
      const { users } = data
      setUsers(users)
      console.log({ GATSBY_API_ROOT_URL, data })
    }
    getUsers()
  }, [])
}
