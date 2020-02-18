function handlers({ setIsInputOpen, inputRef, setSearchInputValue }) {
  return {
    onOpenSearchInput: function() {
      setIsInputOpen(true)
      setTimeout(() => {
        inputRef.current.focus()
      }, 200)
    },
    onCloseSearchInput: function() {
      setIsInputOpen(false)
      setSearchInputValue("")
    },
    onChangeSearchInput: function(e) {
      const searchInputValue = e.target.value
      setSearchInputValue(searchInputValue)
    },
  }
}

export default handlers
