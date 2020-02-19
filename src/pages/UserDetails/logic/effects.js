import useDidUpdateEffect from "utils/useDidUpdateEffect"
import { useEffect } from "react"

function effects({ getUserData, userID, getQueryParams }) {
  useEffect(() => {
    getQueryParams()
  }, [])

  useDidUpdateEffect(() => {
    getUserData()
  }, [userID])
}

export default effects
