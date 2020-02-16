import { Link } from "gatsby"

import "./SelectUserType.scss"
import HardIllustration from "assets/il-hard.svg"
import NormalIllustration from "assets/il-normal.svg"
import ChooseIllustration from "assets/il-choose.svg"
import SpecialIllustration from "assets/il-special.svg"

function SelectUserType() {
  return (
    <section className="choose-container">
      <h2 className="chose-title">
        Escolha qual tipo de usuário você quer consultar:
      </h2>

      <div className="selection-container">
        <div className="illustration-container">
          <ChooseIllustration />
        </div>

        <div className="content-section">
          <Link className="card-user-type" to="/usuarios?type=special">
            <div className="illustration-wrapper">
              <SpecialIllustration />
            </div>
            <p className="user-type">especial</p>
          </Link>
          <Link className="card-user-type" to="/usuarios?type=normal">
            <div className="illustration-wrapper">
              <NormalIllustration />
            </div>
            <p className="user-type">normal</p>
          </Link>
          <Link className="card-user-type" to="/usuarios?type=laborious">
            <div className="illustration-wrapper">
              <HardIllustration />
            </div>
            <p className="user-type">trabalhoso</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
export default SelectUserType
