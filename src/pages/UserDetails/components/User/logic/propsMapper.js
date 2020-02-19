import capitalize from "utils/capitalize"

function propsMapper({ name, picture, location }) {
  const city = location ? capitalize(location.city) : ""
  const largeUserProfile = picture ? picture.large : ""
  const state = location ? capitalize(location.state) : ""
  const thumbUserProfile = picture ? picture.thumbnail : ""
  const street = location ? capitalize(location.street) : ""
  const fullName = name
    ? `${capitalize(name.first)} ${capitalize(name.last)}`
    : ""

  return {
    city,
    state,
    street,
    fullName,
    largeUserProfile,
    thumbUserProfile,
  }
}

export default propsMapper
