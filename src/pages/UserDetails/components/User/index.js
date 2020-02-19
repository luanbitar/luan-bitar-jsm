import "./User.scss"
import Logic from "./logic"
import Img from "components/Img"

function User({ fullName, city, state, largeUserProfile, thumbUserProfile }) {
  return (
    <div className="user-container">
      <Img
        className="user-profile"
        src={largeUserProfile}
        previewSrc={thumbUserProfile}
        debugTimeout={1000}
      />
      <p className="user-name">{fullName}</p>
      <p className="user-city">{city}</p>
      <p className="user-state">{state}</p>
    </div>
  )
}

export default Logic(User)
