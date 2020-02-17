import debounce from "utils/debounce"

function handlers({ setIsInputOpen, inputRef, onSearchChange }) {
  return {
    onOpenSearchInput: function() {
      setIsInputOpen(true)
      setTimeout(() => {
        inputRef.current.focus()
      }, 200)
    },
    onCloseSearchInput: function() {
      setIsInputOpen(false)
      onSearchChange("")
    },
    onSearchInputChange: debounce(value => {
      onSearchChange && onSearchChange(value)
    }, 500),
  }
}

export default handlers
