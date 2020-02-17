import useDidUpdateEffect from "utils/useDidUpdateEffect"
import { useEffect } from "react"

function effects({ getUsers, search, type, getQueryParams }) {
  useEffect(() => {
    getQueryParams()
  }, [])

  useDidUpdateEffect(() => {
    getUsers()
  }, [search, type])
}

export default effects
