import useDidUpdateEffect from "utils/useDidUpdateEffect"

function effects({ debouncedSearchValue, onSearchChange }) {
  useDidUpdateEffect(() => {
    onSearchChange && onSearchChange(debouncedSearchValue)
  }, [debouncedSearchValue])
}

export default effects
