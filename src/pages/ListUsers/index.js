import "./ListUsers.scss"
import { Helmet } from "react-helmet"

import ListUsersLogic from "./logic"
import User from "./components/User"
import Header from "components/Header"
import Footer from "components/Footer"

function ListUsers({ users, setSearch, filterInfo }) {
  return (
    <div className="list-users-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>
      <Header withSearch onSearchChange={setSearch} />

      <main className="container">
        {filterInfo}
        {users.map(user => (
          <User {...user} key={user._id} />
        ))}
      </main>

      <Footer />
    </div>
  )
}

export default ListUsersLogic(ListUsers)
