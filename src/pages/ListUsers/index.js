import "./ListUsers.scss"
import { Helmet } from "react-helmet"

import ListUsersLogic from "./logic"
import Header from "components/Header"
import Footer from "components/Footer"
import Filter from "./components/Filter"
import Loading from "./components/Loading"
import UsersList from "./components/UsersList"

function ListUsers({
  type,
  users,
  search,
  setType,
  hasUsers,
  setSearch,
  isLoading,
}) {
  return (
    <div className="list-users-page">
      <Helmet>
        <title>Juntos Somos +</title>
      </Helmet>

      <Header withSearch onSearchChange={setSearch} />

      <main className="container">
        <Filter search={search} type={type} changeType={setType} />

        {isLoading ? (
          <Loading />
        ) : (
          <UsersList hasUsers={hasUsers} users={users} />
        )}
      </main>

      <Footer />
    </div>
  )
}

export default ListUsersLogic(ListUsers)
