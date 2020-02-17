function propsMapper({ users }) {
  const hasUsers = users && !!users.length

  return {
    hasUsers,
  }
}

export default propsMapper
