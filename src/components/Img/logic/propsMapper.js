function propsMapper({ className = "", isLoading }) {
  const pictureClass = `${className} picture ${isLoading ? "-blured" : ""}`

  return {
    pictureClass,
  }
}

export default propsMapper
