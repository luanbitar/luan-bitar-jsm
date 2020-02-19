import "./UserDetails.scss"
import { Helmet } from "react-helmet"

import User from "./components/User"
import UserDetailsLogic from "./logic"
import Header from "components/Header"
import Footer from "components/Footer"
import Loading from "components/Loading"

function UserDetails({ user, isLoading }) {
  return (
    <div className="user-details-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>

      <Header />

      <main className="container">
        {isLoading ? <Loading /> : <User {...user} />}
      </main>

      <Footer />
    </div>
  )
}

export default UserDetailsLogic(UserDetails)
