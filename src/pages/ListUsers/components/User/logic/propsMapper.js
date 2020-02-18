import capitalize from "utils/capitalize"

function propsMapper({ name, picture, location, ...props }) {
  const city = location ? capitalize(location.city) : ""
  const largeUserProfile = picture ? picture.large : ""
  const state = location ? capitalize(location.state) : ""
  const thumbUserProfile = picture ? picture.thumbnail : ""
  const fullName = name ? `${capitalize(name.first)} ${name.last}` : ""

  return {
    city,
    state,
    fullName,
    largeUserProfile,
    thumbUserProfile,
  }
}

export default propsMapper
