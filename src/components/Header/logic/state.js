import { useState, useRef } from "react"

import isClient from "utils/isClient"
import useDebounce from "utils/useDebounce"

function state() {
  const searchParamsValue = isClient()
    ? new URLSearchParams(window.location.search).get("search") || ""
    : ""
  const [isInputOpen, setIsInputOpen] = useState(!!searchParamsValue)
  const [searchInputValue, setSearchInputValue] = useState(searchParamsValue)
  const debouncedSearchValue = useDebounce(searchInputValue)
  const inputRef = useRef(null)

  return {
    inputRef,
    isInputOpen,
    setIsInputOpen,
    searchInputValue,
    setSearchInputValue,
    debouncedSearchValue,
  }
}

export default state
