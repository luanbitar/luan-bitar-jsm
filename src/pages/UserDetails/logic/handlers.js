import axios from "axios"
import { navigate } from "@reach/router"

const { GATSBY_API_ROOT_URL } = process.env
const USER_URL = `${GATSBY_API_ROOT_URL || "/api"}/user`

function handlers({ userID, setUser, setUserID, setIsLoading }) {
  return {
    getUserData: function() {
      setIsLoading(true)
      axios
        .post(USER_URL, {
          userID,
        })
        .then(({ data }) => {
          const { user } = data

          setUser(user[0])
          setIsLoading(false)
        })
    },
    getQueryParams: function() {
      const urlParams = new URLSearchParams(window.location.search)
      const userID = urlParams.get("userID") || ""
      setUserID(userID)
    },
  }
}

export default handlers
