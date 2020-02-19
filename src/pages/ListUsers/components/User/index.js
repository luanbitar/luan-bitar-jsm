import "./User.scss"
import Logic from "./logic"
import Img from "components/Img"

function User({
  city,
  state,
  onClick,
  fullName,
  largeUserProfile,
  thumbUserProfile,
}) {
  return (
    <div className="user-container" onClick={onClick}>
      <Img
        className="user-profile"
        src={largeUserProfile}
        previewSrc={thumbUserProfile}
      />
      <p className="user-name">{fullName}</p>
      <p className="user-city">{city}</p>
      <p className="user-state">{state}</p>
    </div>
  )
}

export default Logic(User)
