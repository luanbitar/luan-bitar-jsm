function propsMapper({ location }) {
  const { state } = location || {}
  const { type = "", search = "" } = state || {}
  const backURL = `/usuarios?type=${type}&search=${search}`
  return {
    backURL,
  }
}

export default propsMapper
