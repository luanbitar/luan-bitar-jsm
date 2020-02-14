import debounce from "utils/debounce"

function handlers({ setIsInputOpen, inputRef }) {
  return {
    onOpenSearchInput: function() {
      setIsInputOpen(true)
      setTimeout(() => {
        inputRef.current.focus()
      }, 200)
    },
    onSearchInputChange: debounce(value => {
      console.log({ value })
    }, 500),
  }
}

export default handlers
