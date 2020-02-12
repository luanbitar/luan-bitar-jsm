import axios from "axios"
import { useEffect } from "react"

export default function({ setUsers }) {
  useEffect(() => {
    async function getUsers() {
      const { data } = await axios.post(
        "https://juntos-somos-mais.bitar.now.sh/api/users",
        {},
      )
      const { users } = data
      setUsers(users)
      console.log("getting users", data)
    }
    getUsers()
  }, [])
}
