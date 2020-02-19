import "./User.scss"
import Logic from "./logic"
import Img from "components/Img"
import MapIllustration from "assets/il-map.svg"

function User({
  city,
  cell,
  phone,
  email,
  state,
  street,
  fullName,
  largeUserProfile,
  thumbUserProfile,
}) {
  return (
    <div className="user-container">
      <div className="user-main-info-container">
        <Img
          className="user-profile"
          src={largeUserProfile}
          previewSrc={thumbUserProfile}
        />
        <section className="text-container">
          <p className="main-info">{fullName}</p>
          <p className="secondary-info">{email}</p>
          <p className="secondary-info">{phone}</p>
          <p className="secondary-info">{cell}</p>
        </section>
      </div>
      <div className="user-location-container">
        <section className="text-container">
          <p className="main-info">Localização</p>
          <p className="secondary-info">{street}</p>
          <p className="secondary-info">{city}</p>
          <p className="secondary-info">{state}</p>
        </section>
        <section className="map-container">
          <MapIllustration className="map-illustration" />
        </section>
      </div>
    </div>
  )
}

export default Logic(User)
