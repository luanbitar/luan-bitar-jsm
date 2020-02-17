function propsMapper({ isInputOpen }) {
  const inputClassName = `input-container ${isInputOpen ? "-open" : ""}`

  return {
    inputClassName,
  }
}

export default propsMapper
