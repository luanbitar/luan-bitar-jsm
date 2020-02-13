import capitalize from "utils/capitalize"
import Img from "components/Img"

function User({ name, picture }) {
  console.log({ picture })
  const fullName = `${capitalize(name.first)} ${name.last}`
  return (
    <div className="user-container">
      <p className="name">{fullName}</p>
      <Img className="user-profile" {...picture} />
    </div>
  )
}
export default User
