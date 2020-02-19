import "./UserDetails.scss"
import { Helmet } from "react-helmet"

import User from "./components/User"
import UserDetailsLogic from "./logic"
import Header from "components/Header"
import Footer from "components/Footer"
import Loading from "components/Loading"
import ArrowLeft from "assets/arrow-left.svg"
import { Link } from "gatsby"

function UserDetails({ user, isLoading, backURL }) {
  return (
    <div className="user-details-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>

      <Header />

      <main className="container">
        <Link className="back-container" to={backURL}>
          <ArrowLeft className="back-icon" />
          <p className="back-label">Voltar para a listagem</p>
        </Link>

        {isLoading ? <Loading /> : <User {...user} />}
      </main>

      <Footer />
    </div>
  )
}

export default UserDetailsLogic(UserDetails)
