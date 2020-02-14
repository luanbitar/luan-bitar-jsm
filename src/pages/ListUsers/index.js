import "./ListUsers.scss"
import { Helmet } from "react-helmet"

import User from "./User"
import ListUsersLogic from "./logic"
import Header from "components/Header"

function ListUsers({ users }) {
  return (
    <div className="list-users-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>
      <Header withSearch />
      {users.map(user => (
        <User {...user} key={user._id} />
      ))}
    </div>
  )
}

export default ListUsersLogic(ListUsers)
