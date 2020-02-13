import "./ListUsers.scss"
import { Helmet } from "react-helmet"

import User from "./User"
import ListUsersLogic from "./logic"
import Header from "components/Header"

function ListUsers({ users }) {
  return (
    <main>
      <Helmet>
        <title>Gatsby + Node.js (TypeScript) API</title>
      </Helmet>
      <Header />
      {users.map(user => (
        <User {...user} key={user._id} />
      ))}
    </main>
  )
}

export default ListUsersLogic(ListUsers)
